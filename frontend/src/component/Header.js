import React from 'react';
import Navigation from './Navigation';
import './Header.css'; 

const Header = () => {
  return (
    <header>
         <img src="/Scout_tunisen1.png" alt="Logo" className="logo" />
         <Navigation />
    </header>
  );
};

export default Header;