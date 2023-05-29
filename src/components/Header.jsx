import logo from "../../logo.png";
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <img alt="logo" src={logo} />
      <h1>Food Walk APP</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
