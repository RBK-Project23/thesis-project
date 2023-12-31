import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { Container, Paper, Typography, Grid, CardMedia, AppBar } from "@mui/material";
import moment from "moment";
import Footer from "./footer";
//import logo1 from "../images/logo2.jpeg";
//import logo2 from "../images/logo1.jpeg";

const EventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.find((p) => p._id === id));

  useEffect(() => {
    dispatch(getPosts(id));
  }, [id, dispatch]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
    
      <AppBar
        position="static"
        color="inherit"
        sx={{
          borderRadius: 15,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       {/*  <img
          src={logo1}
          alt="logo1"
          height="60"
          sx={{
            marginRight: "10px",
          }}
        /> */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: 'rgba(239, 82, 87, 1)', 
            marginLeft: '20px',
            marginRight: '20px'
          }}
        >
          Événement
        </Typography>
       {/*  <img
          src={logo2}
          alt="logo2"
          height="60"
          sx={{
            marginLeft: "30px",
          }}
        /> */}
      </AppBar>
      
      <Container>
        <Paper style={{ padding: "20px", marginTop: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <CardMedia
                component="img"
                image={post.selectedFile}
                alt={post.title}
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3" component="h1">
                {post.title}
              </Typography>
              <Typography variant="h5" color="textSecondary">
                {post.creator}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {post.message}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {post.tags.map((tag, index) => (
                  <span key={index}>#{tag} </span>
                ))}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {post.likeCount} Likes
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default EventDetail;
