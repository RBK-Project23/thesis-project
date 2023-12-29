import { combineReducers } from "redux";
import posts from "./posts";
import scoutPrograms from "./scoutPrograms";

const rootReducer = combineReducers({ posts, scoutPrograms });

export default rootReducer;
