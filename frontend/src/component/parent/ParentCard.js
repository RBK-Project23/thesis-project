
import React from 'react';

const ParentCard = ({ parent, onEditClick }) => {
  return (
    <div style={{ border: '2px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  backgroundColor: 'rgba(255, 200, 200, 0.5)', padding: '20px', borderRadius: '10px', maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
      <h2>Scout Informations</h2>
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
        <button onClick={onEditClick} style={{ fontSize: '16px', padding: '6px', width:'100px' }}>Edit</button>
      </div>
    </div>
  );
};

export default ParentCard;