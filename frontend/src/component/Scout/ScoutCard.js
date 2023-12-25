
import React from 'react';
import { Button } from '@mui/material';


const ScoutCard = ({ scout, onEditClick }) => {
  return (
<div style={{background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '130%', margin: 'auto', marginTop: '20px' }} >
         <img
        src={`${process.env.PUBLIC_URL}/Logo_scouts_oman.png`}
        alt="Logo"
        style={{ width: '130px', marginRight: '50px', marginLeft:'550px'  }}
      />        <h2>Scout Informations</h2>
      <p><strong>First Name:</strong> {scout.FirstName}</p>
      <p><strong>Last Name:</strong> {scout.LastName}</p>
      <p><strong>Gender:</strong> {scout.gender}</p>
      <p><strong>Age:</strong> {scout.age}</p>
      <p><strong>Date of Birth:</strong> {scout.dateOfBirth}</p>
      <p><strong>Address in Oman:</strong> {scout.Adress_OM}</p>
      <p><strong>Phone in Oman:</strong> {scout.PhoneOM}</p>
      <p><strong>Type of Blood:</strong> {scout.Blood_type}</p>
      <p><strong>Passport Number:</strong> {scout.passportNumber}</p>
      <p><strong>Expiry date Passport:</strong> {scout.expiryDatePassport}</p>
      <p><strong>Gender:</strong> {scout.gender}</p>
      <p><strong>Visa Number:</strong> {scout.visaNumber}</p>
      <p><strong>Expiry date Visa:</strong> {scout.expiryDateVisa}</p>
      <p><strong>ChronicDiseases:</strong> {scout.chronicDiseases}</p>


      <div style={{ display: 'flex', justifyContent: 'center', padding:'20px' }}>
      <Button onClick={onEditClick} variant="contained" color="warning" sx={{ fontSize: '16px', padding: '6px', width: '100px' }}>
          Edit
        </Button>     
         </div>
    </div>
  );
};

export default ScoutCard;