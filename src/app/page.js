"use client";
import Image from "next/image";
import React from "react";
import Login from "@/components/Login/Login";

export default function Home() {
  return (
    <main className="flex max-h-screen">
      <Image className="flex-shrink-0 w-1/2" src="/light_mode_login.svg" alt="login" width={500} height={500} priority />

      <div class="space-y-6 p-24 w-1/2 flex flex-col justify-center items-center">
        <Image src="/light_mode_CineMax.svg" alt="logo" width={87} height={28} priority />
        <p className="text-bold text-center text-2xl">
          Hey there, <br />
          welcome back
        </p>
        <Login />
      </div>
    </main>
  );
}
