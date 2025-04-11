import jwt from "jsonwebtoken";
import User from "../module/auth.module.js";
export const protectRoute = async (req , res , next ) => {
    try {
        const accessToken = req.cookies.accessToken;

        if(!accessToken) {
            return res.status(401).json({message: "Unauthorized - No access token provided"});
        }

        try {
            const decoded = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET); // so this check if the access token is real and also if it is expired or not if nto then it sreturns a payload of the user data 
            const user = await User.findById(decoded.user.selection("-password")); // now we use

            if(!user){
                return res.status(401).json({message: "User not found"});
            }

          req.user = user;

          next();


        } catch (error) {
            if(error.name ==="TokenExpiredError"){
                return res.status(401).json({message: "Unauthorized - Access token expired"});

            }
            throw error;
        }
    }catch(error){
        console.log("Error in protectRoute middleware", error.message);
		return res.status(401).json({ message: "Unauthorized - Invalid access token" });
    }
};

export const admin = async function (req,res,next) {
    if(req.user && req.user.role==="admin"){
        return next();
    }else {
        return res.status(401).json({message: "Access denied- Only admin can access this"})
    }
}