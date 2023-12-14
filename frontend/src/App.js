import React from "react";
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
          <Route path="/profiles" element={<UserProfiles />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
