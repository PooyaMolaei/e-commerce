import { useEffect, useState } from "react";

interface Data {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

const PRODUCTS = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const fetchedData: Data[] = await res.json();

      setData(fetchedData.slice(0, 20));
    };
    fetchData();
  }, []);

  return data;
};
export default PRODUCTS;
