import React, { useEffect } from "react";
import { Container, Typography, Link, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { getScoutPrograms } from "../actions/scoutPrograms";

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
        Tunisian Scouts
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const GridItem = ({ footer }) => (
  <Grid item xs={12} sm={2} key={footer.title}>
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        fontSize: "2rem",
        color: "white",
      }}
    >
      {footer.title}
    </Typography>
    <ul>
      {footer.description.map((item, index) => (
        <li key={index}>
          {footer.title === "Follow Us" ? (
            <Link
              href={item.url}
              variant="subtitle1"
              sx={{
                fontSize: "1.2rem",
                color: "white",
              }}
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
              sx={{
                fontSize: "1.2rem",
                color: "white",
              }}
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
    title: "Tunisian Scouts",
    description: [
      { label: "About Us", url: "/about-us" },
      { label: "Contact Us", url: "/contact-us" },
      { label: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
  {
    title: "Events",
    description: [
      { label: "Event 1", url: "/event1" },
      { label: "Event 2", url: "/event2" },
      { label: "Event 3", url: "/event3" },
    ],
  },

  {
    title: "Scouts Programs",
    description: [
      { label: "Program 1", url: "/program1" },
      { label: "Program 2", url: "/program2" },
      { label: "Program 3", url: "/program3" },
    ],
  },
  /*  {
    title: "Your Account",
    description: [
      { label: "Personal informations", url: "/profile" },
      { label: "Subscribe", url: "/Subscribe" },
    ],
  }, */
  {
    title: "Follow Us",
    description: [
      { label: "Facebook", url: "https://www.facebook.com/TSGOman/" },
      { label: "Twitter", url: "https://twitter.com/" },
      { label: "Instagram", url: "https://www.instagram.com/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/" },
    ],
  },
];

const Footer = () => {
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

  const updatedFooters = footers.map((footer) => {
    if (footer.title === "Events") {
      footer.description = latestThreePosts.map((post, index) => ({
        label: post.title,
        url: `/events/${post._id}`,
      }));
    }
    if (footer.title === "Scouts Programs") {
      footer.description = latestThreePrograms.map((program) => ({
        label: program.name,
        url: `/scoutPrograms/${program._id}`,
      }));
    }
    return footer;
  });
  return (
    <Container
      maxWidth={false}
      component="footer"
      sx={{
        backgroundColor: "#010911",
        backdropFilter:"9px",
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
          {
            <img
              style={{ width: "160px", height: "100px", marginLeft: "2px" }}
              src="/Flogo.png"
              alt="Logo"
              className="logo"
            />
          }
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
