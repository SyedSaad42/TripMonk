
import { Button, FormControl, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { Loader, User, UserPlus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useUserStore from "../../stores/useUserStore";


const RightSide = ()=>{

   const[email,setEmail] = useState("");
   const[password,setPassword] =  useState("");

    const {login,loading} = useUserStore();
    const handleSubmit = (e)=>{
       e.preventDefault();
      login({email,password});
      console.log({email, password},"Successfully login");
    }
     return(
        //wrapper class
        <div>
        <motion.div
        initial={{opacity: 0, y:-20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1 style={{fontFamily: 'Parkinsans',  color: "#000000"}}>Welcome Back Traveler!</h1>
            <h5 style={{fontFamily:'Parkinsans', marginTop: "-6px",marginLeft: "35px ", color:"rgb(117, 110, 110)"}}>Before we begin the adventure, Please Login</h5>
            </div>
        </motion.div>

        <motion.form
        onSubmit={handleSubmit}
        initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        transition={{duration: 0.8}}
        style={{display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px'}}
        >
            <FormControl fullWidth >
                <TextField
                id="email"
                type="email"
                required
                label="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
               
                >
                </TextField>
            </FormControl>

            <FormControl>
                <TextField
                id="password"
                type="password"
                label="Password"
                required
                value={password}
                onChange={(e)=> setPassword( e.target.value)}
                >
                </TextField>
            </FormControl>
            <div style={{display: 'flex', flexDirection: 'row-reverse', fontFamily: 'sans-serif', fontSize: '12px', color: "#000000"}}>
            <Link to="/forgotpassword" >Forgot password ?</Link>
            </div>

            <Button type="submit" disabled={loading} style={{color:"#FFFFFF", paddingLeft: "13px" , paddingRight: "13px", background: "#000000", borderRadius: "16px"}}>
               {loading?(
                <>
                <Loader /><p style={{marginLeft: "8px"}}> Loading...</p>
                </>
               ):(
                <>
                <User /><p style={{marginLeft: "8px"}}>Login</p>
                </>
               )
            }
            </Button>
        </motion.form>
        <div>
            <p style={{fontFamily: "Parkinsans", fontSize: "13px"}}>You don't have Account? Lets create one <Link to="/signup">Sign Up</Link></p>
        </div>
        </div>
     )


}

export default RightSide;