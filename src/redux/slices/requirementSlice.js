import { createSlice } from "@reduxjs/toolkit";
import { getAllRequirements } from "../../api/userApi";
import RequirementData from "../../Data/RequirementList.json";

export const fetchAllProperty = (payload) => async (dispatch) => {
  dispatch(getRequirementStart);
  try {
    const data = await getAllRequirements(payload);
    dispatch(getRequirementSuccess(data));
  } catch (error) {
    dispatch(getRequirementFailure());
  }
};


export const RequirementSlice = createSlice({
  name: "Requirement",
  initialState: {
    data: RequirementData,
    loading: false,
  },
  reducers: {
    getRequirementStart: (state) => {
      state.loading = true;
    },
    getRequirementSuccess: (state, action) => {
      state.loading = false;
      state.data = RequirementData.concat(action.payload["requirements"]);
    },
    getRequirementFailure: (state) => {
      state.loading = false;
      // Handle failure, e.g., show an error message
    },
    resetRequirement: () => ({
      data:[]
    }),
  },
});

export const { getRequirementStart, getRequirementSuccess, getRequirementFailure, resetRequirement } =
  RequirementSlice.actions;

export default RequirementSlice.reducer;
