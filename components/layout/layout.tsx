"use client";
import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Cart from "./cart/cart";
import Footer from "./footer";
import { Provider } from "react-redux";
import store from "@/store/rootReducer";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Cart />
        {children}
        <Footer />
      </Provider>
    </>
  );
};

export default Layout;
