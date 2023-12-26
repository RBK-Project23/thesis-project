import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import Footer from "../footer";
import backgroundImage from "../../images/logo1.jpeg";

const PrivacyPolicy = () => {
  return (
    <>
      <Container maxWidth="lg" component="main" sx={{ padding: "3rem 0" }}>
        <Typography
          variant="h2"
          gutterBottom
          component="h1"
          sx={{ textAlign: "center", mb: 4, color: "#666" }}
        >
          Politique de confidentialité
        </Typography>

        <Paper
          elevation={3}
          sx={{
            position: "relative",
            p: 3,
            mb: 3,
            "&::before": {
              content: '""',
              display: "block",
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
            // Make sure the text is visible on top of the ::before pseudo-element
            zIndex: 2,
            // Apply additional styling to create a white semi-transparent overlay
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          {/* This div acts as an overlay between the background image and the content */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <Typography variant="h6" gutterBottom>
              Introduction
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Nous, l'organisation des Scouts Tunisiens en Oman, accordons une
              grande importance à la confidentialité et à la sécurité des
              informations personnelles de nos membres, bénévoles et visiteurs
              de notre site web. Cette politique de confidentialité vise à vous
              informer sur la manière dont nous recueillons, utilisons,
              divulguons et gérons vos données personnelles.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Collecte des informations
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Nous collectons des informations personnelles lorsque vous vous
              inscrivez à nos événements, participez à nos forums, vous abonnez
              à notre newsletter ou interagissez avec nous de toute autre
              manière. Les types d'informations que nous pouvons collecter
              incluent votre nom, adresse e-mail, numéro de téléphone, adresse
              postale et préférences de communication.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Utilisation des informations
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Vos informations personnelles sont utilisées pour gérer votre
              adhésion, vous fournir les services demandés, communiquer avec
              vous concernant les événements à venir, les activités de scoutisme
              et les initiatives de l'organisation. Nous les utilisons également
              pour améliorer nos services et pour des besoins statistiques
              internes.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Partage des informations
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Nous ne partageons vos informations personnelles avec des tiers
              que lorsque cela est nécessaire pour fournir les services
              demandés, par exemple lors de l'inscription à des événements
              externes ou pour des besoins logistiques. Nous exigeons de ces
              tiers qu'ils protègent vos informations et ne les utilisent que
              pour les fins spécifiées.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Sécurité
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Nous prenons la sécurité de vos informations personnelles très au
              sérieux et mettons en œuvre des mesures techniques et
              organisationnelles appropriées pour les protéger contre l'accès
              non autorisé, la modification, la divulgation ou la destruction.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Vos droits
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Vous avez le droit d'accéder à vos informations personnelles, de
              les corriger, de demander leur suppression ou de vous opposer à
              leur traitement pour des motifs légitimes. Pour exercer ces
              droits, veuillez nous contacter via les coordonnées fournies sur
              notre site web.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Modifications de la politique de confidentialité
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Toutes les modifications entreront
              en vigueur immédiatement après leur publication sur notre site
              web. Nous vous encourageons à consulter régulièrement cette
              politique pour rester informé de la manière dont nous protégeons
              vos informations.
            </Typography>

            <Typography variant="body1">
              Pour toute question ou préoccupation concernant notre politique de
              confidentialité, veuillez nous contacter à
              [scouting.oman@gmail.com].
            </Typography>
          </div>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
