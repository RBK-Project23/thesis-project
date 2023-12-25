import React, { useState } from 'react';
import axios from 'axios';
import CommanderCard from './CommanderCard';
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

const CommanderForm = () => {
  const [commander, setCommander] = useState({
    FirstName: '',
    LastName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    gender: '',
    CIN: '',
    isParent: '',
    fatherName: '',
    grandFatherName: '',
    maritalStatus: '',
    addressTN: '',
    phoneTN: '',
    jobOM: '',
    jobTN: '',
    educationalLevel: '',
    certificate: '',
    scoutTrainingLevel: '',
    dateLastTrainingLevelStudy: '',
  });

  const [showCommanderCard, setShowCommanderCard] = useState(false);

  const handleChange = (e) => {
    setCommander({
      ...commander,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenderChange = (e) => {
    setCommander({ ...commander, gender: e.target.value });
  };

  const handleParentChange = (e) => {
    setCommander({ ...commander, isParent: e.target.value });
  };

  const handleStatusChange = (e) => {
    setCommander({ ...commander, maritalStatus: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting Commander:', commander);

    try {
      const response = await axios.post('http://localhost:7000/commanders', commander, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data.message);
      alert(response.data.message);

      setShowCommanderCard(true);
    } catch (error) {
      console.error('Error handling form submission:', error);
      alert('Error submitting the form');
    }
  };

  const handleEditClick = () => {
    setShowCommanderCard(false);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container maxWidth="sm">
      {showCommanderCard ? (
        <CommanderCard commander={commander} onEditClick={handleEditClick} />
      ) : (
        <Card sx={{ width: '130%', margin: 'auto',  backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <CardContent>
        <img
              src={`${process.env.PUBLIC_URL}/Logo_scouts_oman.png`} 
              alt="Logo"
              style={{ width: '130px', marginRight: '50px', marginLeft:'530px' }}
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
            value={commander.FirstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="LastName"
            value={commander.LastName}
            onChange={handleChange}
          />
          <TextField
            label="Date of Birth"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            name="dateOfBirth"
            value={commander.dateOfBirth}
            onChange={handleChange}
          />
          <TextField
            label="Place of Birth"
            variant="outlined"
            fullWidth
            margin="normal"
            name="placeOfBirth"
            value={commander.placeOfBirth}
            onChange={handleChange}
          />
           <TextField
            label="CIN"
            variant="outlined"
            fullWidth
            margin="normal"
            name="CIN"
            value={commander.CIN}
            onChange={handleChange}
          />
          {/* ... (similar modifications for other TextField components) */}
          <RadioGroup
            row
            name="gender"
            value={commander.gender}
            onChange={handleGenderChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <RadioGroup
            row
            name="isParent"
            value={commander.isParent}
            onChange={handleParentChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="I am a parent" />
            <FormControlLabel value="no" control={<Radio />} label="I am not a parent" />
          </RadioGroup>
          <RadioGroup
            row
            name="maritalStatus"
            value={commander.maritalStatus}
            onChange={handleStatusChange}
          >
            <FormControlLabel value="Single" control={<Radio />} label="Single" />
            <FormControlLabel value="Married" control={<Radio />} label="Married" />
            <FormControlLabel value="divorce" control={<Radio />} label="Divorce" />
            <FormControlLabel value="widower" control={<Radio />} label="Widower" />
          </RadioGroup>
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            name="addressTN"
            value={commander.addressTN}
            onChange={handleChange}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            name="phoneTN"
            value={commander.phoneTN}
            onChange={handleChange}
          />
           <TextField
            label="jobOM"
            variant="outlined"
            fullWidth
            margin="normal"
            name="jobOM"
            value={commander.jobOM}
            onChange={handleChange}
          />
           <TextField
            label="jobTN"
            variant="outlined"
            fullWidth
            margin="normal"
            name="jobTN"
            value={commander.jobTN}
            onChange={handleChange}
          />
           <TextField
            label="educationalLevel"
            variant="outlined"
            fullWidth
            margin="normal"
            name="educationalLevel"
            value={commander.educationalLevel}
            onChange={handleChange}
          />
             <TextField
            label="scoutTrainingLevel"
            variant="outlined"
            fullWidth
            margin="normal"
            name="scoutTrainingLevel"
            value={commander.scoutTrainingLevel}
            onChange={handleChange}
          />
          <TextField
            label="dateLastTrainingLevelStudy"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            name="dateLastTrainingLevelStudy"
            value={commander.dateLastTrainingLevelStudy}
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

export default CommanderForm;
