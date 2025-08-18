import React from "react";

const BaseFooter = () => {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", padding: "40px 20px", marginTop: "60px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto",fontFamily:"Inter" }}>
        
        <div style={{ marginLeft:"-230px" }}>
          <h3 style={{ marginBottom: "16px" }}>TripMonk</h3>
          <p>Your hassle-free travel companion. Book flights, find deals, and plan your journey with ease.</p>
        </div>

        <div>
          <h4>Company</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/about" style={linkStyle}>About Us</a></li>
            <li><a href="/careers" style={linkStyle}>Careers</a></li>
            <li><a href="/join" style={linkStyle}>Join Our Team</a></li>
            <li><a href="/press" style={linkStyle}>Press</a></li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/help" style={linkStyle}>Help Center</a></li>
            <li><a href="/contact" style={linkStyle}>Contact Us</a></li>
            <li><a href="/faq" style={linkStyle}>FAQs</a></li>
            <li><a href="/cancellation" style={linkStyle}>Cancellation Policy</a></li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/terms" style={linkStyle}>Terms of Service</a></li>
            <li><a href="/privacy" style={linkStyle}>Privacy Policy</a></li>
            <li><a href="/cookies" style={linkStyle}>Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="https://instagram.com" style={linkStyle}>Instagram</a></li>
            <li><a href="https://twitter.com" style={linkStyle}>Twitter</a></li>
            <li><a href="https://linkedin.com" style={linkStyle}>LinkedIn</a></li>
            <li><a href="https://facebook.com" style={linkStyle}>Facebook</a></li>
          </ul>
        </div>

      </div>

      <div style={{ textAlign: "center", marginTop: "30px", borderTop: "1px solid #333", paddingTop: "20px", fontSize: "14px", color: "#aaa" }}>
        © {new Date().getFullYear()} TripMonk Inc. All rights reserved.
      </div>
    </footer>
  );
};

const linkStyle = {
  color: "#ccc",
  textDecoration: "none",
  marginBottom: "8px",
  display: "block"
};

export default BaseFooter;
