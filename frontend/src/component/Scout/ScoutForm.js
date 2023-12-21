
import React, { useState } from 'react';
import axios from 'axios';
import ScoutCard from './ScoutCard'

const ScoutForm = () => {
  const [scout, setScout] = useState({
    FirstName: '',
    LastName: '',
    age: '',
    dateOfBirth: '',
    Adress_OM: '',
    PhoneOM: '',
    Blood_type: '',
    passportNumber: '',
    expiryDatePassport: '',
    gender: '',
    visaNumber: '',
    expiryDateVisa: '',
    chronicDiseases: '',
   
  });

  const [showScoutCard, setShowScoutCard] = useState(false);


  const handleChange = (e) => {
    setScout({
      ...scout,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting Scout:', scout);
  
    try {
      const response = await axios.post('http://localhost:3000/scouts', scout, {
        
       headers: {
        'Content-Type': 'application/json',
      },
      })
     console.log(response.data.message);
      alert(response.data.message);

      setShowScoutCard(true);
    } catch (error) {
      console.error('Error handling form submission:', error);
      alert('Error submitting the form');
    }
  };

  const handleEditClick = () => {
    setShowScoutCard(false)
  }
  
  

  return (
    <div>
      {showScoutCard ? (
        <ScoutCard scout={scout} onEditClick={handleEditClick} />
      ) : (
    <form onSubmit={handleSubmit}>
       <div style={{ position: 'relative', maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
    <div style={{ border: '2px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '10px', maxWidth: '800px', margin: 'auto' }}>
      <label>
        First Name:
        <input style={{ marginTop: '10px' }} type="text" name="FirstName" value={scout.FirstName} onChange={handleChange} />
      </label>
      <label>
        LastName:
        <input  style={{ marginTop: '10px' }} type="text" name="LastName" value={scout.LastName} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Gender:
        <input  style={{ marginTop: '10px' }} type="text" name="gender" value={scout.gender} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Age:
        <input  style={{ marginTop: '10px' }} type="number" name="age" value={scout.age} onChange={handleChange} />
      </label>
      <label>
        date of Birt:
        <input  style={{ marginTop: '10px' }} type="date" name="dateOfBirth" value={scout.dateOfBirth} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Adress in Oman:
        <input  style={{ marginTop: '10px' }} type="text" name="Adress_OM" value={scout.Adress_OM} onChange={handleChange} />
      </label>
      <label>
        Phone in Oman:
        <input style={{ marginTop: '10px' }} type="number" name="PhoneOM" value={scout.PhoneOM} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Type of Blood:
        <input  style={{ marginTop: '10px' }} type="text" name="Blood_type" value={scout.Blood_type} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Passport Number:
        <input style={{ marginTop: '10px' }} type="text" name="passportNumber" value={scout.passportNumber} onChange={handleChange} />
      </label>
      <label>
        Expiry Date Passport:
        <input style={{ marginTop: '10px' }} type="date" name="expiryDatePassport" value={scout.expiryDatePassport} onChange={handleChange} />
      </label>
     <br/>
      <label>
        visa Number:
        <input style={{ marginTop: '10px' }} type="text" name="visaNumber" value={scout.visaNumber} onChange={handleChange} />
      </label>
      <label>
        expiry Date of Visa:
        <input style={{ marginTop: '10px' }} type="date" name="expiryDateVisa" value={scout.expiryDateVisa} onChange={handleChange} />
      </label>
      <br/>
      <label>
      Chronic Diseases:
        <input style={{ marginTop: '10px' }} type="text" name="chronicDiseases" value={scout.chronicDiseases} onChange={handleChange} />
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


export default ScoutForm;