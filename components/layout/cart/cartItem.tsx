import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { cartActions } from "@/store/cart-slice";

type Props = {
  image: string;
  title: string;
  price: number;
  id: number;
  quantity?:number
};

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number;
}

const CartItem = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (product: Product) => {
    dispatch(cartActions.increment(product));
  };

  const handleDecrement = (product: Product) => {
    dispatch(cartActions.decrement(product.id));
  };

  return (
    <div className="my-2 flex flex-col content-center place-self-center rounded-md border p-3 shadow shadow-black dark:border-white">
      <div className="mb-3 flex flex-col text-left" key={props.id}>
        <div className="mx-auto h-24">
          <Image src={props.image} alt={props.title} width={100} height={100} />
        </div>

        <div className="mb-3">
          <p>
            <b>{props.title}</b>
          </p>
          <p className="text-sm">Price: ${props.price}</p>
          
        </div>
        <div className="mx-auto flex  w-2/3 rounded-lg bg-gray-900 text-white shadow-sm dark:bg-white dark:text-gray-900">
          <button className="px-1.5" onClick={() => handleDecrement(props)}>
            {" "}
            -{" "}
          </button>
          <p className="text-xs">Total Item Amount: ${props.price*(props.quantity || 0)}</p>{" "}
          <button className="px-1.5" onClick={() => handleIncrement(props)}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
