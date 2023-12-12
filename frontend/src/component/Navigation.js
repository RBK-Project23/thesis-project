import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
      <li><Link to="/home">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Photo Gallery</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/profiles">User Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;