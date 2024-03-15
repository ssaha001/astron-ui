import { combineReducers } from "redux";

import userReducer from "./userSlice";
import employeeReducer from "./employeeSlice";

const reducer = combineReducers({
  user: userReducer,
  employee:employeeReducer
});

export default reducer;
