import React, { useState } from 'react';
import axios from 'axios';
import ScoutCard from './ScoutCard';
import {
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  FormControl,
  FormLabel,
} from '@mui/material';

import { Card, CardContent, Typography } from '@mui/material';
import { Select, InputLabel, MenuItem } from '@mui/material';

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

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const [showScoutCard, setShowScoutCard] = useState(false);

  const handleChange = (e) => {
    setScout({
      ...scout,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenderChange = (e) => {
    setScout({ ...scout, gender: e.target.value });
  };


  const handleChronicChange = (e) => {
    setScout({ ...scout, chronicDiseases: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting Commander:', scout);

    try {
      const response = await axios.post('http://localhost:3000/scouts', scout, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data.message);
      alert(response.data.message);

      setShowScoutCard(true);
    } catch (error) {
      console.error('Error handling form submission:', error);
      alert('Error submitting the form');
    }
  };

  const handleEditClick = () => {
    setShowScoutCard(false);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container maxWidth="sm">
      {showScoutCard ? (
        <ScoutCard scout={scout} onEditClick={handleEditClick} />
      ) : (
        <Card sx={{ width: '150%', margin: 'auto', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <CardContent>
        <img
              src={`${process.env.PUBLIC_URL}/Logo_scouts_oman.png`} 
              alt="Logo"
              style={{ width: '130px', marginRight: '50px', marginLeft:'620px' }}
            />
          <Typography variant="h5" component="div" gutterBottom>
            Complete your informations
          </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="FirstName"
            value={scout.FirstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="LastName"
            value={scout.LastName}
            onChange={handleChange}
          />
          <TextField
            label="age"
            variant="outlined"
            fullWidth
            margin="normal"
            name="age"
            value={scout.age}
            onChange={handleChange}
          />
          <TextField
            label="date of birth"
            variant="outlined"
            fullWidth
            margin="normal"
            type='date'
            name="dateOfBirth"
            value={scout.dateOfBirth}
            onChange={handleChange}
          />
           <TextField
            label="Adress in Oman"
            variant="outlined"
            fullWidth
            margin="normal"
            name="Adress_OM"
            value={scout.Adress_OM}
            onChange={handleChange}
          />
            <TextField
            label="Phone in Oman"
            variant="outlined"
            fullWidth
            margin="normal"
            name="PhoneOM"
            value={scout.PhoneOM}
            onChange={handleChange}
          />
            
         
          <RadioGroup
            row
            name="gender"
            value={scout.gender}
            onChange={handleGenderChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <RadioGroup
            row
            name="chronicDiseases"
            value={scout.chronicDiseases}
            onChange={handleChronicChange}
          >
            <FormControlLabel value="You have chronic diseases" control={<Radio />} label="You have chronic diseases" />
            <FormControlLabel value="You don't have chronic diseases" control={<Radio />} label="You don't have chronic diseases" />
           </RadioGroup>
           <FormControl fullWidth margin="normal">
                  <InputLabel>Blood Type</InputLabel>
                  <Select
                    label="Blood Type"
                    name="Blood_type"
                    value={scout.Blood_type}
                    onChange={handleChange}
                  >
                    {bloodTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
           <TextField
            label="passportNumber"
            variant="outlined"
            fullWidth
            margin="normal"
            name="passportNumber"
            value={scout.passportNumber}
            onChange={handleChange}
          />
           <TextField
            label="expiryDatePassport"
            variant="outlined"
            fullWidth
            margin="normal"
            type='date'
            name="expiryDatePassport"
            value={scout.expiryDatePassport}
            onChange={handleChange}
          />
           <TextField
            label="Visa Number"
            variant="outlined"
            fullWidth
            margin="normal"
            name="visaNumber"
            value={scout.visaNumber}
            onChange={handleChange}
          />
           <TextField
            label="expiryDateVisa"
            variant="outlined"
            fullWidth
            margin="normal"
            type='date'
            name="expiryDateVisa"
            value={scout.expiryDateVisa}
            onChange={handleChange}
          />
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <Button type="submit" variant="contained" color="primary" size="large" style={{ backgroundColor: 'green', color: 'white' }}>
         Submit
         </Button>
        </div>
        </form>
        </CardContent>
       
        </Card>
      )}
       </Container>
    </div>
  );
};

export default ScoutForm;
