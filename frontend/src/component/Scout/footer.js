import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="primary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://techbazaar.com/">
        TechBazaar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'TechBazaar',
    description: [
      { label: 'About Us', url: '/AboutUs' },
      { label: 'Contact Us', url: '/ContactUs' },
      { label: 'Privacy Policy', url: '/PrivacyPolicy' },
      { label: 'Terms of Use', url: '/TermOfUse' },
    ],
  },
  {
    title: 'Categories',
    description: [
        { label: 'Computers', url: '/Computers' },
        { label: 'Phones', url: '/Phones' },
        { label: 'Electronics', url: '/Electronics' },
        { label: 'Laptops', url: '/Laptops' },
   //   'Computers', 'Phones', 'Electronics', 'Laptops', 'Tablets', 'Smartphones', 'Wearables'
    ],
  },
  {
    title: 'YOUR ACCOUNT',
    description: [
        { label: 'Personal informations', url: '/profile' },
        { label: 'Order', url: '/Order' },
       // { label: 'Toshiba', url: '/Toshiba' },
       // { label: 'Samsung', url: '/Samsung' },
    //  'Apple', 'HP', 'Toshiba', 'Samsung', 'Nokia', 'Logicom', 'and more...'
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
