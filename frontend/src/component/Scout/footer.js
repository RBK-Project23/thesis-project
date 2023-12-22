import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="primary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://scoutTun.com/">
       Scout Tunisia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Scout Tunisia',
    description: [
      { label: 'About Us', url: '/AboutUs' },
      { label: 'Contact Us', url: '/ContactUs' },
      { label: 'Privacy Policy', url: '/PrivacyPolicy' }
     
    ],
  },
  {
    title: 'Event',
    description: [
        { label: 'Event 1', url: 'Event 1' },
        { label: 'Event 2', url: 'event2' },
        { label: 'Event 3', url: 'Event 3' }
      
   
    ],
  },
  {
    title: 'Your Account',
    description: [
        { label: 'Personal informations', url: '/profile' },
        { label: 'Subscribe', url: '/Subscribe' },
     
    ],
  },
  {
    title: 'Follow Us',
    
    description: [
        { label: 'Facebook', url: '/Facebook' },
        { label: 'Twitter', url: '/Twitter' },
        { label: 'Instagram', url: '/Instagram' },
        { label: 'LinkedIn', url: '/LinkedIn' },
      //  'Facebook', 'Twitter', 'Instagram', 'LinkedIn'
    ],
  },
];

const Footer = () => {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} variant="subtitle1" color="primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Footer;
