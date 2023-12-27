import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import homeImage from "../images/home.jpg";
import "../component/homePage.css";
import Footer from "../component/footer";
/* import RecipeReviewCard from "../component/card"; */
import Post from "./Posts/Post/Post";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const latestThreePosts = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);
  return (
    <>
      <img id="home-image" src={homeImage} alt="Home" />
      <span className="imageText">
        {" "}
        مرحبا بكم بالكشافة التونسية بسلطنة عمان
      </span>
      <div id="news">
        <h2>الأحداث القادمة</h2>
      </div>
      <div id="event">
        {latestThreePosts.map((post) => (
          <Post
            key={post._id}
            post={post}
            setCurrentId={() => {}}
            showActions={false}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
