"use client";
import PRODUCTS from "./products";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/store/cart-slice";
import { RootState } from "@/store/rootReducer";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const truncateDescription = (description: string, maxLength: number) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.slice(0, maxLength) + "...";
};

const Market = () => {
  const products = PRODUCTS();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <>
      <section className="w-full h-full">
        <div>
          <h1 className="text-center text-xl my-4 md:my-6 lg:my-8">Market</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 md:mx-6 lg:mx-8">
          {products.map((product: Product) => {
            const cartProduct = cart.products.find((p) => p.id === product.id);
            const cartQuantity = cartProduct ? cartProduct.quantity || 0 : 0;
            return (
              <div key={product.id} className="p-5 bg-white rounded-md">
                <div className="flex flex-col items-center justify-items-center h-72">
                  <div className="justify-content my-auto">
                    <div className="flex flex-col w-full h-auto items-center">
                      <Image
                        className="w-auto h-auto max-h-24"
                        height={100}
                        width={100}
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                  </div>
                  <div className="mt-auto mb-1 w-full">
                    <p className="text-sm my-1 text-left">
                      Name: {truncateDescription(product.title, 25)}
                    </p>

                    <p className="text-xs my-1 text-left">
                      Dec: {truncateDescription(product.description, 25)}
                    </p>

                    <p className="text-sm my-1 text-left">
                      Price: ${product.price}
                    </p>
                  </div>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
                    type="button"
                    onClick={() => dispatch(cartActions.increment(product))}
                  >
                    Add to cart
                    {cartQuantity > 0 ? <p className="inline">({cartQuantity})</p> : <p></p>}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Market;
