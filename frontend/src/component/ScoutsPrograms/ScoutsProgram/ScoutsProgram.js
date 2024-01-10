import React from "react";
import { Card, CardActions, Button, Typography, Box } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deleteScoutProgram } from "../../../actions/scoutPrograms";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "/node_modules/leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const ScoutsProgram = ({ program, setCurrentId, showActions = true }) => {
  const dispatch = useDispatch();

  // Position for testing default Djerba
  /*  const position = [
    33 + 46 / 60 + 59.99 / 3600, 
    10 + 52 / 60 + 59.99 / 3600, 
  ]; */

  const position = program?.location
    ? [program.location.lat, program.location.lon]
    : null;

  const truncateText = (text, limit) => {
    const words = text.split(" ", limit);
    return words.length >= limit ? `${words.join(" ")}...` : text;
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        position: "relative",
        margin: "auto",
        marginBottom: 3,
        marginRight: 3,
      }}
    >
      {position && (
        <Box sx={{ height: 194, overflow: "hidden" }}>
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
      <Box sx={{ padding: "0 16px", flexGrow: 1 }}>
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
          }}
        >
          <Typography variant="h5" component="h2">
            {program.name}
          </Typography>
          <Typography variant="body2">
            {moment(program.startDate).format("MMMM Do YYYY")}
          </Typography>
        </Box>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{
            fontSize: "1.7rem",
            fontWeight: "bold",
            color: "#010911",
          }}
        >
          <Link
            to={`/scoutPrograms/${program._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {program.name}
          </Link>
        </Typography>
        <Typography variant="body2">
          {moment(program.startDate).format("MMMM Do YYYY")}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontSize: "1.2rem" }}
        >
          {truncateText(program.description, 30)}
        </Typography>
      </Box>
      {showActions && (
        <CardActions
          sx={{
            padding: "0 16px 8px 16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            to={`/edit-scout-program/${program._id}`}
            style={{ textDecoration: "none" }}
          >
            <Button size="small" color="primary">
              <EditIcon fontSize="small" /> Edit
            </Button>
          </Link>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteScoutProgram(program._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default ScoutsProgram;
