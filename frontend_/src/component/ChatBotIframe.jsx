import React, { useEffect, useRef } from "react";

const ChatbotIframe = ({ user, tripId }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== "http://localhost:3001") return;
      if (event.data.type === "REPLY") {
        console.log("Chatbot replied:", event.data.message);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (iframeRef.current && user && tripId) {
        iframeRef.current.contentWindow.postMessage(
          { type: "GREETING", user, tripId },
          "http://localhost:3001"
        );
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [user, tripId]);

  return (
    <div style={{ position: "fixed", bottom: "100px", right: "40px", zIndex: 1001 }}>
      <iframe
        ref={iframeRef}
        id="chatbot-frame"
        src="http://localhost:3001"
        title="Chatbot"
        style={{
          width: "400px",
          height: "600px",
          border: "2px solid #f18a53",
          borderRadius: "16px",
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.3)",
          backgroundColor:"burlywood"
        }}
      />
    </div>
  );
};

export default ChatbotIframe;
