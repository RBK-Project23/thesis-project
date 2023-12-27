import React, { useEffect } from "react";
import { Container, Typography, Link, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      style={{ color: "white" }}
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link style={{ color: "white" }} href="https://scoutTun.com/">
        Scout Tunisia
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const GridItem = ({ footer }) => (
  <Grid item xs={12} sm={2} key={footer.title}>
    <Typography variant="h6" style={{ color: "white" }} gutterBottom>
      {footer.title}
    </Typography>
    <ul>
      {footer.description.map((item, index) => (
        <li key={index}>
          {footer.title === "Follow Us" ? (
            <Link
              href={item.url}
              variant="subtitle1"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer" 
            >
              {item.label}
            </Link>
          ) : (
            <Link
              component={RouterLink}
              to={item.url}
              variant="subtitle1"
              style={{ color: "white" }}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </Grid>
);


const footers = [
  {
    title: "Scout Tunisia",
    description: [
      { label: "About Us", url: "/about-us" },
      { label: "Contact Us", url: "/contact-us" },
      { label: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
  {
    title: "Event",
    description: [
      { label: "Event 1", url: "/event1" },
      { label: "Event 2", url: "/event2" },
      { label: "Event 3", url: "/event3" },
    ],
  },
  {
    title: "Your Account",
    description: [
      { label: "Personal informations", url: "/profile" },
      { label: "Subscribe", url: "/Subscribe" },
    ],
  },
  {
    title: "Follow Us",
    description: [
      { label: "Facebook", url: "https://www.facebook.com/TSGOman/" },
      { label: "Twitter", url: "https://twitter.com/" },
      { label: "Instagram", url: "https://www.instagram.com/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/" },
    ],
  }
];

const Footer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const latestThreePosts = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  const updatedFooters = footers.map((footer) => {
    if (footer.title === "Event") {
      footer.description = latestThreePosts.map((post, index) => ({
        label: post.title,
        url: `/events/${post._id}`,
      }));
    }
    return footer;
  });
  return (
    <Container
      maxWidth={false}
      component="footer"
      sx={{
        backgroundColor: "#000F16",
        py: [3, 6],
        color: "white",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={2} md={3}>
          {<img src="/Scout_tunisen1.png" alt="Logo" className="logo" />}
        </Grid>
        {updatedFooters.map((footer) => (
          <GridItem footer={footer} key={footer.title} />
        ))}
      </Grid>
      <Copyright sx={{ mt: 5, textAlign: "center" }} />
    </Container>
  );
};

export default Footer;
