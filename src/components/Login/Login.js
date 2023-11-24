import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React from "react";

function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log("data :>> ", data);
    localStorage.setItem("username", data.name);
    localStorage.setItem("password", data.password);
    router.push("/movies");
  };

  // const userName = localStorage.getItem("name");
  // if (userName) {
  //   alert(`Hello, ${userName}. Logged in successfully!`);
  // }

  return (
    <form class="space-y-6" onSubmit={handleSubmit(handleLogin)}>
      <div>
        <label class="text-sm font-medium leading-6 text-grayTextColor">Full Name</label>
        <div class="mt-2">
          <input
            className="min-w-[500px] rounded-3xl pl-5 py-2.5 bg-inputBackgroundColor text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-lightGrayTextColor focus-visible:outline-none sm:text-sm sm:leading-6 dark:bg-darkModaSecondColor dark:text-white"
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z]{3,20}$/,
                message:
                  "Name must be at least 3 characters and at most 20 characters long, and it should consist only of letters",
              },
            })}
          />
        </div>
        {errors.name ? <p className="max-w-[400px] text-rose-600 text-sm mt-1">{errors.name.message}</p> : null}
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label class="text-sm font-medium leading-6 text-grayTextColor">Password</label>
        </div>
        <div class="mt-2">
          <input
            class="block min-w-[500px] rounded-3xl pl-5  py-2.5 bg-inputBackgroundColor text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:lightGrayTextColor0 focus-visible:outline-none sm:text-sm sm:leading-6 dark:bg-darkModaSecondColor dark:text-white"
            type="password"
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
        </div>
        {errors.password ? <p className="max-w-[400px] text-rose-600 text-sm mt-1">{errors.password.message}</p> : null}
        <div class="text-sm mt-4 flex justify-end">
          <a href="#" class="font-semibold text-pinkColor hover:text-pink-400">
            Forgot password
          </a>
        </div>
      </div>

  
        <button
          type="submit"
          class="flex min-w-[500px] justify-center rounded-3xl bg-pinkColor py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </button>
     

      <p class="mt-10 text-center text-sm text-lightGrayTextColor">
        Don't have an account?
        <a href="#" class="font-semibold leading-6 text-pinkColor hover:text-pink-400 ml-1">
          Register
        </a>
      </p>
    </form>
  );
}

export default Login;
