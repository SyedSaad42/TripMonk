// import React from "react";
// import { Button } from "@mui/material";
// const ChatBot = () =>{
//     return(
//         <div style={{display: 'flex' ,flexDirection:'row',justifyContent: 'flex-end'}}> 
//         <div style={{marginTop: '20px'}} >
           
//             <Button style={{borderRadius: '27px', color: '#FFFFFF', paddingTop: '2px',
//                 paddingBottom: '2px', paddingLeft: '7px', paddingRight: '7px', backgroundColor: '#f18a53', 
//                 fontWeight: 'bold'}}><p style={{fontSize: '16px'}}>Chat</p><img src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746048736/aiicon.png" style={{height: '2vh'}}></img></Button>
        
       
//         </div>
//         <img src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746049614/monk.png" style={{height: '20vh', marginTop: '-50px'}}>
//         </img></div>
//     )
// }

// export default ChatBot;


import React, { useState } from "react";
import { Button } from "@mui/material";
import ChatInterface from "./ChatInterface";

const ChatBot = () => {
    const [chatOpen, setChatOpen] = useState(false);

    const handleChatOpen = () => {
        setChatOpen(true);
    };

    const handleChatClose = () => {
        setChatOpen(false);
    };

    return (
        <>
            <div style={{display: 'flex', flexDirection:'row', justifyContent: 'flex-end'}}> 
                <div style={{marginTop: '20px'}} >
                    <Button 
                        onClick={handleChatOpen}
                        style={{
                            borderRadius: '27px', 
                            color: '#FFFFFF', 
                            paddingTop: '2px',
                            paddingBottom: '2px', 
                            paddingLeft: '7px', 
                            paddingRight: '7px', 
                            backgroundColor: '#f18a53', 
                            fontWeight: 'bold'
                        }}
                    >
                        <p style={{fontSize: '16px', margin: 0}}>Chat</p>
                        <img 
                            src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746048736/aiicon.png" 
                            style={{height: '2vh', marginLeft: '5px'}} 
                            alt="AI Icon"
                        />
                    </Button>
                </div>
                <img 
                    src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746049614/monk.png" 
                    style={{height: '20vh', marginTop: '-50px'}}
                    alt="Monk"
                />
            </div>
            
            {/* Chat Interface Dialog - Communicates with separate Chat Service */}
            <ChatInterface 
                open={chatOpen} 
                onClose={handleChatClose}
                chatServiceUrl="http://localhost:3001" // Your separate chat service
            />
        </>
    );
};

export default ChatBot;