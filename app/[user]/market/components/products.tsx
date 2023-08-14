import Image from "next/image";
import React, { useContext } from "react";
import { shopContext, ShopContextValue } from "@/components/features/context/index";

interface ProductProps {
  data: {
    id: number;
    image: string;
    intro: string;
    name: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = (props) => {
  const { id, image, intro, name, price } = props.data;

  const shopCtx = useContext(shopContext) as ShopContextValue;
  const { addToCart, cartItems } = shopCtx;

  const cartItemQuantity = cartItems[id];

  return (
    <div className="mx-auto my-2 flex w-fit flex-col content-center rounded-md  border border-gray-200 p-3 shadow">
      <div className="mb-3 flex w-fit flex-col text-left">
        <div className="mx-auto h-24">
          <Image width={100} height={100} src={image} alt={name} />
        </div>
        <div className="">
          <p className="">
            <b>{name}</b>
          </p>
          <p className="text-sm">price: ${price}</p>
          <p className="text-xs">description: {intro}</p>
        </div>
      </div>
      <button className="mt-auto rounded-md border border-black hover:text-gray-900   dark:border-white dark:hover:bg-white" onClick={() => addToCart(id)} type="button">
        Add to cart {cartItemQuantity > 0 && <>({cartItemQuantity})</>}
      </button>
    </div>
  );
};

export default Product;
