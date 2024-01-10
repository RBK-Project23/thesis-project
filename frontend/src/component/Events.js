import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import { getPosts } from "../actions/posts";

import Footer from "./footer";

const Events = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
    <Container maxWidth="lg" >
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
          marginTop: "100px",
        }}
      >
     
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: 'rgba(239, 82, 87, 1)', 
            marginLeft: '20px',
            marginRight: '20px',
            
          }}
        >
          Events
        </Typography>
     
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    <Footer />
    
    </>
    
  );
};

export default Events;
