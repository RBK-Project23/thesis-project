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
import  { useState } from 'react';
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

     // Set vfs to use custom fonts
     pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // Generate PDF content
    const content = `
--------------
ع 2 دد
صورة
--------------
الكشافة التونسية // الفوج الكشفي التونسي بسلطنة عمان
الفوج: ${formData.unit} الوحدة: ${formData.section} القسم: ${formData.Section}
الاسم واللقب: ${formData.fullname}
تاريخ ومكان الولادة: ${formData.date} - ${formData.placebirth}
رقم جواز السفر: ${formData.passeportNum} تاريخ الانتهاء: ${formData.dateEndPass}
رقم التأشيرة بالسلطنة: ${formData.visaNum} تاريخ الانتهاء: ${formData.dateEndVisa}
الجنس: ${formData.gender === 'male' ? 'ذكر' : 'أنثى'} . فئة الدم: ${formData.bloodType}
هل تشتكي من أمراض مزمنة: ${formData.gender === 'male' ? 'نعم' : 'لا'}
اسم ولي الأمر: ${formData.fadherName} المهنة: ${formData.job}
رقم الهاتف: ${formData.phone} رقم هاتف احتياطي: ${formData.phone2}
العنوان بالسلطنة: ${formData.addressOman}
العنوان بتونس: ${formData.addressTunisia}
مشترك ضمن الفوج الكشفي التونسي بسلطنة عمان: ${
      formData.gender === 'male' ? 'نعم' : 'لا'
    }
)في صورة اشتراك الولي ضمن الفوج الكشفي التونسي بسلطنة عمان(
ب.ت.و: ${formData.cin} الوحدة: ${formData.unit} القسم: ${formData.section}
اشهد بصحة المعلومات المذكورة أعلاه التوقيع 
...............
    `;

      // Document definition with custom font settings for Arabic
      const docDefinition = {
        content: [
          { 
            text: content, 
            alignment: 'right',
            font: 'Arial' // Use the font that supports Arabic
          },
        ],
        defaultStyle: {
          font: 'Arial' // Ensure the default font is set to Arial or another font that supports Arabic
        }
      };
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
      name="section"
      required
      fullWidth
      id="section"
      label="القسم"
      autoFocus
    />
  </Grid>
  <Grid item xs={12} sm={4}>
    <TextField
      autoComplete="given-name"
      name="unit"
      required
      fullWidth
      id="unit"
      label="الفوج"
      autoFocus
    />
  </Grid>
  <Grid item xs={12} sm={4}>
    <TextField
      required
      fullWidth
      id="section"
      label="الوحدة"
      name="Section"
      autoComplete="family-name"
    />
  </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullname"
                  label="الاسم و اللقب"
                  name="fullname"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="date"
                  label="تاريخ الولادة"
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
                  label=" مكان الولادة "
                  name="placebirth"
                  autoComplete="family-name"
                />
              </Grid>
           

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="dateEndPass"
                  label="تاريخ الانتهاء:"
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
                  label=" رقم جواز السفر"
                  name="passeportNum"
                  autoComplete="family-name"
                />
              </Grid>
             


              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="dateEndVisa"
                  label="تاريخ الانتهاء:"
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
                  label="الرقم المدني بالسلطنة"
                  name="visaNum"
                  autoComplete="family-name"
                />
              </Grid>
            
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="bloodType"
                  label="فئة الدم"
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
                      الجنس
                    </Typography>

                <FormControlLabel
                  control={<Checkbox name="gender" value="female" color="primary" />}
                  label="أنثى"
                />
                <FormControlLabel
                  control={<Checkbox name="gender" value="male" color="primary" />}
                  label="ذكر"
                />
              </Grid>



              <Grid item xs={12}>
                 <Typography
                      component="h6"
                      variant="subtitle1"
                      color="textSecondary"
                      style={{ marginLeft: "230px" }}
                    >
                     هل تشتكي من أمراض مزمنة
                    </Typography>
                <FormControlLabel
                  control={<Checkbox name="gender" value="female" color="primary" />}
                  label="لا"
                />
                <FormControlLabel
                  control={<Checkbox name="gender" value="male" color="primary" />}
                  label="نعم"
                />
              </Grid>

              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="job"
                  label="المهنة"
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
                  label="اسم ولي الأمر"
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
                  label="رقم هاتف احتياطي"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="رقم الهاتف"
                  name="phone"
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
                    مشترك ضمن الفوج الكشفي التونسي بسلطنة عمان 
                    </Typography>
                <FormControlLabel
                  control={<Checkbox name="gender" value="female" color="primary" />}
                  label="لا"
                />
                <FormControlLabel
                  control={<Checkbox name="gender" value="male" color="primary" />}
                  label="نعم"
                />
              </Grid>
              <Grid item xs={12}>
                <p>(في صورة اشتراك الولي ضمن الفوج الكشفي التونسي بسلطنة عمان)</p>
             </Grid>

             <Grid item xs={12} sm={4}>
    <TextField
      required
      fullWidth
      id="section"
      label="القسم"
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
      label="الوحدة"
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
      label="ب.ت.و"
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
      التوقيع
    </p>
  </Grid>
  <Grid item xs={12} sm={6}>
    <p style={{ marginLeft: '140px' }}>
      اشهد بصحة المعلومات المذكورة أعلاه
    </p>
  </Grid>
</div>

<Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              طباعةالاستمارة
            </Button>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}
