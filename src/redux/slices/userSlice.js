import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    type: "",
  },
  reducers: {
    getUser: (state) => {},
    setUser: (state, { type, payload }) => {
      state.name = payload.name;
      state.type = payload.type;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
