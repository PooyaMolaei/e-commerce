"use client"
import { useEffect, useState } from "react";
import Product from "./components/products";
import { PRODUCTS } from "@/components/features/product-list/index";


interface Props {
  data: {
    id: number;
  };
}

const Shop: React.FC<Props> = () => {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    setData(PRODUCTS);
  }, []);

  return (
    <>
      <div className="h-full w-full flex-col">
        <div className="text-align t-10 left-4 mx-auto mb-5 mt-14 flex">
          <h1 className="top-16 mx-auto text-center text-2xl">Food Shop</h1>
        </div>
        <div className="mx-2 mb-10 grid grid-cols-2 gap-3 md:mx-auto md:grid-cols-3 lg:grid-cols-4">
          {data?.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
