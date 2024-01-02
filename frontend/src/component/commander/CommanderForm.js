import React, { useState } from "react";
import axios from "axios";
import CommanderCard from "./CommanderCard";
import {
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const CommanderForm = () => {
  const [commander, setCommander] = useState({
    FirstName: "",
    LastName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    gender: "",
    CIN: "",
    isParent: "",
    fatherName: "",
    grandFatherName: "",
    maritalStatus: "",
    addressTN: "",
    phoneTN: "",
    jobOM: "",
    jobTN: "",
    educationalLevel: "",
    certificate: "",
    scoutTrainingLevel: "",
    dateLastTrainingLevelStudy: "",
    profileImage: "filename.jpg",
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

    console.log("Submitting Commander:", commander);

    try {
      const response = await axios.post(
        "http://localhost:7000/commanders",
        commander,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.message);
      alert(response.data.message);

      setShowCommanderCard(true);
    } catch (error) {
      console.error("Error handling form submission:", error);
      alert("Error submitting the form");
    }
  };

  const handleEditClick = () => {
    setShowCommanderCard(false);
  };

  return (
    <Box
      style={{
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          style={{
            textAlign: "center",
            color: "#010911",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Complete Commander Information
        </Typography>
        {showCommanderCard ? (
          <CommanderCard commander={commander} onEditClick={handleEditClick} />
        ) : (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <Card
                sx={{
                  width: "48%",
                  backgroundColor: "rgba(240, 240, 240, 0.7)",
                  marginY: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <CardContent>
                  <div>
                    <Typography variant="h5" gutterBottom>
                      Complete your informations
                    </Typography>
                  </div>
                  <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
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
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                  <RadioGroup
                    row
                    name="isParent"
                    value={commander.isParent}
                    onChange={handleParentChange}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="I am a parent"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="I am not a parent"
                    />
                  </RadioGroup>
                  <RadioGroup
                    row
                    name="maritalStatus"
                    value={commander.maritalStatus}
                    onChange={handleStatusChange}
                  >
                    <FormControlLabel
                      value="Single"
                      control={<Radio />}
                      label="Single"
                    />
                    <FormControlLabel
                      value="Married"
                      control={<Radio />}
                      label="Married"
                    />
                    <FormControlLabel
                      value="divorce"
                      control={<Radio />}
                      label="Divorce"
                    />
                    <FormControlLabel
                      value="widower"
                      control={<Radio />}
                      label="Widower"
                    />
                  </RadioGroup>
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: "48%",
                  backgroundColor: "rgba(240, 240, 240, 0.7)",
                  marginY: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
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
            </Box>
            <Box display="flex" justifyContent="center" marginTop="20px">
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{
                  backgroundColor: "darkgreen",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Container>
    </Box>
  );
};

export default CommanderForm;
