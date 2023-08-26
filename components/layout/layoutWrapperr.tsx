"use client";
import React, { ReactNode, useEffect } from "react";

import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/store/rootReducer";
import { authActions } from "@/store/auth-slice";
import Layout from "./layout";


interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Layout>{children}</Layout>
      </Provider>
    </>
  );
};

export default LayoutWrapper;
