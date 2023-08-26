import { ReactNode, useEffect } from "react";
import Cart from "./cart/cart";
import Footer from "./footer";
import Navbar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "@/store/auth-slice";
import { RootState } from "@/store/rootReducer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.login.login);
  useEffect(() => {
    if (localStorage.getItem("isUserLogin") && !isLogin) {
      dispatch(authActions.login());
    }
  },[]);
  return (
    <>
      <Navbar />
      <Cart />
      {children}
      <Footer />
    </>
  );
};
export default Layout;