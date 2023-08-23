import productsSlice from "./products-slice";
import loginSlice from "./auth-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./products-slice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  products: productsSlice.reducer,
  login: loginSlice.reducer,
  cart: cartSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer
});
export default store;
