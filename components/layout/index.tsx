"use client";
import React, { ReactNode } from "react";
import Navbar from "./navabr/page";
import { Provider } from "react-redux";
import store from "@/components/features/store";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        {children}
      </Provider>
    </>
  );
};

export default Layout;
