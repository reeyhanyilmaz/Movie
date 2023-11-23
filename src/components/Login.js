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
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleLogin)}>
        <input
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
        {errors.name ? <p className="max-w-[400px] text-rose-600">{errors.name.message}</p> : null}
        <input
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
        {errors.password ? <p className="max-w-[400px] text-rose-600">{errors.password.message}</p> : null}
        <button className="bg-pink-500" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
