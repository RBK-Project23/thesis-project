
import React from 'react';

const ScoutCard = ({ scout, onEditClick }) => {
  return (
    <div style={{ border: '2px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  backgroundColor: 'rgba(255, 200, 200, 0.5)', padding: '20px', borderRadius: '10px', maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
      <h2>Scout Informations</h2>
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
        <button onClick={onEditClick} style={{ fontSize: '16px', padding: '6px', width:'100px' }}>Edit</button>
      </div>
    </div>
  );
};

export default ScoutCard;