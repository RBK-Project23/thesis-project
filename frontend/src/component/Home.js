import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import homeImage from "../images/home_new.jpg";
import "../component/homePage.css";
import Footer from "../component/footer";
import SlideCard from "./slider";
import Post from "./Posts/Post/Post";
import ScoutsProgram from "./ScoutsPrograms/ScoutsProgram/ScoutsProgram";

import { getScoutPrograms } from "../actions/scoutPrograms";
import "leaflet/dist/leaflet.css";

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
        <span className="imageText">
          {" "}
          Welcome to Tunisian Scouts <br/> in the Sultanate of Oman
        </span>
      }

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
      <div className="donate-section">
        <p className="donate-text">
          Donate to Tunisian Scouts in the Sultanate of Oman, today!
          <br /> Your support makes all the difference.
        </p>
        <a href="/donate" className="donate-button">
          Donate now
        </a>
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
      <SlideCard />

      <Footer />
    </>
  );
};

export default Home;
