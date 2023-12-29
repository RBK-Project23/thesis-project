import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';




const Navigation = () => {
 
  const isAuthenticated = () => {
    return localStorage.getItem('token') != null;
  };
  const isAdmin = () => {
    const token = localStorage.getItem('token');
  
    // Check if token exists and is a string
    if (typeof token === 'string' && token.length > 0) {
      const decodedToken = jwtDecode(token);
  
      return decodedToken.email === 'admin@gmail.com';
    }
  
    return false;
  };
  

  
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <nav>
      <ul>
      <li>
        <Link to="/home">
          <FaHome /> Home 
        </Link>
      </li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/scouts-programs">Scouts Programs</Link></li> 
        <li><Link to="/profiles">User Profile</Link></li>
        {isAuthenticated() && (
          <li id='logout'>
            <Link to="/home" onClick={handleLogout}>
              <FaSignOutAlt /> Logout 
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <li id='login'>
            <Link to="/signin">
              <FaSignInAlt /> Login 
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <li id='register'>
            <Link to="/register">
              <FaUserPlus /> Register 
            </Link>
          </li>
        )}
        {isAdmin() && (
          <li id='dashboard'>
            <Link to="/dashborad">
              <FaSignInAlt /> Dashboard
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
