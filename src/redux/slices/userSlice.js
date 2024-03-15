import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    type: "",
    id:"",
    empPwd:"",
  },
  reducers: {
    getUser: (state) => {},
    setUser: (state, { type, payload }) => {
      state.name = payload.name;
      state.type = payload.type;
      state.id=payload.id;
    },
    setEmpPwd:(state, { type, payload }) => {
      state.empPwd=payload;
    }
  },
});

export const { setUser, setEmpPwd } = userSlice.actions;

export default userSlice.reducer;
