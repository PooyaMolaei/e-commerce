import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?:number;
}

export interface InitialState {
  products: Product[];
  totalAmount: number;
  quantity: number;
  isShown: boolean;
}

const initialState: InitialState = {
  products: [],
  totalAmount: 0,
  quantity: 0,
  isShown: false,
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment(state, { payload: product }: PayloadAction<Product>) {
      const selectedProduct = state.products.find((productItem) => productItem.id === product.id);
      if (selectedProduct) {
        selectedProduct.quantity = (selectedProduct.quantity || 0) + 1;
      } else {
        state.products.push({...product,quantity:1});
      }
      state.totalAmount = state.products.reduce((prevTotalAmount, product) => {
        return prevTotalAmount + product.price * (product.quantity || 0);
      }, 0);
    },

    decrement(state, { payload: id }: PayloadAction<number>) {
      const selectedProduct = state.products.find((product) => product.id === id);
      if (selectedProduct) {
        selectedProduct.quantity = (selectedProduct.quantity || 0) - 1;
        if (selectedProduct.quantity <= 0) {
          state.products = state.products.filter((product) => product.id !== id);
        }
      }
      state.totalAmount = state.products.reduce((prevTotalAmount, product) => {
        return prevTotalAmount + product.price * (product.quantity || 0);
      }, 0);
    },
    showSlide (state){
      state.isShown = !state.isShown
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
