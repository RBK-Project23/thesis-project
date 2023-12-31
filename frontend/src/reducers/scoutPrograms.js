import {
  FETCH_ALL_SCOUT_PROGRAMS,
  CREATE_SCOUT_PROGRAM,
  UPDATE_SCOUT_PROGRAM,
  DELETE_SCOUT_PROGRAM,
  FETCH_SCOUT_PROGRAM,
} from "../constants/actionTypes";

const scoutProgramsReducer = (scoutPrograms = [], action) => {
  switch (action.type) {
    case FETCH_ALL_SCOUT_PROGRAMS:
      return action.payload;
    case FETCH_SCOUT_PROGRAM:
      return scoutPrograms.map((program) =>
        program._id === action.payload._id ? action.payload : program
      );
    case CREATE_SCOUT_PROGRAM:
      return [...scoutPrograms, action.payload];
    case UPDATE_SCOUT_PROGRAM:
      return scoutPrograms.map((program) =>
        program._id === action.payload._id ? action.payload : program
      );
    case DELETE_SCOUT_PROGRAM:
      return scoutPrograms.filter((program) => program._id !== action.payload);
    default:
      return scoutPrograms;
  }
};

export default scoutProgramsReducer;
