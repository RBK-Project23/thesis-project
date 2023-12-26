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
     profileImage: 'filename.jpg',
  });

  const [showCommanderCard, setShowCommanderCard] = useState(false);

  const handleChange = (e) => {
    setCommander({
      ...commander,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCommander({
          ...commander,
          profileImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
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
    <div style={{  backgroundImage: `url(${process.env.PUBLIC_URL}/444.jpg)`,
    backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>    
          <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '10px', marginRight: '10px' }}>

      {showCommanderCard ? (
        <CommanderCard commander={commander} onEditClick={handleEditClick} />
      ) : (
        <form onSubmit={handleSubmit}  encType="multipart/form-data">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch' }}>
        <Card sx={{  height: '100%', width: '100%', backgroundColor: 'rgba(240, 240, 240, 0.7)', marginLeft: '10px', marginTop: '50px', marginBottom: '50px', marginRight: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', }}>
        <CardContent>
        <div>
    <Typography variant="h5" gutterBottom>
      Complete your informations
    </Typography>
  </div>
          <input type="file" name="profileImage" accept="image/*" onChange={handleFileChange} />
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
            InputLabelProps={{
              shrink: true,
            }}
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
          </CardContent>
            </Card>
            <Card sx={{  height: '100%', width: '100%', backgroundColor: 'rgba(240, 240, 240, 0.7)',  marginLeft: '10px', marginTop: '50px', marginBottom: '50px', marginRight: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)' }}>
              <CardContent>
         
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
            InputLabelProps={{
              shrink: true,
            }}
            name="dateLastTrainingLevelStudy"
            value={commander.dateLastTrainingLevelStudy}
            onChange={handleChange}
          />
           </CardContent>
            </Card>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <Button type="submit" variant="contained" color="primary" size="large" style={{ backgroundColor: 'darkgreen', color: 'white' }}>
         Submit
         </Button>
        </div>
        </form>
        
      )}
       </Container>
    </div>
  );
};

export default CommanderForm;
