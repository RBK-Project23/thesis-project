
import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const ParentCard = ({ parent, onEditClick }) => {
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
          Parent Informations
        </Typography>
        </Grid>
        <Grid item container justifyContent="" alignItems="flex-start"  spacing={2}>
        <Grid item>
           <img src={parent.profileImage} alt="Profile" style={{ width: '170px', height: '170px', borderRadius: '50px', marginLeft:'10px' }} />
           </Grid>
           <Grid item>
          <Typography>
     <strong>First Name:</strong> {parent.FirstName}
     </Typography>
          <Typography>
      <strong>Last Name:</strong> {parent.LastName}
      </Typography>
          <Typography>
      <strong>Age:</strong> {parent.age}
      </Typography>
          <Typography>
      <strong>Date of Birth:</strong> {parent.dateOfBirth}
      </Typography>
          <Typography>
      <strong>Adress in Oman:</strong> {parent.Adress_OM}
      </Typography>
          <Typography>
      <strong>Phone in Oman:</strong> {parent.PhoneOM}
      </Typography>
          <Typography>
      <strong>Adress in Tunisia:</strong> {parent.adressTN}
      </Typography>
          <Typography>
      <strong>Phone in Tunisia:</strong> {parent.phoneTN}
      </Typography>
          <Typography>
      <strong>participated Tunisian Scout Regiment:</strong> {parent.participatedTunisianScoutRegiment}
      </Typography>
          <Typography>
      <strong>CIN :</strong> {parent.CIN}
      </Typography>
          <Typography>
      <strong>Gender:</strong> {parent.gender}
      </Typography>
          <Typography>
       <strong>Blood type:</strong> {parent.Blood_type}
       </Typography>
          <Typography>
       <strong>Passport Number:</strong> {parent.passportNumber}
       </Typography>
          <Typography>
       <strong>Expiry date Passport:</strong> {parent.expiryDatePassport}
       </Typography>
          <Typography>
      <strong>Visa Number:</strong> {parent.visaNumber}
      </Typography>
          <Typography>
      <strong>Expiry date Visa:</strong> {parent.expiryDateVisa}
      </Typography>
          <Typography>
      <strong>ChronicDiseases:</strong> {parent.chronicDiseases}
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

export default ParentCard;