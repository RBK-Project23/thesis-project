import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const ScoutCard = ({ scout, onEditClick }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundColor: 'rgba(240, 240, 240, 0.7)',
        backdropFilter: 'blur(10px)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '60%',
        margin: 'auto',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Scout Informations
        </Typography>
      </Grid>
      <Grid item container justifyContent="" alignItems="flex-start"  spacing={2}>
        <Grid item>
          <img src={scout.profileImage} alt="Profile" style={{ width: '170px', height: '170px', borderRadius: '50px', marginLeft:'10px' }} />
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <strong>First Name:</strong> {scout.FirstName}
          </Typography>
          <Typography variant="body1">
          <strong>Last Name:</strong> {scout.LastName}
          </Typography>
          <Typography variant="body1">
          <strong>Gender:</strong> {scout.gender}
          </Typography>
          <Typography>
          <strong>Age:</strong> {scout.age}
          </Typography>
          <Typography>
          <strong>Date of Birth:</strong> {scout.dateOfBirth}
          </Typography>
          <Typography>
          <strong>Address in Oman:</strong> {scout.Adress_OM}
          </Typography>
          <Typography>
          <strong>Phone in Oman:</strong> {scout.PhoneOM}
          </Typography>
          <Typography>
          <strong>Type of Blood:</strong> {scout.Blood_type}        
          </Typography>
          <Typography>
          <strong>Passport Number:</strong> {scout.passportNumber}
          </Typography>
          <Typography>
          <strong>Expiry date Passport:</strong> {scout.expiryDatePassport}
          </Typography>
          <Typography>
          <strong>Gender:</strong> {scout.gender}
          </Typography>
          <Typography>
          <strong>Visa Number:</strong> {scout.visaNumber}
          </Typography>
          <Typography>
          <strong>Expiry date Visa:</strong> {scout.expiryDateVisa}
          </Typography>
          <Typography>
          <strong>ChronicDiseases:</strong> {scout.chronicDiseases}
          </Typography>
         
        </Grid>
      </Grid>
      <Grid item xs={12} textAlign="center" marginTop="20px">
        <Button onClick={onEditClick} variant="contained" color="warning" sx={{ fontSize: '16px', padding: '6px', width: '100px' }}>
          Edit
        </Button>
      </Grid>
    </Grid>
  );
};

export default ScoutCard;
