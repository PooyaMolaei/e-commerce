import { useContext } from "react";
import { useRouter } from "next/router";
import CartItem from "./components/cartItem";
import PRODUCTS from "@/app/market/products";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer"

const Cart: React.FC = () => {
  

  return (
    <>
    {/* <div className="fixed top-16 h-full left-0 z-40  p-4 shadow-lg bg-white w-80 dark:bg-gray-800"></div>
          <div className="my-12 h-full w-full flex-col">
            <div className="">
              <div className="text-align t-10 left-4 mx-auto my-6 mt-14 flex">
                <h1 className="mx-auto mt-3 text-2xl">Your Cart</h1>
              </div>
              <div className="mx-5 mb-10 grid grid-cols-2 place-items-center gap-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-3">
                {PRODUCTS().map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} key={product.id} />;
                  }
                  return null;
                })}
              </div>
            </div>
            {totalAmount > 0 ? (
              <div className="relative text-center">
                <p>Total: ${totalAmount}</p>
                <div className="my-4 flex flex-col">
                  <button
                    className="md:text-md mx-auto my-2 w-1/4 rounded-lg border border-white p-1.5 text-sm hover:bg-white hover:text-gray-900"
                    onClick={() => router.push("/shop")}
                  >
                    Continue Shopping
                  </button>
                  <button
                    className="md:text-md mx-auto my-2 w-1/4 rounded-lg border border-white p-1.5 text-sm hover:bg-white hover:text-gray-900"
                    onClick={() => router.push("/user-profile")}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-screen">
                <h1 className="t-20 relative text-center text-2xl">
                  Your cart is empty
                </h1>
                <Link
                  className="relative mt-5 block text-center text-lg text-blue-300"
                  href={"/shop"}
                >
                  Back to shop
                </Link>
              </div>
            )}
          </div> */}
    </>
  );
};

export default Cart;