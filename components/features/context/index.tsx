import { createContext, useState } from "react";
import { PRODUCTS } from "../product-list/index";

// Define the type for the context value
export type ShopContextValue = {
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (itmId:number,newAmount:number) => void;
  getTotalCartAmount: any
};

const shopContext = createContext<ShopContextValue | undefined>(undefined);

const getCart = () => {
  let cart: { [key: number]: number } = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

interface Props {
  children: React.ReactNode; // Define the children prop explicitly
}

const ShopContextProvider: React.FC<Props> = (props) => {
  const [cartItems, setCartItems] = useState(getCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (itemId:number, newAmount:number) => {
    setCartItems((prev)=>({...prev,[itemId]: newAmount}))
  }

  const contextValue: ShopContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export { shopContext, ShopContextProvider };