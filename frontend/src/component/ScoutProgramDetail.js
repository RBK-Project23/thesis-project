import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getScoutProgram } from "../actions/scoutPrograms";
import { Container, Paper, Typography, Grid, Box, AppBar } from "@mui/material";
import moment from "moment";
import Footer from "./footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ScoutProgramDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const program = useSelector((state) =>
    state.scoutPrograms.find((p) => p._id === id)
  );

  useEffect(() => {
    dispatch(getScoutProgram(id));
  }, [id, dispatch]);

  if (!program) return <div>Loading...</div>;

  const position = program.location
    ? [program.location.lat, program.location.lon]
    : null;

  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          borderRadius: 15,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
  
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: "rgba(239, 82, 87, 1)",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          Scouts Program
        </Typography>
      
      </AppBar>

      <Container>
        <Paper style={{ padding: "20px", marginTop: "20px", marginBottom: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {position && (
                <Box sx={{ height: 300, width: "100%" }}>
                  <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                      <Popup>{program.name}</Popup>
                    </Marker>
                  </MapContainer>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3" component="h1">
                {program.name}
              </Typography>
              <Typography variant="body2">
                {moment(program.startDate).format("MMMM Do YYYY")}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {program.description}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default ScoutProgramDetail;
