import { combineReducers } from "redux";

import userReducer from "./userSlice";
import employeeReducer from "./employeeSlice";
import projectReducer from './projectSlice';
import supplierReducer from './supplierSlice';

const reducer = combineReducers({
  user: userReducer,
  employee:employeeReducer,
  project: projectReducer,
  supplier: supplierReducer,
});

export default reducer;
