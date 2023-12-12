import React from 'react';
import Navigation from './Navigation';
import './Header.css'; 

const Header = () => {
  return (
    <header>
         <img src="/Logo_Scouts_tunisiens.jpg" alt="Logo" className="logo" />
         <Navigation />
    </header>
  );
};

export default Header;