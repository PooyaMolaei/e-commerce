import productsSlice from "./products-slice";
import loginSlice from "./login-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  products: productsSlice.reducer,
  login: loginSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer
});
export default store;
