import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Events from "./component/Events";
import Home from "./component/Home";
import SignIn from "./component/signIn";
import SignUp from "./component/register";
import Istimara from "./component/istimara";
import GenerateIstimara from "./component/generateIstimara";
import PrivateRoutes from "./component/authentification/authentification";
import UserProfilScout from "./component/userpages/UserScout";
import AboutUs from "./component/pageFooter/AboutUs";
import PrivacyPolicy from "./component/pageFooter/PrivacyPolicy";
import ContactUs from "./component/pageFooter/ContactUs";
import EventDetail from "./component/EventDetail";
import ScoutsProgramsPage from "./component/ScoutsPrograms";
import Dashborad from '../src/component/dashboard';
import Engagement from "./component/engagement";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" exact />
            <Route path="/profiles" element={<UserProfilScout />} exact />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/استمارة-التسجيل" element={<Istimara />} />
          <Route path="/doc-istimara" element={<GenerateIstimara />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/scouts-programs" element={<ScoutsProgramsPage />} />
          <Route path="/dashborad" element={<Dashborad />} />
          <Route path="/Engagement" element={<Engagement />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
