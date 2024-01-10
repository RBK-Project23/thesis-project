import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  TextField,
  Box,
  InputAdornment,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ScoutsPrograms from "./ScoutsPrograms/ScoutsPrograms";
import { getScoutPrograms } from "../actions/scoutPrograms";

import Footer from "./footer";
import SearchIcon from "@mui/icons-material/Search";

const ScoutsProgramsPage = () => {
  const [currentId, setCurrentId] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const dispatch = useDispatch();
  const scoutPrograms = useSelector((state) => state.scoutPrograms);

  useEffect(() => {
    dispatch(getScoutPrograms());
  }, [currentId, dispatch]);


  useEffect(() => {
    console.log("Search Term:", search);
    console.log("Posts before filtering:", scoutPrograms);

    if (search.trim()) {
      const filtered = scoutPrograms.filter((program) =>
        program.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log("Filtered Posts:", filtered);
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(scoutPrograms);
    }
  }, [search, scoutPrograms]);

  return (
    <>
      <Container maxWidth="lg">
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
            Scouts Programs
          </Typography>
        </AppBar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            paddingRight: 2,
          }}
        >
          <TextField
            placeholder="Search scouts programs..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              marginBottom: "80px",
              width: "25%",
              alignSelf: "center",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              {filteredPosts.length > 0 ? (
                <ScoutsPrograms
                  scoutPrograms={filteredPosts}
                  setCurrentId={setCurrentId}
                />
              ) : (
                search && (
                  <Typography
                    variant="h4"
                    align="center"
                    sx={{
                      width: "100%",
                      marginTop: 2,
                    }}
                  >
                    No scouts program found matching your search title.
                  </Typography>
                )
              )}
              
            </Grid>
          </Container>
        </Grow>
      </Container>
      <Footer />
    </>
  );
};

export default ScoutsProgramsPage;
