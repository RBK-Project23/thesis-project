import React from 'react';
import Navigation from './Navigation';
import './Header.css'; // Correct the import path

const Header = () => {
  return (
    <header>
         <img src="./public/logoo" alt="Logo" className="logo" />
         <Navigation />
    </header>
  );
};

export default Header;