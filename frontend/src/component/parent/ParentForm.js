
import React, { useState } from 'react';
import axios from 'axios';
import ParentCard from './ParentCard';

const ParentForm = () => {
  const [parent, setParent] = useState({
    FirstName: '',
    LastName: '',
    age: '',
    dateOfBirth: '',
    Adress_OM: '',
    PhoneOM: '',
    adressTN: '',
    phoneTN: '',
    participatedTunisianScoutRegiment: '',
    CIN: '',
    gender: '',
    Blood_type: '',
    passportNumber: '',
    expiryDatePassport: '',
    visaNumber: '',
    expiryDateVisa: '',
    chronicDiseases: '',
   
  });

  const [showParentCard, setShowParentCard] = useState(false);


  const handleChange = (e) => {
    setParent({
      ...parent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting Parent:', parent);
  
    try {
      const response = await axios.post('http://localhost:7000/parents', parent, {
        
       headers: {
        'Content-Type': 'application/json',
      },
      })
     console.log(response.data.message);
      alert(response.data.message);

      setShowParentCard(true);
    } catch (error) {
      console.error('Error handling form submission:', error);
      alert('Error submitting the form');
    }
  };

  const handleEditClick = () => {
    setShowParentCard(false)
  }
  
  

  return (
    <div>
      {showParentCard ? (
        <ParentCard parent={parent} onEditClick={handleEditClick} />
      ) : (
    <form onSubmit={handleSubmit}>
       <div style={{ position: 'relative', maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
    <div style={{ border: '2px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '10px', maxWidth: '800px', margin: 'auto' }}>
      <label>
        First Name:
        <input style={{ marginTop: '10px' }} type="text" name="FirstName" value={parent.FirstName} onChange={handleChange} />
      </label>
      <label>
        LastName:
        <input  style={{ marginTop: '10px' }} type="text" name="LastName" value={parent.LastName} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Age:
        <input  style={{ marginTop: '10px' }} type="number" name="age" value={parent.age} onChange={handleChange} />
      </label>
      <label>
        date of Birt:
        <input  style={{ marginTop: '10px' }} type="date" name="dateOfBirth" value={parent.dateOfBirth} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Adress in Oman:
        <input  style={{ marginTop: '10px' }} type="text" name="Adress_OM" value={parent.Adress_OM} onChange={handleChange} />
      </label>
      <label>
        Phone in Oman:
        <input style={{ marginTop: '10px' }} type="text" name="PhoneOM" value={parent.PhoneOM} onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <label>
        Adress in Tunisia:
        <input  style={{ marginTop: '10px' }} type="text" name="adressTN" value={parent.adressTN} onChange={handleChange} />
      </label>
      <label>
        Phone in Tunisia:
        <input style={{ marginTop: '10px' }} type="text" name="phoneTN" value={parent.phoneTN} onChange={handleChange} />
      </label>
      <br/>
      <label>
      participated Tunisian Scout Regiment:
        <input  style={{ marginTop: '10px' }} type="text" name="participatedTunisianScoutRegiment" value={parent.participatedTunisianScoutRegiment} onChange={handleChange} />
      </label>
      <br/>
      <label>
        CIN:
        <input  style={{ marginTop: '10px' }} type="text" name="CIN" value={parent.CIN} onChange={handleChange} />
      </label>
      <label>
        Gender:
        <input  style={{ marginTop: '10px' }} type="text" name="gender" value={parent.gender} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Type of Blood:
        <input  style={{ marginTop: '10px' }} type="text" name="Blood_type" value={parent.Blood_type} onChange={handleChange} />
      </label>
    
      <br/>
     <label>
        Passport Number:
        <input style={{ marginTop: '10px' }} type="text" name="passportNumber" value={parent.passportNumber} onChange={handleChange} />
      </label>
      <label>
        Expiry Date Passport:
        <input style={{ marginTop: '10px' }} type="date" name="expiryDatePassport" value={parent.expiryDatePassport} onChange={handleChange} />
      </label>
     <br/>
      <label>
        visa Number:
        <input style={{ marginTop: '10px' }} type="text" name="visaNumber" value={parent.visaNumber} onChange={handleChange} />
      </label>
      <label>
        expiry Date of Visa:
        <input style={{ marginTop: '10px' }} type="date" name="expiryDateVisa" value={parent.expiryDateVisa} onChange={handleChange} />
      </label>
      <br/>
      <label>
      Chronic Diseases:
        <input style={{ marginTop: '10px' }} type="text" name="chronicDiseases" value={parent.chronicDiseases} onChange={handleChange} />
      </label>
     <div style={{ display: 'flex', justifyContent: 'center', padding:'20px' }}>
    <button type="submit"  style={{ fontSize: '16px', padding: '6px', width:'100px' }}>Submit</button>
  </div>
  </div>
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      zIndex: -1,
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 200, 200, 0.5)',
      
    }}
  />
</div>
   </form>
  )
}
  </div>
  )
};


export default ParentForm;