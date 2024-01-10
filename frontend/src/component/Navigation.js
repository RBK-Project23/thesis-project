import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { Menu, MenuItem, Button } from "@mui/material";

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

  const showCreateMenu = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const role = decodedToken.type_user;
      return decodedToken.email === "admin@gmail.com" || role === "Commander";
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [eventsAnchorEl, setEventsAnchorEl] = useState(null);
  const [scoutsProgramsAnchorEl, setScoutsProgramsAnchorEl] = useState(null);

  const handleEventsClick = (event) => {
    setEventsAnchorEl(event.currentTarget);
  };

  const handleScoutsProgramsClick = (event) => {
    setScoutsProgramsAnchorEl(event.currentTarget);
  };

  const handleEventsClose = () => {
    setEventsAnchorEl(null);
  };

  const handleScoutsProgramsClose = () => {
    setScoutsProgramsAnchorEl(null);
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
          <Button
            style={{
              color: "white",
              textTransform: "none",
              fontSize: "1.2rem",
            }}
            aria-controls="events-menu"
            aria-haspopup="true"
            onClick={handleEventsClick}
          >
            Events
          </Button>
          <Menu
            id="events-menu"
            anchorEl={eventsAnchorEl}
            keepMounted
            open={Boolean(eventsAnchorEl)}
            onClose={handleEventsClose}
          >
            <MenuItem onClick={handleEventsClose}>
              <Link
                to="/events"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Events
              </Link>
            </MenuItem>
            {showCreateMenu() && (
              <MenuItem onClick={handleEventsClose}>
                <Link
                  to="/create-event"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Create Event
                </Link>
              </MenuItem>
            )}
          </Menu>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{
              color: "white",
              textTransform: "none",
              fontSize: "1.2rem",
            }}
            aria-controls="scout-programs-menu"
            aria-haspopup="true"
            onClick={handleScoutsProgramsClick}
          >
            Scouts Programs
          </Button>
          <Menu
            id="scout-programs-menu"
            anchorEl={scoutsProgramsAnchorEl}
            keepMounted
            open={Boolean(scoutsProgramsAnchorEl)}
            onClose={handleScoutsProgramsClose}
          >
            <MenuItem onClick={handleScoutsProgramsClose}>
              <Link
                to="/scouts-programs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Scout Programs
              </Link>
            </MenuItem>
            {showCreateMenu() && (
              <MenuItem onClick={handleScoutsProgramsClose}>
                <Link
                  to="/create-scout-program"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Create Scout Program
                </Link>
              </MenuItem>
            )}
          </Menu>
        </li>

        {isAuthenticated() && getUserRole() && (
          <li style={{ display: "flex", alignItems: "center" }}>
            <Link
              to={profileLink()}
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
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
