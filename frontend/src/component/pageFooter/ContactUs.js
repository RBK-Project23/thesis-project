import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import Footer from "../footer";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7000/email/contact",
        formData
      );
      console.log(response.data);
      // Handle success by updating state with success message
      setFormStatus({
        message: "Votre message a été envoyé avec succès!",
        isError: false,
      });
      // Optionally, reset the form or navigate the user to a different page
    } catch (error) {
      console.error("There was an error sending the contact form:", error);
      // Handle error by updating state with error message
      setFormStatus({
        message: "Erreur lors de l'envoi du message. Veuillez réessayer.",
        isError: true,
      });
    }
  };

  return (
    <>
      <Container maxWidth="md" component="main" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contactez-nous
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Envoyer
              </Button>
              {/* Display success or error message */}
              {formStatus.message && (
                <Typography
                  color={formStatus.isError ? "error" : "primary"}
                  sx={{ mt: 2 }}
                >
                  {formStatus.message}
                </Typography>
              )}
            </Grid>
          </Grid>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
