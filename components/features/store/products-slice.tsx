import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};
const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
});

export const productsActions = productsSlice.actions;
export default productsSlice;
