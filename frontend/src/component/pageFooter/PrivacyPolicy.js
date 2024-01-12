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
          Privacy Policy
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
            zIndex: 2,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <Typography variant="h6" gutterBottom>
              Introduction
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We, the Tunisian Scouts Organization in Oman, place great 
              importance on the privacy and security of the personal information 
              of our members, volunteers, and website visitors. This privacy 
              policy aims to inform you about how we collect, use, disclose, 
              and manage your personal data.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Collection of Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We collect personal information when you register for our events, 
              participate in our forums, subscribe to our newsletter, or 
              interact with us in any other way. The types of information we may 
              collect include your name, email address, phone number, postal 
              address, and communication preferences.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Use of Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Your personal information is used to manage your membership, 
              provide you with requested services, communicate with you about 
              upcoming events, scouting activities, and organization initiatives. 
              We also use it to improve our services and for internal statistical 
              purposes.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Sharing of Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We share your personal information with third parties only when 
              necessary to provide requested services, such as registering for 
              external events or for logistical needs. We require these third 
              parties to protect your information and use it only for the 
              specified purposes.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Security
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We take the security of your personal information very seriously 
              and implement appropriate technical and organizational measures to 
              protect it against unauthorized access, alteration, disclosure, or 
              destruction.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Your Rights
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              You have the right to access your personal information, correct it, 
              request its deletion, or object to its processing for legitimate 
              reasons. To exercise these rights, please contact us using the 
              contact details provided on our website.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Changes to the Privacy Policy
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We reserve the right to modify this privacy policy at any time. All 
              changes will take effect immediately upon their publication on our 
              website. We encourage you to regularly review this policy to stay 
              informed about how we protect your information.
            </Typography>

            <Typography variant="body1">
              For any questions or concerns regarding our privacy policy, please 
              contact us at [tsgoman@gmail.com].
            </Typography>
          </div>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

