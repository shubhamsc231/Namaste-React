import { LOGO_URL } from "./utils/constants";
import React, { useState } from "react";
import { Link } from "react-router";
const Header = () => {
  const [btnName, setbtnName] = useState("LOGIN");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              if (btnName === "LOGIN") {
                setbtnName("LOGOUT");
              } else {
                setbtnName("LOGIN");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
