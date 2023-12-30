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
     console.log(decodedToken);
  
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
          <FaHome /> Accueil 
        </Link>
      </li>
        <li><Link to="/events">Événements</Link></li>
        <li><Link to="/scouts-programs">Programmes des Scouts</Link></li> 
        <li><Link to="/profiles">Profil Utilisateur</Link></li>
        {isAuthenticated() && (
          <li id='logout'>
            <Link to="/home" onClick={handleLogout}>
              <FaSignOutAlt /> Déconnexion 
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <li id='login'>
            <Link to="/signin">
              <FaSignInAlt /> Connexion 
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <li id='register'>
            <Link to="/register">
              <FaUserPlus /> Créer un compte 
            </Link>
          </li>
        )}
        {isAdmin() && (
          <li id='dashboard'>
            <Link to="/dashborad">
              <FaSignInAlt /> Tableau de bord
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
