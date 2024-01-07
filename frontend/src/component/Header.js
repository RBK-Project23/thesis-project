import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        style={{ width: "60px", height: "60px", marginLeft: "20px" }}
        src="/logo-no-background2.png"
        alt="Logo"
        className="logo"
      />
      <Navigation />
    </header>
  );
};

export default Header;
