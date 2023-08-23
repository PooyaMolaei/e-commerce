import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity:number;
}

interface InitialState {
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
    increament(state, { payload: product }: PayloadAction<Product>) {
      const selectedProduct = state.products.find((product) => product.id === product.id);
      if (selectedProduct) {
        selectedProduct.quantity++;
      } else {
        state.products.push(product);
      }
      state.totalAmount = state.products.reduce((prevTotalAmount, product) => {
        return prevTotalAmount + product.price * product.quantity;
      }, 0);
    },

    decreament(state, { payload: id }: PayloadAction<number>) {
      const selectedProduct = state.products.find((product) => product.id === id);
      if (selectedProduct) {
        selectedProduct.quantity--;
        if (selectedProduct.quantity === 0) {
          state.products = state.products.filter((product) => product.id !== id);
        }
      }
      state.totalAmount = state.products.reduce((prevTotalAmount, product) => {
        return prevTotalAmount + product.price * product.quantity;
      }, 0);
    },
    showSlide (state){
      state.isShown = !state.isShown
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
