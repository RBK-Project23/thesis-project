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
  Typography,
  Card,
  CardContent,
  Box,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

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

    console.log("Submitting Scout:", scout);

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
          Complete Scouts Information
        </Typography>
        {showScoutCard ? (
          <ScoutCard scout={scout} onEditClick={handleEditClick} />
        ) : (
          <form onSubmit={handleSubmit}>
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
                    label="Age"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="age"
                    value={scout.age}
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
                    value={scout.dateOfBirth}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Address in Sultanate"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="Adress_OM"
                    value={scout.Adress_OM}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Phone Number in Oman"
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
                  width: "48%",
                  backgroundColor: "rgba(240, 240, 240, 0.7)",
                  marginY: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <CardContent>
                  <RadioGroup
                    row
                    name="Genre"
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
                    <InputLabel>Blood Group</InputLabel>
                    <Select
                      label="Blood Group"
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
                    label="Passport Number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="passportNumber"
                    value={scout.passportNumber}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Passport Expiry Date"
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
                    label="Visa Expiry Date"
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
                Validate
              </Button>
            </Box>
          </form>
        )}
      </Container>
    </Box>
  );
  };
  
  export default ScoutForm;
  
