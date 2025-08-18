import { redis } from "../lib/redis.js";
import User from "../module/auth.module.js";
import jwt from "jsonwebtoken";


///first we are learing to generate tokens
const generateToken = (userId) => {
    const accessToken = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "15m",});
    const refreshToken = jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d",});
    return {accessToken,refreshToken};

};

///second we will learn how to store a token
const storeRefreshToken = async (userId, refreshToken) =>{ // we are going to take user id : to store the refreshtoken as the key value in redis
      await redis.set(`refresh_token:${userId}`, refreshToken, "EX", 7 * 24  * 60  * 60); // so in redis its gonna look like refreshtoken_syed0003 : fghnbvfghbvcfghbv(refreshtoken) that ex in 7 days
};

//now we are going to store cookies then will get sent to the server when http request is made
const setCookies = (res, accessToken , refreshToken) => {
    res.cookie("accessToken", accessToken,{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 15 * 60 * 1000,
    });
    res.cookie("refreshToken",refreshToken,{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
}


//// now we will make the sign up , login , logout contrller
export const signup = async(req,res) =>{
 // we will check if the user is already a user or not 
 const {name , email, password} = req.body;
 try{

 const userExists = await User.findOne({email});
 if(userExists){
    res.status(401).json({message : "User Already Exists!"});
 }else {
 /// as we have checked the user doesnt exist so we crate the user

 const user = await User.create({name, email, password});
 // then we create tokens // store them // reflect them

 const{accessToken,refreshToken} = generateToken(user._id);
 await storeRefreshToken(user._id, refreshToken);

 setCookies(res,accessToken,refreshToken);
   res.status(200).json({
            _id: user._id,
			name: user.name,
			email: user.email,
   });
 
 }
 }
 catch(error){
   console.log("Error in signup controller", error.message);
   res.status(500).json({message: error.message});
 }

};

export const login = async (req,res) =>{
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email});

if(user && (await user.comparePassword(password))){
  const{accessToken,refreshToken} = generateToken(user._id);
  await storeRefreshToken(user._id,refreshToken);
  setCookies(res,accessToken,refreshToken);
  
  res.status(200).json({message: "LogedIn Successfully",
                 _id: user._id,
				name: user.name,
				email: user.email,
  })
}
else {
     res.status(400).json({message: "Invalid email or password"})
}
}catch(error){
    console.log("Error in login controller");
    res.status(500).json({message: error.message});

}
};

//logout
export const logout = async (req,res) =>{

    try{
       const refreshToken = req.cookies.refreshToken;

       if(refreshToken){
        const decoded = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);

        await redis.del(`refresh_token: ${decoded.userId}`);
       }

        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        res.json({message: "Logged out successfully"});
    }
    catch(error){
         console.log("Error in logout controller");
         res.status(500).json({message: error.message});
    }

};


/// so using refreshtoken we generatee the  access token ... as accestoken expires in 15 min and user sticks longer than 15 min then  refreshtoken 
//will be verifed the refresh token from cookie to the one stored in redis .. turned out same then  it makes a new accesstoken
export const refreshToken = async (req,res) => {
try {
     const refreshToken = req.cookies.refreshToken;

     if(!refreshToken){
        return res.status(401).json({message: "No refresh token provided"});
     }

     const decoded = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
     const storedToken = await redis.get(`refresh_token: ${decoded.userId}`);

     if(storedToken !==refreshToken){
        return res.status(401).json({ message: "Invalid refresh token" });
     }
 
     const accessToken = jwt.sign({userId:decoded.userId},process.env.ACCESS_TOKEN_SECRET,{expiresIn: "15m"},);

     res.cookie("accessToken",accessToken,{
        httpOnly: true,
        secure: process.env.NODE_ENV==="production",
      sameSite: "strictl",
      maxAge: 15* 60 * 1000,
     });

     res.json({message: "Token refreshed successfully"});

} catch (error) {
    console.log("Error in refreshToken controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
}

}
