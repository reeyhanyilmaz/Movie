"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

function Login() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log("data :>> ", data);
    localStorage.setItem("username", data.name);
    localStorage.setItem("password", data.password);
    router.push("/movies");
  };

  // password visibleity
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
      <div>
        <label className="text-sm font-medium leading-6 text-grayTextColor">Full Name</label>
        <div className="mt-2">
          <input
            className="min-w-[500px] rounded-3xl pl-5 py-2.5 bg-inputBackgroundColor text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-lightGrayTextColor focus-visible:outline-none sm:text-sm sm:leading-6 dark:bg-darkModaSecondColor dark:text-white"
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-ZıİğĞüÜşŞöÖçÇ\s]{3,20}$/,
                message:
                  "Name must be at least 3 characters and at most 20 characters long, and it should consist only of letters",
              },
            })}
          />
        </div>
        {errors.name ? <p className="max-w-[400px] text-rose-600 text-sm mt-1">{errors.name.message}</p> : null}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium leading-6 text-grayTextColor">Password</label>
        </div>
        <div className="mt-2 relative">
          <input
            className="block flex-grow relative min-w-[500px] rounded-3xl pl-5  py-2.5 bg-inputBackgroundColor text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:lightGrayTextColor0 focus-visible:outline-none sm:text-sm sm:leading-6 dark:bg-darkModaSecondColor dark:text-white dark:border-[#29282F]"
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[0-9]).{4,8}/,
                message:
                  "Password must be at least 4 characters and at most 8 characters long, and it should consist only of numbers",
              },
            })}
          />
          {theme === "dark" && (
            <button className="absolute right-6 bottom-3" type="button" onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <Image src="/login/eye.svg" width={18} height={18} alt="open_eye_icon" />
              ) : (
                <Image src="/login/close_eye_icon.svg" width={18} height={18} alt="close_eye_icon" />
              )}
            </button>
          )}
        </div>
        {errors.password ? <p className="max-w-[400px] text-rose-600 text-sm mt-1">{errors.password.message}</p> : null}
        <div className="text-sm mt-4 flex justify-end">
          <a href="#" className="font-semibold text-pinkColor hover:text-pink-400">
            Forgot password
          </a>
        </div>
      </div>

      <button
        type="submit"
        className="flex min-w-[500px] justify-center rounded-3xl bg-pinkColor py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border dark:border-[#29282F]"
      >
        Login
      </button>

      <p className="mt-10 text-center text-sm text-lightGrayTextColor">
        Don't have an account?
        <a href="#" className="font-semibold leading-6 text-pinkColor hover:text-pink-400 ml-1">
          Register
        </a>
      </p>
    </form>
  );
}

export default Login;
