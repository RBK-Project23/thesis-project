import React from 'react';
import Navigation from './Navigation';
import './Header.css'; 

const Header = () => {
  return (
    <header>
         <img  style = {{ width: '160px', height: '100px', marginLeft:'2px'}}src="/flogo.png" alt="Logo" className="logo" />
         <Navigation />
    </header>
  );
};

export default Header;