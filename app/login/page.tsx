"use client";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/auth-slice";

type formInput = {
  email: string;
  password: string;
};

type userData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const LogIn = () => {
  const dispatch = useDispatch();
  const [inputEmail,setInputEmail] = useState("")
  const [inputPwd,setInputPwd] = useState("")
  const [parsedUser, setParsedUser] = useState<userData | null>();
  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (user) {
      setParsedUser(JSON.parse(user));
    }
    return;
  }, []);
  const userEmail = parsedUser ? parsedUser.email : "";
  const userPassword = parsedUser ? parsedUser.password : "";
  const formSchema: ZodType<formInput> = z
    .object({
      email: z.string().email(),
      password: z.string().min(5).max(20),
    })
    .refine(
      (input) => input.email !== userEmail || input.password !== userPassword,
      {
        message: "email or password incorrect",
        path: ["email"],
      }
    );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formInput>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();
  const submit = () => {
    dispatch(authActions.login());
    router.push("/user-profile");
  };

  return (
    <section className="w-full h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="block max-w-sm mx-auto rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-2">
            <h1 className="text-center text-xl">Log In</h1>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                {...register("email")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="johndoe@email.com"
                required
              />
              {errors.email && (
                <span className="text-xs  text-red-900">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                {...register("password")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              {errors.password && (
                <span className="text-xs  text-red-900">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default LogIn;
