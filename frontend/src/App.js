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
import ScoutForm from './component/Scout/ScoutForm';
import ParentForm from './component/parent/ParentForm';
import CommanderForm from './component/commander/CommanderForm';
import axios from "axios";


function App() {

  const [scouts, setScouts] = useState([]);

  useEffect(() => {
    const fetchScouts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/scouts');
        setScouts(response.data);
      } catch (error) {
        console.error('Error fetching scouts:', error);
      }
    };

    fetchScouts();
  }, []);

  const handleScoutAdded = (newScout) => {
    setScouts([...scouts, newScout]);
  };
   // const [parents, setParents] = useState([]);

  // useEffect(() => {
  //   const fetchParents = async () => {
  //     try {
  //       const response = await axios.get('/parents');
  //       setParents(response.data);
  //     } catch (error) {
  //       console.error('Error fetching parents:', error);
  //     }
  //   };

  //   fetchParents();
  // }, []);

  // const handleParentAdded = (newParent) => {
  //   setParents([...parents, newParent]);
  // };
// const [commanders, setCommanders] = useState([]);

  // useEffect(() => {
  //   const fetchCommanders = async () => {
  //     try {
  //       const response = await axios.get('/commanders');
  //       setCommanders(response.data);
  //     } catch (error) {
  //       console.error('Error fetching commanders:', error);
  //     }
  //   };

  //   fetchCommanders();
  // }, []);

  // const handleCommanderAdded = (newCommander) => {
  //   setCommanders([...commanders, newCommander]);
  // };
 
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
          <Route path="/profiles" element={<ScoutForm onScoutAdded={handleScoutAdded} />} exact />
          </Route>
         
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/استمارة-التسجيل" element={<Istimara />} />
          <Route path="/doc-istimara" element={<GenerateIstimara />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
