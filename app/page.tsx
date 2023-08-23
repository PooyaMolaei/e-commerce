import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
              Welcome to your E-Commerce Store
            </h1>
            <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              reiciendis ratione numquam delectus enim deleniti deserunt
              veritatis corrupti ullam soluta provident excepturi animi nisi
              dignissimos fugiat officiis saepe quidem facilis.
            </p>
            <div className="flex justify-center">
              <Link
                className="items-center mt-2 transition duration-500 ease-in-out transform bg-transparent border text-black hover:text-white border-gray-900 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
                href="/"
              >
                <span className="justify-center">Find out more</span>
              </Link>
            </div>
          </div>
          <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
            <Image
              width={200}
              height={200}
              className="w-80 md:ml-1 ml-24"
              alt="iPhone-12"
              src="/assets/images/iPhone-12-Mockup.png"
            ></Image>
          </div>
        </div>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
                Subscribe to our newsletter
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-600">
                Enter your email address and get our newsletters straight away.
              </h1>
              <input
                placeholder="johndoe@example.com"
                name="email"
                type="email"
                autoComplete="email"
                className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
              ></input>{" "}
              <Link
                className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black dark:text-white dark:hover:text-black hover:text-white border-black hover:bg-blue-800 transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
                href="/"
              >
                <span className="justify-center">Subscribe</span>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
