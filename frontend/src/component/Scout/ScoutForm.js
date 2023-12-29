import React, { useState } from "react";
import axios from "axios";
import ScoutCard from "./ScoutCard";
import {
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  FormControl,
} from "@mui/material";

import { Card, CardContent, Typography } from "@mui/material";
import { Select, InputLabel, MenuItem } from "@mui/material";

const ScoutForm = () => {
  const [scout, setScout] = useState({
    FirstName: "",
    LastName: "",
    age: "",
    dateOfBirth: "",
    Adress_OM: "",
    PhoneOM: "",
    Blood_type: "",
    passportNumber: "",
    expiryDatePassport: "",
    gender: "",
    visaNumber: "",
    expiryDateVisa: "",
    chronicDiseases: "",
    profileImage: "filename.jpg",
  });

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [showScoutCard, setShowScoutCard] = useState(false);

  const handleChange = (e) => {
    setScout({
      ...scout,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setScout({
          ...scout,
          profileImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleGenderChange = (e) => {
    setScout({ ...scout, gender: e.target.value });
  };

  const handleChronicChange = (e) => {
    setScout({ ...scout, chronicDiseases: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting Commander:", scout);

    try {
      const response = await axios.post("http://localhost:7000/scouts", scout, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.message);
      alert(response.data.message);

      setShowScoutCard(true);
    } catch (error) {
      console.error("Error handling form submission:", error);
      alert("Error submitting the form");
    }
  };

  const handleEditClick = () => {
    setShowScoutCard(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/444.jpg)`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        {showScoutCard ? (
          <ScoutCard scout={scout} onEditClick={handleEditClick} />
        ) : (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "rgba(240, 240, 240, 0.7)",
                  marginLeft: "10px",
                  marginRight: "10px",
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
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "rgba(240, 240, 240, 0.7)",
                  marginLeft: "10px",
                  marginRight: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <CardContent>
                  <RadioGroup
                    row
                    name="gender"
                    value={scout.gender}
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
                    name="chronicDiseases"
                    value={scout.chronicDiseases}
                    onChange={handleChronicChange}
                  >
                    <FormControlLabel
                      value="I have chronic diseases"
                      control={<Radio />}
                      label="I have chronic diseases"
                    />
                    <FormControlLabel
                      value="I don't have chronic diseases"
                      control={<Radio />}
                      label="I don't have chronic diseases"
                    />
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
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="expiryDateVisa"
                    value={scout.expiryDateVisa}
                    onChange={handleChange}
                  />
                </CardContent>
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                style={{ backgroundColor: "darkgreen", color: "white" }}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Container>
    </div>
  );
};

export default ScoutForm;
