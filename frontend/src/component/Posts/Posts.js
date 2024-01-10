import React from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import Post from "./Post/Post";

const Posts = ({ posts, setCurrentId }) => {
  

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={3}>
      {sortedPosts.map((post) => (
        <Grid
          key={post._id}
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <Box
            sx={{
              width: "100%", 
              height: 410, 
              flexDirection: "column",
              justifyContent: "center", 
              alignItems: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.03)",
              },
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <Post post={post} setCurrentId={setCurrentId} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
