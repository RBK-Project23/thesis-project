import React from "react";
import { Grid, CircularProgress } from "@mui/material";

import ScoutsProgram from "./ScoutsProgram/ScoutsProgram";

const ScoutsPrograms = ({ scoutPrograms, setCurrentId }) => {
  const sortedScoutPrograms = scoutPrograms.sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  /* const sortedScoutPrograms = [...scoutPrograms].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  ); */

  return !scoutPrograms.length ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={3}>
      {sortedScoutPrograms.map((program) => (
        <Grid
          key={program._id}
          item
          xs={12}
          sm={6}
          md={3.5}
          lg={3.5}
          sx={{
            margin: (theme) => theme.spacing(1),
            width: "100%",
            height: 410,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.03)",
            },
            backgroundColor: "#fff",
            overflow: "hidden",
          }}
        >
          <ScoutsProgram program={program} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ScoutsPrograms;
