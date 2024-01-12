import React from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";
import Footer from "../footer";
import backgroundImage from "../../images/logo1.jpeg";

const AboutUs = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          position: "relative",
          padding: "3rem 0",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center center",
            opacity: 0.2,
            zIndex: -1,
          },
        }}
      >
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          sx={{ color: "#666666" }}
        >
          About Us
        </Typography>

        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                Introduction
              </Typography>
              <Typography variant="body1" align="justify">
                The Tunisian Scouts in Oman is an organization dedicated to 
                supporting youth by providing opportunities to learn, grow, 
                and become leaders in their community. We offer a space where 
                youth can develop their leadership skills, autonomy, and sense 
                of service.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                Our Mission
              </Typography>
              <Typography variant="body1" align="justify">
                Our mission is to contribute to the development of young people 
                through a value system based on the Scout promise and law, to 
                help build a better world where people are self-fulfilled as 
                individuals and play a constructive role in society.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
              sx={{
                padding: "20px",
                marginTop: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                History
              </Typography>
              <Typography variant="body1" align="justify">
                Founded in 1977, our organization began as a small group of 
                enthusiasts and has grown into a recognized movement serving 
                the Tunisian youth in Oman. Throughout our history, we have 
                been guided by the principles of Scouting and are proud of 
                the impact we have had on the lives of many young people.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;

