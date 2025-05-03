import React from "react";
import { Button } from "@mui/material";
const ChatBot = () =>{
    return(
        <div style={{display: 'flex' ,flexDirection:'row',justifyContent: 'flex-end'}}> 
        <div style={{marginTop: '20px'}} >
           
            <Button style={{borderRadius: '27px', color: '#FFFFFF', paddingTop: '2px',
                paddingBottom: '2px', paddingLeft: '7px', paddingRight: '7px', backgroundColor: '#f18a53', 
                fontWeight: 'bold'}}><p style={{fontSize: '16px'}}>Chat</p><img src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746048736/aiicon.png" style={{height: '2vh'}}></img></Button>
        
       
        </div>
        <img src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746049614/monk.png" style={{height: '20vh', marginTop: '-50px'}}>
        </img></div>
    )
}

export default ChatBot;