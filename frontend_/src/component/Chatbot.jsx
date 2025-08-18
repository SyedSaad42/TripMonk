import React, { useState } from "react";
import { Button } from "@mui/material";
import ChatbotIframe from "./ChatBotIframe.jsx" // Your iframe

const ChatBot = () => {
  const [chatOpen, setChatOpen] = useState(false);

    const userName = "Syed"; // from user context or login
  const tripId = "Trip_456";

  const handleChatOpen = () => setChatOpen((prev) => !prev);

  return (
    <>
      <div style={{ position: "fixed", bottom: "40px", right: "40px", zIndex: 1000 }}>
        <Button
          onClick={handleChatOpen}
          style={{
            borderRadius: "50%",
            padding: "12px 16px",
            backgroundColor: "#f18a53",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746048736/aiicon.png"
            alt="Chat"
            style={{ height: "30px" }}
          />
        </Button>
      </div>

      {chatOpen && <ChatbotIframe />}
    </>
  );
};

export default ChatBot;
