import React from 'react';
import Navigation from './Navigation';
import './Header.css'; 

const Header = () => {
  return (
    <header>
         <img src="/logo-no-background.png" alt="Logo" className="logo" />
         <Navigation />
    </header>
  );
};

export default Header;