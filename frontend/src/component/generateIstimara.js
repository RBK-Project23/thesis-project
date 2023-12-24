import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { createTheme } from '@mui/material/styles';

const fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  },
  Arial: {
    normal: 'Arial.ttf',
    bold: 'Arial-Bold.ttf',
    italics: 'Arial-Italic.ttf',
    bolditalics: 'Arial-BoldItalic.ttf'
  }
};


pdfMake.fonts = fonts;

export default function GenerateIstimara() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // Extract form data
    const formData = {};
    data.forEach((value, key) => {
      formData[key] = value;
    });
    const docDefinition = {
      header: async function (currentPage, pageCount, pageSize) {
        const logo1Path = 'frontend/src/images/logo1.jpeg';
        const logo2Path = 'frontend/src/images/logo2.jpeg';
// Function to convert local file to data URL
function fileToDataUrl(filePath) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;

    // Use relative path directly
    const relativePath = filePath;

    // Log the relative path for debugging
    const publicPath = 'public' + filePath;
    console.log(' Path:', publicPath);

    // Read the file as a data URL
    fetch(publicPath)
    .then((response) => response.blob())
    .then((blob) => reader.readAsDataURL(blob))
    .catch(reject);
  
  });
}
    
        const logo1ImageDataUrl = await fileToDataUrl(logo1Path);
        const logo2ImageDataUrl = await fileToDataUrl(logo2Path);
    console.log('Logo 1 Data URL:', logo1ImageDataUrl);
    console.log('Logo 2 Data URL:', logo2ImageDataUrl);

        return [
          {
            columns: [
              // Left column with the first image
              {
                image: logo1ImageDataUrl,
                width: 50,
                margin: [10, 10],
              },
              // Center column with the document title
              {
                text: "Formulaire d'inscription",
                alignment: 'center',
                fontSize: 16,
                bold: true,
                margin: [0, 15],
              },
              // Right column with the second image
              {
                image: logo2ImageDataUrl,
                width: 50,
                alignment: 'right',
                margin: [10, 10],
              },
            ],
          },
        ];
      },
      content: [
        {
          canvas: [
            {
              type: 'rect',
              x: 10,
              y: 10,
              w: 520,
              h: 700,
              r: 5, // corner radius
              lineWidth: 2,
            },
    
            {
              type: 'rect',
              x: 50, // adjust the x-coordinate as needed
              y: 50, // adjust the y-coordinate as needed
              w: 100, // adjust the width as needed
              h: 100, // adjust the height as needed
              r: 5, // corner radius
              lineWidth: 1,
            },
          ],
        },
        {
          stack: [
            {
              text: `
    \n\n\n\n
    \n\n\n\nLes Scouts Tunisiens                            L'Association SCOUTS tunisienne à Oman
    \n
    \n                                 Formulaire d'inscription\n 
    Régiment : ${formData.regiment} Unité : ${formData.unit1} Section : ${formData.section1}
    Nom et prénom : ${formData.fullname}
    Date et lieu de naissance : ${formData.date} - ${formData.placebirth}
    Numéro de passeport : ${formData.passeportNum} Date d'expiration : ${formData.dateEndPass}
    Numéro de visa à Oman : ${formData.visaNum} Date d'expiration : ${formData.dateEndVisa}
    Genre : ${formData.gender === 'male' ? 'Masculin' : 'Féminin'} . Groupe sanguin : ${formData.bloodType}
    Souffrez-vous de maladies chroniques : ${formData.yes1 === 'yes' ? 'Oui' : 'Non'}
    Nom du responsable légal : ${formData.fadherName} Profession : ${formData.job}
    Numéro de téléphone : ${formData.phone}   Numéro de téléphone de secondaire : ${formData.phone2}
    Adresse à Oman : ${formData.Adress_OM}
    Adresse en Tunisie : ${formData.addressTN}
    Membre de l'association SCOUTS tunisienne à Oman : ${formData.yes === 'yes' ? 'Oui' : 'Non'}
    (En cas de participation du tuteur au Régiment Scout Tunisien au Sultanat d’Oman)
    C.I.N : ${formData.cin} Unité : ${formData.unit} Section : ${formData.section}
    Je certifie la véracité des informations mentionnées ci-dessus 
    Signature
    `,
              style: 'subheader',
              absolutePosition: { x: 60, y: 40 }, // Adjust the coordinates as needed
            },
          ],
        },
     
     
        // End of additional content
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
    // Function to convert local file to data URL
    function fileToDataUrl(filePath) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
    
        // Assuming your project structure allows direct access to the 'public' folder
        const publicPath = 'public/' + filePath;
    
        // Read the file as a data URL
        fetch(publicPath)
          .then((response) => response.blob())
          .then((blob) => reader.readAsDataURL(blob))
          .catch(reject);
      });
    }
    // Generate and download PDF
    pdfMake.createPdf(docDefinition).download('Istimara.pdf');
    };
    
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="given-name"
                  name="section1"
                  required
                  fullWidth
                  id="section1"
                  label="Section"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="given-name"
                  name="regiment"
                  required
                  fullWidth
                  id="regiment"
                  label="Régiment"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="unit1"
                  label="Unité"
                  name="unit1"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullname"
                  label="Nom et prénom"
                  name="fullname"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="date"
                  label="Date de naissance"
                  type="date"  // Use type="date" for a simplified date picker
                  id="birthday"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="placebirth"
                  label=" lieu de naissance"
                  name="placebirth"
                  autoComplete="family-name"
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="dateEndPass"
                  label="Date d'expiration"
                  type="date"
                  id="dateEndPass"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="passeportNum"
                  label=" Numéro de passeport"
                  name="passeportNum"
                  autoComplete="family-name"
                />
              </Grid>



              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="visaNum"
                  label="Numéro civil au Sultanat"
                  name="visaNum"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="bloodType"
                  label="Groupe sanguin"
                  name="bloodType"
                  autoComplete="family-name"
                />
              </Grid>
              {/* Gender checkboxes */}
              <Grid item xs={12} sm={6}>
                <Typography
                  component="h6"
                  variant="subtitle1"
                  color="textSecondary"
                  style={{ marginLeft: "150px" }}
                >
                  Sexe
                </Typography>

                <FormControlLabel
                  control={<Checkbox name="gender" value="female" color="primary" />}
                  label="Féminin"
                />
                <FormControlLabel
                  control={<Checkbox name="gender" value="male" color="primary" />}
                  label="Mâle"
                />
              </Grid>



              <Grid item xs={12}>
                <Typography
                  component="h6"
                  variant="subtitle1"
                  color="textSecondary"
                  style={{ marginLeft: "230px" }}
                >
                  Vous souffrez de maladies chroniques ?
                </Typography>
                <FormControlLabel
                  control={<Checkbox name="no1" value="no" color="primary" />}
                  label="Non"
                />
                <FormControlLabel
                  control={<Checkbox name="yes1" value="yes" color="primary" />}
                  label="Oui"
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="job"
                  label="Profession"
                  name="job"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fadherName"
                  required
                  fullWidth
                  id="fadherName"
                  label="Nom du tuteur"
                  autoFocus
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="phone2"
                  required
                  fullWidth
                  id="phone2"
                  label="Numéro de téléphone de secondaire"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Numéro de téléphone"
                  name="phone"
                  autoComplete="family-name"
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Adress_OM"
                  label="Adresse au Sultanat"
                  name="Adress_OM"
                  autoComplete="family-name"
                />
              </Grid> <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="adressTN"
                  label="Adresse en Tunisie"
                  name="adressTN"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component="h6"
                  variant="subtitle1"
                  color="textSecondary"
                  style={{ marginLeft: "130px" }}
                >
                  Participé au Régiment Scout Tunisien au Sultanat d'Oman                    </Typography>
                <FormControlLabel
                  control={<Checkbox name="no" value="no" color="primary" />}
                  label="Non"
                />
                <FormControlLabel
                  control={<Checkbox name="yes" value="yes" color="primary" />}
                  label="Oui"
                />
              </Grid>
              <Grid item xs={12}>
                <p>(En cas de participation du tuteur au Régiment Scout Tunisien au Sultanat d'Oman)</p>             </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="section"
                  label="Section"
                  name="section"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="given-name"
                  name="unit"
                  required
                  fullWidth
                  id="unit"
                  label="Unité"
                  autoFocus
                />
              </Grid>


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





            </Grid>


            {/*
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
        */}



            <div style={{ display: 'flex' }}>

              <Grid item xs={12} sm={6}>
                <p style={{ marginLeft: '20px' }}>
                Signature
                </p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <p style={{ marginLeft: '140px' }}>
                  Je certifie que les informations ci-dessus sont exactes    </p>
              </Grid>
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Imprimer
            </Button>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
