"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";

type formInput = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const formSchema: ZodType<formInput> = z
  .object({
    name: z.string().min(2).max(20),
    email: z.string().email(),
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formInput>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const submitForm = (data: formInput) => {
    localStorage.setItem("user", JSON.stringify(data));
    router.push("/login");
  };

  return (
    <section className="w-full h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="block max-w-sm mx-auto rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-2">
            <h1 className="text-center text-xl">Create account</h1>
          </div>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="mb-6">
              <label
                htmlFor="firstnam"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
              {errors.name && (
                <span className="text-xs  text-red-900">
                  {errors.name.message}
                </span>
              )}
            </div>
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
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="johndoe@email.com"
                required
              />
              {errors.email && (
                <span className="text-xs text-red-900">
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
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="••••••••"
                required
              />
              {errors.password && (
                <span className="text-xs text-red-900">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Repeat password
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="••••••••"
                required
              />
              {errors.confirmPassword && (
                <span className="text-xs text-red-900">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
