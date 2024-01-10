import React from "react";
import Navigation from "./Navigation";
import "./Header.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home" || location.pathname === "/";

  return (
    <header className={isHomePage ? "home-page-header" : ""}>
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
