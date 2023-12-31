import React from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import { useSelector } from "react-redux";

import ScoutsProgram from "./ScoutsProgram/ScoutsProgram";

const ScoutsPrograms = ({ setCurrentId }) => {
  const scoutPrograms = useSelector((state) => state.scoutPrograms);

  /*  const sortedScoutPrograms = scoutPrograms.sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  ); */

  const sortedScoutPrograms = [...scoutPrograms].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return !scoutPrograms.length ? (
    <CircularProgress />
  ) : (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Grid container alignItems="stretch" spacing={3}>
        {sortedScoutPrograms.map((program) => (
          <Grid
            key={program._id}
            item
            xs={12}
            sm={5.7}
            md={5.7}
            sx={{
              margin: (theme) => theme.spacing(1),
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.03)",
              },
              backgroundColor: "#fff",
            }}
          >
            <ScoutsProgram
              program={program}
              setCurrentId={setCurrentId}
              sx={{ textAlign: "center" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ScoutsPrograms;
