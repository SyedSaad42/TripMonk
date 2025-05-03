import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__brand">
        <img src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1745596936/jsqk0f0fmhhu9oi4yuzb.png" alt="Logo" className="navbar__logo" />
        <span className="navbar__title">Trip MOnk</span>
        <img src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1745596934/la4qvrw4mtmu81binksm.png" alt="Logo" className="navbar__sub_logo" />
      </div>

      <div className="navbar__nav">
        <span className="navbar__link">Home</span>
        <span className="navbar__link">Booking</span>
        <span className="navbar__link">Deals</span>
        <span className="navbar__link">Partnership</span>
        <span className="navbar__link">Support</span>
      </div>

      <div className="navbar__auth">
        <div className="navbar__button navbar__button--login">Login</div>
        <div className="navbar__button navbar__button--register">Register</div>
      </div>
    </div>
  );
};

export default Navbar;
