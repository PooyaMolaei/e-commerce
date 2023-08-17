"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Data {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

const Market = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const fetchedData: Data[] = await res.json();

      setData(fetchedData.slice(0, 20));
    };
    fetchData();
  }, []);

  return (
    <>
      this is Market
      <div className="py-10">
        {data.length > 0 ? (
          data.map((product) => (
            <div key={product.id}>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div>
                <p>name: {product.title}</p>
                <p>dec: {product.description}</p>
                <p>Price:$ {product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
export default Market;
