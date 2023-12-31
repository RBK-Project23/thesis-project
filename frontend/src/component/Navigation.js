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

    // Check if token exists and is a string
    if (typeof token === "string" && token.length > 0) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);

      return decodedToken.email === "admin@gmail.com";
    }

    return false;
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
            <FaHome /> Accueil
          </Link>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Link to="/events" style={{ display: "flex", alignItems: "center" }}>
            Événements
          </Link>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/scouts-programs"
            style={{ display: "flex", alignItems: "center" }}
          >
            Programmes Scouts
          </Link>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/profiles"
            style={{ display: "flex", alignItems: "center" }}
          >
            Profil Utilisateur
          </Link>
        </li>
        {isAuthenticated() && (
          <li style={{ display: "flex", alignItems: "center" }} id="logout">
            <Link
              to="/home"
              onClick={handleLogout}
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaSignOutAlt /> Déconnexion
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <li style={{ display: "flex", alignItems: "center" }} id="login">
            <Link
              to="/signin"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaSignInAlt /> Connexion
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <li style={{ display: "flex", alignItems: "center" }} id="register">
            <Link
              to="/register"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaUserPlus /> Créer un compte
            </Link>
          </li>
        )}
        {isAdmin() && (
          <li style={{ display: "flex", alignItems: "center" }} id="dashboard">
            <Link
              to="/dashboard"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaSignInAlt /> Tableau de bord
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
