import loginSlice from "./auth-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  login: loginSlice.reducer,
  cart: cartSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer
});
export default store;
