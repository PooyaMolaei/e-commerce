import { useRouter } from "next/router";
import CartItem from "./cartItem";
import { cartActions, type Product } from "@/store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import PRODUCTS from "@/app/market/products";

interface CartType {
  products: Product[];
  totalAmount: number;
  quantity: number;
  isShown: boolean;
}

const Cart: React.FC = () => {
  const cart: CartType = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(cartActions.showSlide());
  };

  const marketProducts = PRODUCTS().map((product) => {
    return product.id;
  });
  const isCartEmpty = cart.products.length === 0;
  return (
    <>
      {cart.isShown && (
        <>
          <div
            onClick={closeHandler}
            className="w-full h-screen fixed z-30 bg-black/30"
          ></div>
          <div className="fixed top-16 overflow-auto left-0 z-40 p-4 shadow-lg bg-white w-80 dark:bg-gray-800">
            <div className="mb-12 w-full flex-col">
              <div className="overscroll-auto">
                <div className="text-align t-10 left-4 mx-auto flex">
                  <h1 className="mx-auto mt-3 text-2xl">Your Cart</h1>
                </div>
                <button
                  type="button"
                  onClick={closeHandler}
                  data-drawer-hide="drawer-navigation"
                  aria-controls="drawer-navigation"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>
                <div className="">
                  {isCartEmpty ? (
                    <div className="w-full h-full items-center bg-blue-400 rounded-lg shadow shadow-gray-400">
                      <p className="text-center text-2xl my-4">
                        Your cart is empty.
                      </p>{" "}
                      <p className="text-center">
                        Add items to your cart from the market.
                      </p>
                    </div>
                  ) : (
                    <div>
                      {cart.products.map(
                        (product) =>
                          product.id in marketProducts && (
                            <CartItem key={product.id} {...product} />
                          )
                      )}
                    </div>
                  )}
                </div>
                <div className="w-full h-10 rounded-lg bg-blue-400">
                  <p>Total Amount: ${cart.totalAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
