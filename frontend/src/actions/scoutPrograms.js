import {
  FETCH_ALL_SCOUT_PROGRAMS,
  CREATE_SCOUT_PROGRAM,
  UPDATE_SCOUT_PROGRAM,
  DELETE_SCOUT_PROGRAM,
  FETCH_SCOUT_PROGRAM,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getScoutPrograms = () => async (dispatch) => {
  try {
    const { data } = await api.fetchScoutPrograms();
    dispatch({ type: FETCH_ALL_SCOUT_PROGRAMS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createScoutProgram = (scoutProgram) => async (dispatch) => {
  try {
    const { data } = await api.createScoutProgram(scoutProgram);
    dispatch({ type: CREATE_SCOUT_PROGRAM, payload: data });
    alert("Scout Program created successfully.");
  } catch (error) {
    console.log(error.message);
    alert("Error creating Scout Program.");
  }
};

export const updateScoutProgram = (id, scoutProgram) => async (dispatch) => {
  try {
    const { data } = await api.updateScoutProgram(id, scoutProgram);
    dispatch({ type: UPDATE_SCOUT_PROGRAM, payload: data });
    alert("Scout Program updated successfully.");
  } catch (error) {
    console.log(error.message);
    alert(`Error updating Scout Program.`);
  }
};

export const deleteScoutProgram = (id) => async (dispatch) => {
  const userConfirmed = window.confirm(
    "Are you sure you want to delete this Scout Program?"
  );
  if (userConfirmed) {
    try {
      await api.deleteScoutProgram(id);
      dispatch({ type: DELETE_SCOUT_PROGRAM, payload: id });
      alert("Scout Program deleted successfully.");
    } catch (error) {
      console.log(error.message);
      alert(`Error deleting Scout Program`);
    }
  } else {
    alert("Scout Program deletion cancelled.");
  }
};

export const getScoutProgram = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchScoutProgram(id);
    dispatch({ type: FETCH_SCOUT_PROGRAM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
