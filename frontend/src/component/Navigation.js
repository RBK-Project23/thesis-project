import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
 
  const isAuthenticated = () => {

    return localStorage.getItem('token') != null;
  };

  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Photo Gallery</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/profiles">User Profile</Link></li>
        {!isAuthenticated() && <li id='login'><Link to="/signin">Login</Link></li>}
        {!isAuthenticated() && <li id='register'><Link to="/register">Register</Link></li>}
        {isAuthenticated() && <li id='logout'><Link to="/home" onClick={handleLogout}>Logout</Link></li>}
      </ul>
    </nav>
  );
};

// Function to handle logout
const handleLogout = () => {
    
  localStorage.removeItem('token');
  window.location.reload();
  
  
};

export default Navigation;
