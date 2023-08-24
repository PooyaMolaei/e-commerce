import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import PRODUCTS from "@/app/market/products";
import { cartActions } from "@/store/cart-slice";



const CartItem: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const handleIncrement = (product:any) => {
    dispatch(cartActions.increment(product));
  };

  const handleDecrement = (product:any) => {
    dispatch(cartActions.decrement(product.id));
  };
  const selectedProduct: number[] | undefined = cart.products.map((item) => {
    return item.id;
  });

  return (
    <div className="my-2 flex flex-col content-center place-self-center rounded-md border p-3 shadow shadow-black dark:border-white">
      {PRODUCTS().map((product) => {
        if (selectedProduct?.map((productId) => productId === product.id)) {
          return (
            <div className="mb-3 flex flex-col text-left" key={product.id}>
              <div className="mx-auto h-24">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
              </div>

              <div className="mb-3">
                <p>
                  <b>{product.title}</b>
                </p>
                <p className="text-sm">Price: ${product.price}</p>
                <p className="text-xs">
                  Total Item Amount: ${cart.totalAmount}
                </p>{" "}
              </div>
              <div className="mx-auto flex  w-2/3 rounded-lg bg-gray-900 text-white shadow-sm dark:bg-white dark:text-gray-900">
                <button className="px-1.5" onClick={handleDecrement}>
                  {" "}
                  -{" "}
                </button>
                110
                <button className="px-1.5" onClick={handleIncrement}>
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItem;
