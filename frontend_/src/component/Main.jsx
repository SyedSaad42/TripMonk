import { Divider } from "@mui/material";
import React from "react";

const Text = () =>{
    return(
        <div>
            <div style={{display: 'flex', flexDirection: 'column', fontFamily: '"Arial", sans-serif', fontSize: '55px', color: '#FFFFFF', width: 'fit-content'}}>
                <span>Fly Beyond Limits:</span>
                <span>Trip MOnk Flight Booking</span>
                <span>Experience</span>
            </div>
            <div style={{marginTop: "10px" ,display: 'flex', flexDirection: 'column', fontFamily: '"Arial", sans-serif', fontSize: '18px', color: '#FFFFFF', width: 'fit-content', }}>
                <p>For Your Journey Hassle-Free With Our Easy Online Booking. <br /><span style={{color:'#f18a53'}}>Start your journey today!</span></p>
            </div>

           
        </div>
    )
}


export default Text;