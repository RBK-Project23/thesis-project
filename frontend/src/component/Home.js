import React from 'react';
import homeImage from '../images/home.jpg';
import '../component/homePage.css';
import Footer from '../component/Scout/footer'



const Home = () => {
  return <> 
  
  <img id='home-image' src={homeImage} alt="Home" />
  <span className="imageText">  مرحبا بكم بالكشافة التونسية بسلطنة عمان</span>

  <Footer />
  </>;
};

export default Home;