
import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const CommanderCard = ({ commander, onEditClick }) => {
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
          Commander informations
        </Typography>
        </Grid>
        <Grid item container justifyContent="" alignItems="flex-start"  spacing={2}>
        <Grid item>
      <img src={commander.profileImage} alt="Profile" style={{ width: '170px', height: '170px', borderRadius: '50px', marginLeft:'10px' }} />
      </Grid>
      <Grid item>
      <Typography><strong>First Name:</strong> {commander.FirstName}</Typography>
      <Typography><strong>Last Name:</strong> {commander.LastName}</Typography>
      <Typography><strong>Date Of Birth:</strong> {commander.dateOfBirth}</Typography>
      <Typography><strong>Place of Birth:</strong> {commander.placeOfBirth}</Typography>
      <Typography><strong>CIN:</strong> {commander.CIN}</Typography>
      <Typography><strong>Gender:</strong> {commander.gender}</Typography>
      <Typography><strong>Is Parent:</strong> {commander.isParent}</Typography>
      <Typography><strong>Fadher Name:</strong> {commander.fatherName}</Typography>
      <Typography><strong>grand Father Name:</strong> {commander.grandFatherName}</Typography>
      <Typography><strong> maritalStatus:</strong> {commander.maritalStatus}</Typography>
      <Typography><strong>phoneTN:</strong> {commander.phoneTN}</Typography>
      <Typography><strong>jobOM:</strong> {commander.jobOM}</Typography>
      <Typography><strong>jobTN:</strong> {commander.jobTN}</Typography>
      <Typography><strong>educationalLevel:</strong> {commander.educationalLevel}</Typography>
      <Typography><strong>certificate:</strong> {commander.certificate}</Typography>
      <Typography><strong>scoutTrainingLevel:</strong> {commander.scoutTrainingLevel}</Typography>
      <Typography><strong>dateLastTrainingLevelStudy:</strong> {commander.dateLastTrainingLevelStudy}</Typography>
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

export default CommanderCard;