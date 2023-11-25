"use client";
import Image from "next/image";
import React from "react";
import Login from "@/components/Login/Login";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex h-screen dark:bg-darkModaFirstColor">
      <div className="w-1/2">
        <Image
          src={theme === "dark" ? "/login/dark_mode_login.svg" : "/login/light_mode_login.svg"}
          width="570"
          height="200"
          priority="low"
          alt="login_image"
        />
      </div>
      <div className="w-1/2 space-y-6 py-14 flex flex-col items-center justify-center">
        <Image
          className="mb-[10px]"
          src={theme === "dark" ? "/dark_mode_CineMax.svg" : "/light_mode_CineMax.svg"}
          width={87}
          height={28}
          alt="logo"
        />
        <p className="font-bold text-center text-2xl dark:text-white">
          Hey there, <br />
          welcome back
        </p>
        <div className="flex items-center justify-center min-w-[500px] pl-5 py-2.5 text-base font-semibold bg-inputBackgroundColor h-14 border-1 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none dark:bg-darkModaSecondColor dark:text-white">
          <Image className="mr-4" src="/login/google.svg" width={24} height={24} alt="social_logo_google" />
          Login with Google
        </div>
        <div className="flex items-center justify-center min-w-[500px] pl-5 py-2.5 text-base  font-semibold bg-inputBackgroundColor h-14 border-1 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none dark:bg-darkModaSecondColor dark:text-white">
          <Image className="mr-4" src="/login/facebook.svg" width={24} height={24} alt="social_logo_facebook" />
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
