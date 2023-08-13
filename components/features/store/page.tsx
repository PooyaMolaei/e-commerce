import productsSlice from "./productsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  products: productsSlice.reducer,
});
const store = configureStore({
  reducer: productsSlice.reducer,
});
export default store;
