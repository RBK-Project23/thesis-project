import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Card, Typography } from '@mui/material';
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { createTheme } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';



export default function GenerateIstimara() {
  const [selectedGender, setSelectedGender] = useState("");

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
            text: "Formulaire d'inscription",
            alignment: "center",
            fontSize: 16,
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
                text: "Formulaire d'inscription",
                alignment: "center",
                fontSize: 16,
                bold: true,
                margin: [0, 10, 10, 10],
                width: "*", 
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

            {
              type: "rect",
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
              ${formData.regiment ? `Régiment : ${formData.regiment}` : ''} 
              ${formData.unit1 ? `Unité : ${formData.unit1}` : ''} 
              ${formData.section1 ? `Section : ${formData.section1}` : ''}
              Nom et prénom : ${formData.fullname || ''}
              Date et lieu de naissance : ${formData.date ? `${formData.date} - ` : ''}${formData.placebirth || ''}
              Numéro de passeport : ${formData.passeportNum || ''} Date d'expiration : ${formData.dateEndPass || ''}
              Numéro de visa à Oman : ${formData.visaNum || ''} Date d'expiration : ${formData.dateEndVisa || ''}
              Genre : ${formData.gender === 'male' ? 'Masculin' : formData.gender === 'female' ? 'Féminin' : ''} . 
              Groupe sanguin : ${formData.bloodType || ''}
              Souffrez-vous de maladies chroniques : ${formData.yes1 === 'yes' ? 'Oui' : 'Non'}
              ${formData.yes1 === 'yes' && formData.chronicDiseases ? `Les maladies chroniques : ${formData.chronicDiseases}` : ''}
              ${formData.chronicDiseases ? `Nom du responsable légal : ${formData.chronicDiseases}` : ''}
              Profession : ${formData.job || ''}
              Numéro de Téléphone à Oman: ${formData.phone || ''}   Numéro de téléphone de secondaire : ${formData.phone2 || ''}
              Adresse à Oman : ${formData.Adress_OM || ''}
              Adresse en Tunisie : ${formData.addressTN || ''}
              Membre de l'association SCOUTS tunisienne à Oman : ${
                formData.yes === 'yes' ? 'Oui' : 'Non'
              }
              (En cas de participation du tuteur au Régiment Scout Tunisien au Sultanat d’Oman)
              ${formData.cin ? `C.I.N : ${formData.cin}` : ''} 
              ${formData.unit ? `Unité : ${formData.unit}` : ''} 
              ${formData.section ? `Section : ${formData.section}` : ''}
              Je certifie la véracité des informations mentionnées ci-dessus 
              ${'                                      '} Signature
              `,
              style: 'subheader',
              absolutePosition: { x: 60, y: 40 },
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

    // Generate and download PDF
    pdfMake.createPdf(docDefinition).download("Istimara.pdf");
  };

  const defaultTheme = createTheme();
  const [healthCondition, setHealthCondition] = useState('');
  const [participation, setParticipation] = useState('');
  const [Blood, setBlood] = useState('');

  const handleChangeParticipation = (event) => {
    setParticipation(event.target.value);
  };
  const handleChange = (event) => {
    setHealthCondition(event.target.value);
  };
  const handleChangeBlood = (event) => {
    setBlood(event.target.value);
  };
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/20333.jpg)`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '10px',
          marginRight: '10px',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          marginTop: '20px', // Add top margin if needed
        }}
      >
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: '20px',
              marginRight: '20px',
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
                  height: '1200 vh', // Adjust the height as needed
                  width: '100%',
                  backgroundColor: 'rgba(240, 240, 240, 0.7)',
                  marginLeft: '10px',
                  marginRight: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)',
                }}
              >
<Grid container spacing={2} sx={{ width: '90%', marginBottom: 2, marginTop: 4, marginLeft: 4, marginRight: 5 }}>
  <TextField
    required
    fullWidth
    id="fullname"
    label="Nom et prénom"
    name="fullname"
    autoComplete="family-name"
    sx={{
   
      marginLeft: 2,   
    }}
  />
</Grid>


