"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type userData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const User = () => {
  const [parsedUser, setParsedUser] = useState<userData | null>();
  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (user) {
      setParsedUser(JSON.parse(user));
    }
    return;
  }, []);

  return (
    <>
      <section className="flex flex-col sp mx-2 h-screen lg:h-full justify-between">
        <h1 className="text-center p-5 text-2xl">My Profile</h1>
        <div className="flex content-center justify-center">
          <Image
            className="rounded-full"
            height={200}
            width={200}
            src="/assets/images/userLogo.png"
            alt="pgoto"
          />
        </div>
        <div className="flex flex-col text-center ">
          <h2 className="text-2xl my-5">{parsedUser?.name}</h2>
          <h3 className="text-xl my-5">{parsedUser?.email}</h3>
        </div>
        <div className="flex gap-4 mb-20 justify-center">
          <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="/market">Go to Market</Link>
          <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="#">Check out</Link>
        </div>
      </section>
    </>
  );
};

export default User;
