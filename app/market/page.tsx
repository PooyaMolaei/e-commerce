"use client";
import PRODUCTS from "./products";
import Image from "next/image";

const truncateDescription = (description: string, maxLength: number) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.slice(0, maxLength) + "...";
};

const Market = () => {
  const products = PRODUCTS();
  return (
    <>
      <section className="w-full h-full">
        <div>
          <h1 className="text-center text-xl my-4 md:my-6 lg:my-8">Market</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 md:mx-6 lg:mx-8">
          {products.map((product) => (
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
                  className="p-1 text-sm rounded-md border border-black hover:text-white hover:bg-gray-900 dark:border-white dark:hover:text-white dark:hover:bg-white"
                  type="button"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Market;
