import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {login:false},
  reducers: {
    login(state) {
      state.login = !state.login;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;