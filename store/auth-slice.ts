import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {login:false},
  reducers: {
    login(state) {
      state.login = !state.login;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;