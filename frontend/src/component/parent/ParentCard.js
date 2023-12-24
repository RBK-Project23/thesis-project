
import React from 'react';
import { Button } from '@mui/material';

const ParentCard = ({ parent, onEditClick }) => {
  return (
<div style={{background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '130%', margin: 'auto', marginTop: '20px' }} >
         <img
        src={`${process.env.PUBLIC_URL}/Logo_scouts_oman.png`}
        alt="Logo"
        style={{ width: '130px', marginRight: '50px', marginLeft:'550px'  }}
      />      <h2>Scout Informations</h2>
      <p><strong>First Name:</strong> {parent.FirstName}</p>
      <p><strong>Last Name:</strong> {parent.LastName}</p>
      <p><strong>Age:</strong> {parent.age}</p>
      <p><strong>Date of Birth:</strong> {parent.dateOfBirth}</p>
      <p><strong>Adress in Oman:</strong> {parent.Adress_OM}</p>
      <p><strong>Phone in Oman:</strong> {parent.PhoneOM}</p>
      <p><strong>Adress in Tunisia:</strong> {parent.adressTN}</p>
      <p><strong>Phone in Tunisia:</strong> {parent.phoneTN}</p>
      <p><strong>participated Tunisian Scout Regiment:</strong> {parent.participatedTunisianScoutRegiment}</p>
      <p><strong>CIN :</strong> {parent.CIN}</p>
      <p><strong>Gender:</strong> {parent.gender}</p>
       <p><strong>Blood type:</strong> {parent.Blood_type}</p>
       <p><strong>Passport Number:</strong> {parent.passportNumber}</p>
       <p><strong>Expiry date Passport:</strong> {parent.expiryDatePassport}</p>
      <p><strong>Visa Number:</strong> {parent.visaNumber}</p>
      <p><strong>Expiry date Visa:</strong> {parent.expiryDateVisa}</p>
      <p><strong>ChronicDiseases:</strong> {parent.chronicDiseases}</p>
      


      <div style={{ display: 'flex', justifyContent: 'center', padding:'20px' }}>
      <Button onClick={onEditClick} variant="contained" color="warning" sx={{ fontSize: '16px', padding: '6px', width: '100px' }}>
          Edit
        </Button>    
          </div>
    </div>
  );
};

export default ParentCard;