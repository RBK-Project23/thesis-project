import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Box, useTheme} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  createScoutProgram,
  updateScoutProgram,
} from "../../actions/scoutPrograms";

const ScoutsProgramForm = ({ currentId, setCurrentId }) => {
  const initialFormState = {
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    address: "",
  };
  const [scoutProgramData, setScoutProgramData] = useState(initialFormState);
  const dispatch = useDispatch();

  const program = useSelector((state) =>
    currentId ? state.scoutPrograms.find((p) => p._id === currentId) : null
  );

  const theme = useTheme();

  useEffect(() => {
    if (program) setScoutProgramData(program);
  }, [program]);

  const clear = () => {
    setCurrentId(0);
    setScoutProgramData(initialFormState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createScoutProgram(scoutProgramData));
    } else {
      dispatch(updateScoutProgram(currentId, scoutProgramData));
    }
    clear();
  };

  return (
    <Paper
      elevation={6}
      sx={{
        padding: (theme) => theme.spacing(2),
        marginBottom: (theme) => theme.spacing(2),
      }}
    >
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& .MuiTextField-root": {
            margin: (theme) => theme.spacing(1),
          },
        }}
      >
        <Typography variant="h6">
          {currentId
            ? `Editing "${program?.name}"`
            : "Creating a Scout Program"}
        </Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Program Name"
          fullWidth
          value={scoutProgramData.name}
          onChange={(e) =>
            setScoutProgramData({ ...scoutProgramData, name: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={scoutProgramData.description}
          onChange={(e) =>
            setScoutProgramData({
              ...scoutProgramData,
              description: e.target.value,
            })
          }
        />
        <TextField
          name="startDate"
          variant="outlined"
          label="Start Date"
          type="date"
          fullWidth
          value={scoutProgramData.startDate}
          onChange={(e) =>
            setScoutProgramData({
              ...scoutProgramData,
              startDate: e.target.value,
            })
          }
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          name="endDate"
          variant="outlined"
          label="End Date"
          type="date"
          fullWidth
          value={scoutProgramData.endDate}
          onChange={(e) =>
            setScoutProgramData({
              ...scoutProgramData,
              endDate: e.target.value,
            })
          }
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          name="address"
          variant="outlined"
          label="Address"
          fullWidth
          value={scoutProgramData.address}
          onChange={(e) =>
            setScoutProgramData({
              ...scoutProgramData,
              address: e.target.value,
            })
          }
        />
        <Box sx={{margin: "10px 0"}}/>
        <Button
          sx={{
            marginBottom: 2,
            backgroundColor: "#EF5257",
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.augmentColor({
                color: { main: "#EF5257" },
                mainShade: "dark",
              }).dark,
            },
          }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#B0BEC5",
            color: "white",
            "&:hover": {
              backgroundColor: "#90A4AE",
            },
          }}
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default ScoutsProgramForm;
