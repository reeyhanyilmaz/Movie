"use client";
import Image from "next/image";
import React from "react";
import Login from "@/components/Login/Login";

export default function Home() {
  return (
    <main className="flex min-h-screen dark:bg-darkModaFirstColor">
      <Image className="dark:hidden" src="/login/light_mode_login.svg" alt="login" width={700} height={300} />
      {/* <Image className="dark:block" src="/login/dark_mode_login.svg" alt="login" width={700} height={300} /> */}
      <div class="w-1/2 space-y-6 p-14 flex flex-col items-center">
        <Image className="mb-[10px] dark:hidden" src="light_mode_CineMax.svg" alt="logo" width={87} height={28} />
        {/* <Image className="mb-[10px] dark:block" src="dark_mode_CineMax.svg" alt="logo" width={87} height={28} /> */}

        <p className="font-bold text-center text-2xl dark:text-white">
          Hey there, <br />
          welcome back
        </p>
        <div className="flex items-center justify-center min-w-[500px] pl-5 py-2.5 text-base font-semibold bg-inputBackgroundColor h-14 border-1 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none dark:bg-darkModaSecondColor dark:text-white">
          <Image className="mr-4" src="/login/google.svg" width={24} height={24} />
          Login with Google
        </div>
        <div className="flex items-center justify-center min-w-[500px] pl-5 py-2.5 text-base  font-semibold bg-inputBackgroundColor h-14 border-1 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none dark:bg-darkModaSecondColor dark:text-white">
          <Image className="mr-4" src="/login/facebook.svg" width={24} height={24} />
          Login with Facebook
        </div>
        <div className="flex items-center">
          <div className="w-[190px] bg-ligthModeBorderColor h-0.5"></div>
          <p className="text-sm text-grayTextColor font-medium mx-4">Or login with</p>
          <div className="w-[190px] bg-ligthModeBorderColor h-0.5"></div>
        </div>
        <Login />
      </div>
    </main>
  );
}
