import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import homeImage from "../images/home_new.jpg";
import "../component/homePage.css";
import Footer from "../component/footer";
// import SlideCard from "./slider"
import Post from "./Posts/Post/Post";
import ScoutsProgram from "./ScoutsPrograms/ScoutsProgram/ScoutsProgram";
import { Grid } from "@mui/material";
import AboutCard from "./BCardH";
import Awrapper from "./Awrraper";

import { getScoutPrograms } from "../actions/scoutPrograms";
import "leaflet/dist/leaflet.css";
import { relativeTimeRounding } from "moment";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const scoutPrograms = useSelector((state) => state.scoutPrograms);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getScoutPrograms());
  }, [dispatch]);

  const latestThreePosts = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  const latestThreePrograms = scoutPrograms
    .slice()
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .slice(0, 3);
  return (
    <>
      <img id="home-image" src={homeImage} alt="Home" />

      {
        <Grid
          className="imageText"
          style={{
            backgroundColor: "rgba(25, 51, 77, 0.315)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            backdropfilter: "9px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "baseline",
            borderRadius: "5px",
            marginLeft: "50px",
          }}
        >
          {" "}
          <strong
            style={{ margin: "20px", marginBottom: "10px", color: "#f5701d" }}
          >
            {" "}
            Tunisian Scouts in the Sultanate of Oman
            <br />
          </strong>
          <h5>
            {" "}
            Give young people the skills <br />
            and means to create a better world
          </h5>
          <a
            href="/register"
            className="joinus-button"
            style={{
              marginBottom: "20px",
              marginTop: "15px",
              marginRight: "px",
              fontSize: "2vh",
            }}
          >
            {" "}
            join us
          </a>
        </Grid>
      }
      <AboutCard />
      <div className="donate-section">
        <p className="donate-text" style={{ color: "" }}>
          Donate to Tunisian Scouts in the Sultanate of Oman, today!
          <br /> Your support makes all the difference.
        </p>
        <a href="/donate" className="donate-button">
          Donate now
        </a>
      </div>

      <div id="news">
        <h2 className="section-title">Events</h2>
      </div>
      <div id="event">
        {latestThreePosts.map((post) => (
          <div key={post._id}>
            <Post post={post} setCurrentId={() => {}} showActions={false} />
          </div>
        ))}
      </div>

      <div id="news">
        <h2 className="section-title">Scouts Programs</h2>
      </div>

      <div id="scout-programs">
        {latestThreePrograms.map((program) => (
          <div key={program._id}>
            <ScoutsProgram
              program={program}
              setCurrentId={() => {}}
              showActions={false}
            />
          </div>
        ))}
      </div>
      <div id="news">
        <h2 className="section-title">Explore Our Adventures</h2>
      </div>
      {/* <SlideCard/> */}
      <Awrapper />
      <Footer />
    </>
  );
};

export default Home;
