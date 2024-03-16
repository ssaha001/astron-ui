import { createSlice } from "@reduxjs/toolkit";
import {
  getProject,
  getAllProjects,
  addProject,
  updateProject,
} from "../../api/projectApi";
import ProjectData from "../../Data/PropertyList.json";

export const fetchAllProperty = (payload) => async (dispatch) => {
  dispatch(getProjectStart);
  try {
    console.log(payload)
    const data = await getAllProjects(payload);
    dispatch(getProjectSuccess(data));
  } catch (error) {
    dispatch(getProjectFailure());
  }
};

export const fetchSingleProperty = (payload) => async (dispatch) => {
  dispatch(getProjectStart());
  try {
    const data = await getProject(payload);
    dispatch(getProjectSuccess(data));
  } catch (error) {
    dispatch(getProjectFailure());
  }
};

export const ProjectSlice = createSlice({
  name: "Project",
  initialState: {
    data: ProjectData,
    loading: false,
  },
  reducers: {
    getProjectStart: (state) => {
      state.loading = true;
    },
    getProjectSuccess: (state, action) => {
      state.loading = false;
      state.data = ProjectData.concat(action.payload["projects"]);
    },
    getProjectFailure: (state) => {
      state.loading = false;
      // Handle failure, e.g., show an error message
    },
    resetproject: () => ({
      data:[]
    }),
  },
});

export const { getProjectStart, getProjectSuccess, getProjectFailure, resetproject } =
  ProjectSlice.actions;

export default ProjectSlice.reducer;
