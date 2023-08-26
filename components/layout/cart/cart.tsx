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

  const marketProductsId = PRODUCTS().map((product) => {
    return product.id;
  });
  return (
    <>
      {cart.isShown && (
        <div className="fixed top-16 h-full left-0 z-40  p-4 shadow-lg bg-white w-80 dark:bg-gray-800">
          <div className="mb-12 h-full w-full flex-col">
            <div className="">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
              <div className="mx-5 mb-10 grid grid-cols-2 place-items-center gap-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-3">
                {cart.products.map(
                  (product) =>
                    product.id in marketProductsId && (
                      <CartItem key={product.id} {...product} />
                    )
                )}
              </div>
            </div>
            {/* {totalAmount > 0 ? (
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
        )} */}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
