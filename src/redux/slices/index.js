import { combineReducers } from "redux";

import userReducer from "./userSlice";
import employeeReducer from "./employeeSlice";
import projectReducer from './projectSlice'

const reducer = combineReducers({
  user: userReducer,
  employee:employeeReducer,
  project: projectReducer,
});

export default reducer;
