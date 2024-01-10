import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  TextField,
  Box,
  InputAdornment,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Posts from "./Posts/Posts";
import { getPosts } from "../actions/posts";
import Footer from "./footer";
import SearchIcon from "@mui/icons-material/Search";

const Events = () => {
  const [currentId, setCurrentId] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  useEffect(() => {
    console.log("Search Term:", search);
    console.log("Posts before filtering:", posts);

    if (search.trim()) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      console.log("Filtered Posts:", filtered);
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [search, posts]);

  return (
    <>
      <Container maxWidth="lg">
        <AppBar
          position="static"
          color="inherit"
          sx={{
            borderRadius: 15,
            margin: "30px 0",
            padding: "20px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"100px",
          }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "rgba(239, 82, 87, 1)",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            Events
          </Typography>
        </AppBar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            paddingRight: 2,
          }}
        >
          <TextField
            placeholder="Search events..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              marginBottom: "80px",
              width: "25%",
              alignSelf: "center",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grow in>
          <Grid
            container
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            {filteredPosts.length > 0 ? (
              <Posts posts={filteredPosts} setCurrentId={setCurrentId} />
            ) : (
              search && (
                <Typography
                  variant="h4"
                  align="center"
                  sx={{
                    width: "100%",
                    marginTop: 2,
                  }}
                >
                  No events found matching your search tittle.
                </Typography>
              )
            )}
          </Grid>
        </Grow>
      </Container>
      <Footer />
    </>
  );
};

export default Events;
