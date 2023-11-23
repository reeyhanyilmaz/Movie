"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("username", name);
    localStorage.setItem("password", password);
    router.push("/movie");
  };

  // const userName = localStorage.getItem("name");
  // if (userName) {
  //   alert(`Hello, ${userName}. Logged in successfully!`);
  // }

  return (
    <main className="flex min-h-screen flex-row items-center justify-evenly p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="flex flex-col gap-5">
        <input type="text" placeholder="Enter your name" value={name} onChange={handleInputChange} />
        <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
        <button className="bg-pink-500" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </main>
  );
}
