import React from 'react';
import homeImage from '../images/home.jpg';
import '../component/homePage.css';
import Footer from '../component/footer';
import RecipeReviewCard from '../component/card'



const Home = () => {
  return <> 
  
  <img id='home-image' src={homeImage} alt="Home" />
  <span className="imageText">  مرحبا بكم بالكشافة التونسية بسلطنة عمان</span>
  <div id='news'>
    <h2>
    الأحداث القادمة
    </h2>
  </div>
  <div id='event'>
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
  </div>


  <Footer />
  </>;
};

export default Home;