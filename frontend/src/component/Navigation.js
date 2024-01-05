import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

const Navigation = () => {
  const isAuthenticated = () => {
    return localStorage.getItem("token") != null;
  };
  const isAdmin = () => {
    const token = localStorage.getItem("token");

    if (typeof token === "string" && token.length > 0) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);

      return decodedToken.email === "admin@gmail.com";
    }

    return false;
  };

  const getUserRole = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        return decodedToken.type_user;
      } catch (error) {
        console.error("Error decoding token", error);
      }
    }
    return null;
  };

  const profileLink = () => {
    const role = getUserRole();
    switch (role) {
      case "Scouts":
        return "/UserScout";
      case "Commander":
        return "/UserCommander";
      case "Parent":
        return "/UserParent";
      default:
        return "/profiles";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav>
      <ul>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Link to="/home" style={{ display: "flex", alignItems: "center" }}>
            <FaHome style={{ marginRight: "8px" }} /> Home
          </Link>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Link to="/Impact" style={{ display: "flex", alignItems: "center" }}>
            Impact
          </Link>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Link to="/events" style={{ display: "flex", alignItems: "center" }}>
            Events
          </Link>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/scouts-programs"
            style={{ display: "flex", alignItems: "center" }}
          >
            Scouts Programs
          </Link>
        </li>

        {isAuthenticated() && (
          <li style={{ display: "flex", alignItems: "center" }}>
            <Link
              to={profileLink()}
              style={{ display: "flex", alignItems: "center" }}
            >
              My Profil
            </Link>
          </li>
        )}
        {isAuthenticated() && (
          <li style={{ display: "flex", alignItems: "center" }} id="logout">
            <Link
              to="/home"
              onClick={handleLogout}
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaSignOutAlt style={{ marginRight: "8px" }} /> Logout
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <li style={{ display: "flex", alignItems: "center" }} id="login">
            <Link
              to="/signin"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaSignInAlt style={{ marginRight: "8px" }} /> Log In
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <li style={{ display: "flex", alignItems: "center" }} id="register">
            <Link
              to="/register"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaUserPlus style={{ marginRight: "8px" }} /> Sign Up
            </Link>
          </li>
        )}
        {isAdmin() && (
          <li style={{ display: "flex", alignItems: "center" }} id="dashboard">
            <Link
              to="/dashboard"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaSignInAlt style={{ marginRight: "8px" }} /> Dashboard
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
