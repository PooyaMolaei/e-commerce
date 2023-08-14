import { StaticImageData } from "next/image";

export interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string | StaticImageData; 
  intro: string;
}

const randomPrice = () => Math.floor(Math.random() * 100) + 1;

const product1 = "/assets/products/product1.png";
const product2 = "/assets/products/product12.png";
const product3 = "/assets/products/product3.png";
const product4 = "/assets/products/product4.png";
const product5 = "/assets/products/product5.png";
const product6 = "/assets/products/product6.png";
const product7 = "/assets/products/product7.png";
const product8 = "/assets/products/product8.png";
const product9 = "/assets/products/product9.png";
const product10 = "/assets/products/product10.png";

export const PRODUCTS: ProductData[] = [
  {
    id: 1,
    name: "Item One",
    description: "Lorem ipsum dolor sit amet...",
    price: randomPrice(),
    image: product1,
    intro: "lorem ipsum dolor",
  },
  {
    id: 2,
    name: "Item Two",
    description: "Lorem ipsum dolor sit amet...",
    price: randomPrice(),
    image: product2,
    intro: "lorem ipsum dolor",
  },
  {
    id: 3,
    name: "Item Three",
    description: "Lorem ipsum dolor sit amet...",
    price: randomPrice(),
    image: product3,
    intro: "lorem ipsum dolor",
  },{
    id: 4,
    name: "Item Four",
    description: "Lorem ipsum dolor sit amet...",
    price: randomPrice(),
    image: product4,
    intro: "lorem ipsum dolor",
  },{
    id: 5,
    name: "Item Five",
    description: "Lorem ipsum dolor sit amet...",
    price: randomPrice(),
    image: product5,
    intro: "lorem ipsum dolor",
  },{
    id: 6,
    name: "Item Six",
    description: "Lorem ipsum dolor sit amet...",
    price: randomPrice(),
    image: product6,
    intro: "lorem ipsum dolor",
  },{
    id: 7,
    name: "Item Seven",
    description: "Lorem ipsum dolor sit amet...",
    price: randomPrice(),
    image: product7,
    intro: "lorem ipsum dolor",
  },{
    id: 8,
    name: "Item Eight",
    description: "Lorem ipsum dolor sit amet...",
    price: randomPrice(),
    image: product8,
    intro: "lorem ipsum dolor",
  },{
    id: 9,
    name: "Item Nine",
    description: "Lorem ipsum dolor sit amet...",
    price: randomPrice(),
    image: product9,
    intro: "lorem ipsum dolor",
  },{
    id: 10,
    name: "Item Ten",
    description: "Lorem ipsum dolor sit amet...",
    price: randomPrice(),
    image: product10,
    intro: "lorem ipsum dolor",
  },
];