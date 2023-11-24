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

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
        <label class="block text-sm font-medium leading-6 text-greyTextColor">Full Name</label>
        <div class="mt-2">
          <input
            className="block min-w-[500px] rounded-3xl pl-5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-ligthtGrayTextColor focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            placeholder="Enter your name"
            onChange={handleInputChange}
            {...register("name", {
              required: "This field is required",
              pattern: {
                value: /^[A-Za-z]{3,20}$/,
                message:
                  "Name must be at least 3 characters and at most 20 characters long, and it should consist only of letters",
              },
            })}
          />
        </div>
        {errors.name ? <p className="max-w-[400px] text-rose-600">{errors.name.message}</p> : null}
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label class="block text-sm font-medium leading-6 text-greyTextColor">Password</label>
        </div>
        <div class="mt-2">
          <input
            class="block min-w-[500px] rounded-3xl pl-5  py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:ligthtGrayTextColor0 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="password"
            placeholder="Enter your password"
            onChange={handlePasswordChange}
            {...register("password", {
              required: "This field is required",
              pattern: {
                value: /^(?=.*[0-9]).{4,8}/,
                message:
                  "Password must be at least 4 characters and at most 8 characters long, and it should consist only of numbers",
              },
            })}
          />
        </div>
        {errors.password ? <p className="max-w-[400px] text-rose-600">{errors.password.message}</p> : null}
        <div class="text-sm mt-4">
          <a href="#" class="font-semibold text-pinkColor hover:text-pink-400">
            Forgot password
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex min-w-[500px] justify-center rounded-3xl bg-pinkColor py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </button>
      </div>

      <p class="mt-10 text-center text-sm text-ligthtGrayTextColor">
        Don't have an account?
        <a href="#" class="font-semibold leading-6 text-pinkColor hover:text-pink-400">
          Register
        </a>
      </p>
    </form>
  );
}

export default Login;