import { combineReducers } from "redux";
import authReducer from "./authReducer";
import startupReducers from "./startupReducers";

export default combineReducers({
  auth: authReducer,
  startup: startupReducers,
});
