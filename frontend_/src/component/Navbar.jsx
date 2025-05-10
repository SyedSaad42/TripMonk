import React from "react";
import "../styles/Navbar.css";
import { useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar__brand">
        <img src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746883200/pj9ndyi579jrvvcixe7z.png" alt="Logo" className="navbar__logo" />
        <span className="navbar__title">Trip MOnk</span>
      </div>

      <div className="navbar__nav">
        <span className="navbar__link">Home</span>
        <span className="navbar__link">Booking</span>
        <span className="navbar__link">Deals</span>
        <span className="navbar__link">Partnership</span>
        <span className="navbar__link">Support</span>
      </div>

      <div className="navbar__auth">
        <div className="navbar__button navbar__button--login" onClick={()=>{ navigate("/login")}}>Login</div>
        <div className="navbar__button navbar__button--register" onClick={() => navigate("/signup")}>Register</div>
      </div>
    </div>
  );
};

export default Navbar;
