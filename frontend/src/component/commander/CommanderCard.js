
import React from 'react';
import { Button } from '@mui/material';

const CommanderCard = ({ commander, onEditClick }) => {
  return (
    <div style={{background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '130%', margin: 'auto', marginTop: '20px' }} >
         <img
        src={`${process.env.PUBLIC_URL}/Logo_scouts_oman.png`}
        alt="Logo"
        style={{ width: '130px', marginRight: '50px', marginLeft:'530px'  }}
      />
      <h2>Commander Informations</h2>
     <p><strong>First Name:</strong> {commander.FirstName}</p>
      <p><strong>Last Name:</strong> {commander.LastName}</p>
      <p><strong>Date Of Birth:</strong> {commander.dateOfBirth}</p>
      <p><strong>Place of Birth:</strong> {commander.placeOfBirth}</p>
      <p><strong>CIN:</strong> {commander.CIN}</p>
      <p><strong>Gender:</strong> {commander.gender}</p>
      <p><strong>Is Parent:</strong> {commander.isParent}</p>
      <p><strong>Fadher Name:</strong> {commander.fatherName}</p>
      <p><strong>grand Father Name:</strong> {commander.grandFatherName}</p>
      <p><strong> maritalStatus:</strong> {commander.maritalStatus}</p>
      <p><strong>phoneTN:</strong> {commander.phoneTN}</p>
      <p><strong>jobOM:</strong> {commander.jobOM}</p>
      <p><strong>jobTN:</strong> {commander.jobTN}</p>
      <p><strong>educationalLevel:</strong> {commander.educationalLevel}</p>
      <p><strong>certificate:</strong> {commander.certificate}</p>
      <p><strong>scoutTrainingLevel:</strong> {commander.scoutTrainingLevel}</p>
      <p><strong>dateLastTrainingLevelStudy:</strong> {commander.dateLastTrainingLevelStudy}</p>
     <div style={{ display: 'flex', justifyContent: 'center', padding:'20px' }}>
     <Button onClick={onEditClick} variant="contained" color="warning" sx={{ fontSize: '16px', padding: '6px', width: '100px' }}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default CommanderCard;