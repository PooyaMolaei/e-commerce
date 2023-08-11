import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";

export type RootState = ReturnType<typeof rootReducer>;


const rootReducer = combineReducers({
  login: loginSlice.reducer,
});


const store = configureStore({
  reducer: rootReducer
});

export default store;