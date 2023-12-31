import React from "react";
import {
  Card,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deleteScoutProgram } from "../../../actions/scoutPrograms";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ScoutsProgram = ({ program, setCurrentId, showActions = true }) => {
  const dispatch = useDispatch();

  /*  const position = [
    33 + 46 / 60 + 59.99 / 3600, 
    10 + 52 / 60 + 59.99 / 3600, 
  ]; */

  const position = program.location
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        position: "relative",
        margin: "auto",
        marginBottom: 2,
      }}
    >
      {position && (
        <Box sx={{ height: 194, width: "100%" }}>
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
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "white",
          }}
        >
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(program._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" component="p">
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
