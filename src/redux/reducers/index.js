import { combineReducers } from "redux";
import authReducer from "./authReducer";
import startupReducers from "./startupReducers";
import mentorReducers from "./mentorReducer";
import tbiReducers from "./tbiReducers";

export default combineReducers({
  auth: authReducer,
  startup: startupReducers,
  mentor: mentorReducers,
  tbi: tbiReducers
});
