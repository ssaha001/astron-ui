import { createSlice } from "@reduxjs/toolkit";
import { getEmployee } from "../../api/employeeApi";
import employeeData from "../../Data/employees.json";

export const fetchEmployee = (payload) => async (dispatch) => {
    dispatch(getEmployeeStart());
    try {
      const data = await getEmployee(payload);
      dispatch(getEmployeeSuccess(data));
    } catch (error) {
      dispatch(getEmployeeFailure());
    }
  };

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    data: employeeData,
    loading: false,
  },
  reducers: {
    getEmployeeStart: (state) => {
      state.loading = true;
    },
    getEmployeeSuccess: (state, action) => {
      state.loading = false;
      state.data = employeeData.concat(action.payload["emp"]);
    },
    getEmployeeFailure: (state) => {
      state.loading = false;
      // Handle failure, e.g., show an error message
    },
    resetemployee: () => ({
      data:[]
    }),
  },
});

export const { getEmployeeStart, getEmployeeSuccess, getEmployeeFailure, resetemployee } = employeeSlice.actions;

export default employeeSlice.reducer;
