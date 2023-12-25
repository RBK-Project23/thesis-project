import React, { useState } from 'react';
import axios from 'axios';
import ParentCard from './ParentCard';
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

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const [showParentCard, setShowParentCard] = useState(false);

  const handleChange = (e) => {
    setParent({
      ...parent,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenderChange = (e) => {
    setParent({ ...parent, gender: e.target.value });
  };

  const handleMembreChange = (e) => {
    setParent({ ...parent, participatedTunisianScoutRegiment: e.target.value });
  };

  const handleChronicChange = (e) => {
    setParent({ ...parent, chronicDiseases: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting Commander:', parent);

    try {
      const response = await axios.post('http://localhost:3000/parents', parent, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data.message);
      alert(response.data.message);

      setShowParentCard(true);
    } catch (error) {
      console.error('Error handling form submission:', error);
      alert('Error submitting the form');
    }
  };

  const handleEditClick = () => {
    setShowParentCard(false);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container maxWidth="sm">
      {showParentCard ? (
        <ParentCard parent={parent} onEditClick={handleEditClick} />
      ) : (
        <Card sx={{ width: '150%', margin: 'auto',  backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
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
            value={parent.FirstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="LastName"
            value={parent.LastName}
            onChange={handleChange}
          />
          <TextField
            label="age"
            variant="outlined"
            fullWidth
            margin="normal"
            name="age"
            value={parent.age}
            onChange={handleChange}
          />
          <TextField
            label="date of Birth"
            variant="outlined"
            fullWidth
            margin="normal"
            type='date'
            name="dateOfBirth"
            value={parent.dateOfBirth}
            onChange={handleChange}
          />
           <TextField
            label="Adress in Oman"
            variant="outlined"
            fullWidth
            margin="normal"
            name="Adress_OM"
            value={parent.Adress_OM}
            onChange={handleChange}
          />
            <TextField
            label="Phone in Oman"
            variant="outlined"
            fullWidth
            margin="normal"
            name="PhoneOM"
            value={parent.PhoneOM}
            onChange={handleChange}
          />
              <TextField
            label="Adress in Tunisia"
            variant="outlined"
            fullWidth
            margin="normal"
            name="adressTN"
            value={parent.adressTN}
            onChange={handleChange}
          />
           <TextField
            label=" Phone in Tunisia"
            variant="outlined"
            fullWidth
            margin="normal"
            name="phoneTN"
            value={parent.phoneTN}
            onChange={handleChange}
          />
          {/* ... (similar modifications for other TextField components) */}
          <RadioGroup
            row
            name="gender"
            value={parent.gender}
            onChange={handleGenderChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <RadioGroup
            row
            name="participatedTunisianScoutRegiment"
            value={parent.participatedTunisianScoutRegiment}
            onChange={handleMembreChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Membre of the Tunisan Scouts Regiment" />
            <FormControlLabel value="no" control={<Radio />} label="I'm not a Membre of the Tunisan Scouts Regiment" />
          </RadioGroup>
          <RadioGroup
            row
            name="chronicDiseases"
            value={parent.chronicDiseases}
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
                    value={parent.Blood_type}
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
            label="CIN"
            variant="outlined"
            fullWidth
            margin="normal"
            name="CIN"
            value={parent.CIN}
            onChange={handleChange}
          />
          <TextField
            label="passportNumber"
            variant="outlined"
            fullWidth
            margin="normal"
            name="passportNumber"
            value={parent.passportNumber}
            onChange={handleChange}
          />
           <TextField
            label="expiryDatePassport"
            variant="outlined"
            fullWidth
            margin="normal"
            type='date'
            name="expiryDatePassport"
            value={parent.expiryDatePassport}
            onChange={handleChange}
          />
           <TextField
            label="Visa Number"
            variant="outlined"
            fullWidth
            margin="normal"
            name="visaNumber"
            value={parent.visaNumber}
            onChange={handleChange}
          />
           <TextField
            label="expiryDateVisa"
            variant="outlined"
            fullWidth
            margin="normal"
            type='date'
            name="expiryDateVisa"
            value={parent.expiryDateVisa}
            onChange={handleChange}
          />
            <TextField
            label="dateLastTrainingLevelStudy"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            name="dateLastTrainingLevelStudy"
            value={parent.dateLastTrainingLevelStudy}
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

export default ParentForm;
