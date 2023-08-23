import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import PRODUCTS from "@/app/market/products";
import { cartActions } from "@/store/products-slice";


const CartItem = () => {
  const totalAmount = useSelector((state:RootState)=>state.cart.totalAmount)
  const dispatch = useDispatch()
  return (
    <div className="my-2 flex flex-col content-center place-self-center rounded-md border p-3 shadow shadow-black dark:border-white">
        {/* {PRODUCTS().map((product)=>(
      <div className="mb-3 flex flex-col text-left" key={product.id}>
        <div className="mx-auto h-24" >
          <Image src={product.image} alt={product.title} width={100} height={100} />
        </div>

        <div className="mb-3">
          <p>
            <b>{product.title}</b>
          </p>
          <p className="text-sm">Price: ${product.price}</p>
          <p className="text-xs">Total Item Amount: ${totalAmount}</p>{" "}
        </div>
        <div className="mx-auto flex  w-2/3 rounded-lg bg-gray-900 text-white shadow-sm dark:bg-white dark:text-gray-900">
          <button className="px-1.5" onClick={()=>dispatch(cartActions.decreament(product.id))}>
            {" "}
            -{" "}
          </button>
          <input
            className="w-full bg-gray-200 text-center text-black [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            value={inputValue}
            onChange={handleItemCountChange}
            onBlur={handleUpdateItemCount}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleUpdateItemCount();
              }
            }}
          />
          <button className="px-1.5" onClick={()=>dispatch(cartActions.increament(product))}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>))} */}
    </div>
  );
};

export default CartItem;