<Grid container spacing={2} sx={{ width: '90%', marginBottom: 4, marginTop: 2, marginLeft: 4, marginRight: 5 }}>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="given-name"
                  name="section1"
                  required
                  fullWidth
                  id="section1"
                  label="Section"
                  autoFocus
                  sx={{
                    marginBottom: 2,
                   
                  }}
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
             

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="placebirth"
                  label=" lieu de naissance"
                  name="placebirth"
                  autoComplete="family-name"
                  sx={{
                    marginBottom: 2, 
                   
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="date"
                  label="Date de naissance"
                  type="date" 
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
                  id="passeportNum"
                  label=" Numéro de passeport"
                  name="passeportNum"
                  autoComplete="family-name"
                  sx={{
                    marginBottom: 2, 
                   
                  }}
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
                  name="dateEndVisa"
                  label="Date d'expiration"
                  type="date"
                  id="dateEndVisa"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
             
              <Grid item xs={12}>
              <FormControl fullWidth>
        <InputLabel id="bloodType-label">Groupe sanguin</InputLabel>
        <Select
          labelId="bloodType-label"
          id="bloodType"
          label="Groupe sanguin"
          name="bloodType"
          value={Blood}
          onChange={handleChangeBlood}
          sx={{
           marginTop: 2,
          }}
        >
          {bloodTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}

        </Select>
      </FormControl>
</Grid>
              {/* Gender checkboxes */}
              <Grid item xs={12} >
  <Typography
    component="h6"
    variant="subtitle1"
    color="textSecondary"
  //  style={{ marginLeft: "150px" }}
  >
    Genre
  </Typography>
  <RadioGroup
    name="gender"
    value={selectedGender}
    onChange={(e) => setSelectedGender(e.target.value)}
  //  style={{ marginLeft: "150px" }}
  >
    <FormControlLabel
      value="female"
      control={<Radio color="primary" />}
      label="Féminin"
    />
    <FormControlLabel
      value="male"
      control={<Radio color="primary" />}
      label="Masculin"
    />
  </RadioGroup>
</Grid>
<Grid item xs={12}>
        <Typography
          component="h6"
          variant="subtitle1"
          color="textSecondary"
        //  style={{ marginLeft: '230px' }}
        >
          Vous souffrez de maladies chroniques ?
        </Typography>
        <FormControlLabel
          control={<Radio name="healthCondition" value="no" color="primary" />}
          label="Non"
          checked={healthCondition === 'no'}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Radio name="healthCondition" value="yes" color="primary" />}
          label="Oui"
          checked={healthCondition === 'yes'}
          onChange={handleChange}
        />
      </Grid>
      {healthCondition === 'yes' && (
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="chronicDiseases"
            label="Veuillez citer les maladies chroniques"
            name="chronicDiseases"
            autoComplete="family-name"
            sx={{
              marginBottom: 2, 
             
            }}
          />
        </Grid>
          )}
          <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fadherName"
                  required
                  fullWidth
                  id="fadherName"
                  label="Nom du parent"
                  autoFocus
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
                  required
                  fullWidth
                  id="phone"
                  label="Numéro de Téléphone à Oman"
                  name="phone"
                  autoComplete="family-name"
                  sx={{
                    marginBottom: 2, 
                   
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="phone2"
                  required
                  fullWidth
                  id="phone2"
                  label="Numéro de téléphone secondaire"
                  autoFocus
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
                  sx={{
                    marginBottom: 2, 
                   
                  }}
                />
              </Grid>{" "}
              <Grid item xs={12}>
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
         // style={{ marginLeft: '130px' }}
        >
          Participé au Régiment Scout Tunisien au Sultanat d'Oman{' '}
        </Typography>
        <FormControlLabel
          control={<Radio name="participation" value="no" color="primary" />}
          label="Non"
          checked={participation === 'no'}
          onChange={handleChangeParticipation}
        />
        <FormControlLabel
          control={<Radio name="participation" value="yes" color="primary" />}
          label="Oui"
          checked={participation === 'yes'}
          onChange={handleChangeParticipation}
        />
      </Grid>
      {participation === 'yes' && (
        <React.Fragment>
          <Grid item xs={12}>
            <p>
              (En cas de participation du tuteur au Régiment Scout Tunisien au
              Sultanat d'Oman)
            </p>{' '}
          </Grid>
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
        </React.Fragment>
      )}
       </Grid>

         

            <div style={{ display: "flex" }} >
             
              <Grid item xs={12} sx={{ width: '90%',  marginLeft: 6, marginRight: 5 }} >
                <p 
               >
                  Je certifie que les informations ci-dessus sont exactes{" "}
                </p>
              </Grid>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                style={{ backgroundColor: 'darkgreen', color: 'white' }}
              >
                Imprimer
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
