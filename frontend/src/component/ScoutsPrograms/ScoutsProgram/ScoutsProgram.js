import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deleteScoutProgram } from "../../../actions/scoutPrograms";

const ScoutsProgram = ({ program, setCurrentId, showActions = true }) => {
  const dispatch = useDispatch();

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
      <CardMedia
        component="img"
        image={program.image || "defaultImageURL"}
        alt={program.name}
        sx={{
          height: 194,
        }}
      />
      <Box sx={{ padding: "0 16px", flexGrow: 1 }}>
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
          }}
        >
          <Typography variant="h5" component="h2">{program.name}</Typography>
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
