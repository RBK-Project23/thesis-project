import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Events from "./component/Events";
import PhotoGallery from "./component/PhotoGallery";
import Forum from "./component/Forum";
import Chat from "./component/Chat";
import UserProfiles from "./component/UserProfiles";
import Home from "./component/Home";
import SignIn from "./component/signIn";
import SignUp from "./component/register";
import Istimara from "./component/istimara";
import GenerateIstimara from "./component/generateIstimara";
import PrivateRoutes from './component/authentification/authentification';
import UserProfilScout from "./component/userpages/UserScout";
import AboutUs from "./component/pageFooter/AboutUs";
import PrivacyPolicy from "./component/pageFooter/PrivacyPolicy";

import axios from "axios";


function App() {

  
 
  return (
    <>
      <Router>
        <Header />
       

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/chat" element={<Chat />} />
          <Route element={<PrivateRoutes />}>  
          <Route element={<Home/>} path="/" exact/>
          <Route path="/profiles" element={<UserProfilScout/>} exact />
          </Route>
         
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/استمارة-التسجيل" element={<Istimara />} />
          <Route path="/doc-istimara" element={<GenerateIstimara />} />
          <Route path="/about-us" element={<AboutUs />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
