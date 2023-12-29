import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {
  Radio,
  FormControl,
} from "@mui/material";

export default function Engagement() {
  const [Condition, setCondition] = useState("no");
  const [participation, setParticipation] = useState("no");

  const handleChangeParticipation = (event) => {
    setParticipation(event.target.value);
  };

  const handleChange = (event) => {
    Condition(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // Extract form data
    const formData = {};
    data.forEach((value, key) => {
      formData[key] = value;
    });

    // Function to convert local file to data URL
    const fileToDataUrl = async (filePath) => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error("Error loading image:", error);
        return null;
      }
    };

    // Loading logos
    const logo1Path = "/logo1.jpeg";
    const logo2Path = "/logo2.jpeg";
    const logo1ImageDataUrl = await fileToDataUrl(logo1Path);
    const logo2ImageDataUrl = await fileToDataUrl(logo2Path);

    // PDF document definition
    const docDefinition = {
      header: {
        columns: [
          {
            image: logo1ImageDataUrl,
            width: 50,
          },
          {
            text: " Guide de l'Engagement Parental : Accompagner son Enfant dans le Monde Scout",
            alignment: "center",
            fontSize: 12, // Adjust the font size as needed
            bold: true,
            margin: [0, 10, 10, 10],
            width: "*",
          },
          
          {
            image: logo2ImageDataUrl,
            width: 50,
            alignment: "right",
            columns: [
              {
                image: logo1ImageDataUrl,
                width: 50,
              },
           
              {
                image: logo2ImageDataUrl,
                width: 50,
                alignment: "right",
                margin: [0, 10, 10, 10],
              },
            ],
          },
        ],
      },
      content: [
        {
          canvas: [
            {
                type: "rect",
                x: 10,
                y: 10,
                w: 520,
                h: 700,
                r: 5, // corner radius
                lineWidth: 2,
              },
  
            //   {
            //     type: "rect",
            //     x: 50, // adjust the x-coordinate as needed
            //     y: 50, // adjust the y-coordinate as needed
            //     w: 100, // adjust the width as needed
            //     h: 100, // adjust the height as needed
            //     r: 5, // corner radius
            //     lineWidth: 1,
            //   },
          ],
        },
        {
          stack: [
            {
              text: `
          
             
              je soussigné ${formData.fullnameP || ''}
              Parent Scout ${formData.fullnameS || ''} Titulaire d'un numéro national ${
                formData.cin ? `C.I.N : ${formData.cin}` : ''
              } 
              délivré le ${formData.datecin || ''}  par ${formData.placecin || ''}
              Titulaire d'un numéro de carte de séjour  ${formData.visaNum || ''}  
               Délivré le ${formData.dateEndVisa || ''}  par ${
                formData.placevisa || ''
              }  
              Je soumets une demande à la direction du Régiment Scout Tunisien au Sultanat d'Oman pour participer à une activité de scoutisme, pour (mon/ma) (fils/fille),
              Pour la saison de recrutement 2023/2024, je m'engage à ce qui suit :
              1- Réviser et accepter les statuts et statuts des Scouts Tunisiens.
              2- Paiement des informations d'inscription annuelles pour le régiment, l'uniforme de scout et l'uniforme d'activité.
              3- Suivi des programmes scouts de la troupe dans laquelle mon enfant est actif.
              4- Accompagnement des activités et des réunions dédiées aux parents et communication avec la direction du groupe chaque fois que nécessaire.
              5- Partager de photos et de vidéos de l'activité scoute de mon enfant sur les réseaux sociaux officiels du groupe. : ${
                formData.yes === 'yes' ? 'Oui' : 'Non'
              }
              Je certifie l'exactitude des informations fournies dans cette déclaration.
              \n Remarque :
              L'adhésion annuelle au groupe ne couvre pas l'assurance du participant pendant les activités hebdomadaires, les camps ou les sorties. 
              Veuillez remettre une copie de la carte médicale au commandant des scouts pour toute participation aux activités hebdomadaires, aux camps ou aux sorties.
              Les parents peuvent consulter les règlements internes et fondamentaux des Scouts Tunisiens, que ce soit dans le groupe officiel du groupe sur WhatsApp "La Revue Scout", ou sur la page officielle du groupe sur Facebook. 

              \n Nom et prénom manuscrits ..............................................
              
              Signature
              
              `,
              style: 'subheader',
              absolutePosition: { x: 60, y: 40 },
            },
          ],
        },
      ],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5],
        },
      },
    };

    // Generate and download PDF
    pdfMake.createPdf(docDefinition).download("Engagement.pdf");
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/engag.jpg)`,
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="lg"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "10px",
            marginRight: "10px",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
            marginTop: "-30px", // Add top margin if needed
          }}
        >
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 4 }}
            >
              <Card
                sx={{
                  height: "1200 vh", // Adjust the height as needed
                  width: "100%",
                  backgroundColor: "rgba(240, 240, 240, 0.7)",
                  marginLeft: "10px",
                  marginRight: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="fullnameP"
                    label="Nom et prénom Parent"
                    name="fullnameP"
                    autoComplete="family-name"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="fullnameS"
                    label="Nom et prénom Scout"
                    name="fullnameS"
                    autoComplete="family-name"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid container spacing={2}>

                <Grid item xs={12} sm={4}>
                  <TextField
                    autoComplete="given-name"
                    name="cin"
                    required
                    fullWidth
                    id="cin"
                    label="C.I.N"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    id="datecin"
                    label=" délivré le"
                    name="datecin"
                    type="date" // Use type="date" for a simplified date picker
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    name="placecin"
                    label="par"
                    autoComplete="family-name"
                    id="placecin"
                  />
                </Grid>
                </Grid>

<br></br>
                <Grid container spacing={2}>

<Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    id="visaNum"
                    label="Numéro civil au Sultanat"
                    name="visaNum"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    name="dateEndVisa"
                    label="Date d'expiration"
                    type="date"
                    id="dateEndVisa"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    name="placevisa"
                    label="par"
                    autoComplete="family-name"
                    id="placevisa"
                  />
                </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <Typography
                      component="h6"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      Je souhaite partager de photos et de vidéos de l'activité scoute de
                      mon enfant sur les réseaux sociaux officiels du groupe.
                    </Typography>
                    <FormControlLabel
                      control={
                        <Radio
                          name="Condition"
                          value="no"
                          color="primary"
                        />
                      }
                      label="Non"
                      checked={Condition === "no"}
                      onChange={handleChange}
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          name="Condition"
                          value="yes"
                          color="primary"
                        />
                      }
                      label="Oui"
                      checked={Condition === "yes"}
                      onChange={handleChange}
                    />
                  </Grid>
                 </Grid>
                
        
              <div style={{ display: "flex" }}>
                <Grid item xs={12}>
                  <p>
                    Je certifie que les informations ci-dessus sont exactes{" "}
                  </p>
                </Grid>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ backgroundColor: "darkgreen", color: "white" }}
                >
                  Submit
                </Button>
              </div>
            </Card>
          </Box>
        </Box>
      </Container>
      </div>
    </ThemeProvider>
  );
}
