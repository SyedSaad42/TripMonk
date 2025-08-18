import { Divider } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
const Text = () =>{
    return(
        <div>
             <motion.div
        initial={{opacity: 0, y:-30}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1.0}}>
       
            <div style={{display: 'flex', flexDirection: 'column', marginTop:"-20px" }}>
            <div style={{display: 'flex', flexDirection: 'column', fontFamily: '"Arial", sans-serif', fontSize: '65px', color: '#FFFFFF', width: 'fit-content',textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)'}}>
                <span style={{color: '#000000',textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)'}}>Travel Beyond Limits:</span>
                <span>Trip MOnk Travel Booking</span>
                <span>Experience</span>
            </div>
          <div style={{marginTop: "16px" ,display: 'flex', flexDirection: 'column', fontFamily: '"Arial", sans-serif', fontSize: '20px', color: '#000000', width: 'fit-content', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)'}}>
                <span style={{textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)' , color:"black"}}>Start your journey today!</span>
            </div>
            
            </div>
        </motion.div>
             
            

           
        </div>
    )
}


export default Text;