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
          À propos de nous
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
                Les Scouts Tunisiens en Oman est une organisation dédiée à
                soutenir les jeunes en leur fournissant des opportunités
                d'apprendre, de grandir et de devenir des leaders dans leur
                communauté. Nous offrons un espace où les jeunes peuvent
                développer leurs compétences en leadership, leur autonomie et
                leur sens du service.
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
                Notre mission
              </Typography>
              <Typography variant="body1" align="justify">
                Notre mission est de contribuer au développement des jeunes, à
                travers un système de valeurs basé sur la promesse et la loi
                scoute, pour aider à construire un monde meilleur où les gens
                sont réalisés en tant qu'individus et jouent un rôle constructif
                dans la société.
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
                Histoire
              </Typography>
              <Typography variant="body1" align="justify">
                Fondée en 1977, notre organisation a commencé comme un petit
                groupe de passionnés et a grandi pour devenir un mouvement
                reconnu au service de la jeunesse tunisienne en Oman. Tout au
                long de notre histoire, nous avons été guidés par les principes
                du scoutisme et nous sommes fiers de l'impact que nous avons eu
                sur les vies de nombreux jeunes.
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
