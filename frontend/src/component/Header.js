import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        style={{ width: "160px", height: "70px", marginLeft: "2px" }}
        src="/Flogo.png"
        alt="Logo"
        className="logo"
      />
      <Navigation />
    </header>
  );
};

export default Header;
