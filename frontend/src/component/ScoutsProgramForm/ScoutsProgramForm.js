import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  createScoutProgram,
  updateScoutProgram,
} from "../../actions/scoutPrograms";
import { useNavigate, useParams } from "react-router-dom";

const ScoutsProgramForm = () => {
  const initialFormState = {
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    address: "",
  };
  const [scoutProgramData, setScoutProgramData] = useState(initialFormState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const program = useSelector((state) =>
    id ? state.scoutPrograms.find((p) => p._id === id) : null
  );

  const theme = useTheme();

  useEffect(() => {
    if (program) setScoutProgramData(program);
  }, [program]);

  const clear = () => {
    setScoutProgramData(initialFormState);
    if (id) {
      navigate("/scouts-programs");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      new Date(scoutProgramData.endDate) < new Date(scoutProgramData.startDate)
    ) {
      alert("End date cannot be earlier than start date.");
      return;
    }

    if (!id) {
      dispatch(createScoutProgram(scoutProgramData));
    } else {
      dispatch(updateScoutProgram(id, scoutProgramData));
    }
    clear();
  };

  return (
    <Paper
      elevation={6}
      sx={{
        padding: (theme) => theme.spacing(2),
        marginTop: (theme) => theme.spacing(5),
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "700px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "24px",
            textAlign: "center",
            margin: (theme) => theme.spacing(2),
          }}
        >
          {id ? `Editing "${program?.name}"` : "Create Scouts Program"}
        </Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Program Name"
          fullWidth
          sx={{
            margin: (theme) => theme.spacing(1),
          }}
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
          sx={{
            margin: (theme) => theme.spacing(1),
          }}
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
          sx={{
            margin: (theme) => theme.spacing(1),
          }}
          value={scoutProgramData.startDate}
          onChange={(e) =>
            setScoutProgramData({
              ...scoutProgramData,
              startDate: e.target.value,
            })
          }
          InputLabelProps={{ shrink: true }}
          inputProps={{ min: new Date().toISOString().split("T")[0] }}
        />
        <TextField
          name="endDate"
          variant="outlined"
          label="End Date"
          type="date"
          fullWidth
          sx={{
            margin: (theme) => theme.spacing(1),
          }}
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
          sx={{
            margin: (theme) => theme.spacing(1),
          }}
          value={scoutProgramData.address}
          onChange={(e) =>
            setScoutProgramData({
              ...scoutProgramData,
              address: e.target.value,
            })
          }
        />
        <Box sx={{ width: "100%", margin: "10px 0" }} />
        <Button
          sx={{
            margin: (theme) => theme.spacing(1),
            marginBottom: 2,
            backgroundColor: "#EF5257",
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.augmentColor({
                color: { main: "#EF5257" },
                mainShade: "dark",
              }).dark,
              transform: "scale(1.02)",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            },
            padding: "10px",
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
            margin: (theme) => theme.spacing(1),
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
