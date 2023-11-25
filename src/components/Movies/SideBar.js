import React from "react";
import Toggle from "@/components/Movies/Toggle";
import Image from "next/image";

function SideBar() {
  return (
    <div className="w-1/6 flex flex-col items-start pt-11 pl-8 min-h-screen bg-inputBackgroundColor border-r border-ligthModeBorderColor dark:bg-darkModaSecondColor dark:border-[#29282F]">
      <p className="text-base text-lightGrayTextColor">MENU</p>
      <button className="mt-6 text-base font-semibold text-grayTextColor flex">
        <Image className="mr-3" src="/movies/discover.svg" width={24} height={24} alt="icon"/> Discovery
      </button>
      <button className="mt-8 text-base font-semibold text-blackTextColor flex dark:text-white">
        <Image className="mr-3" src="/movies/pink_star.svg" width={24} height={24} alt="icon"/> Top Rated
      </button>
      <button className="mt-8 text-base font-semibold text-grayTextColor flex">
        <Image className="mr-3" src="/movies/coming_soon.svg" width={24} height={24} alt="icon"/> Coming Soon
      </button>
      <p className="mt-10 text-lightGrayTextColor">LIBRARY</p>
      <button className="mt-6 text-base font-semibold text-grayTextColor flex">
        <Image className="mr-3" src="/movies/recent_player.svg" width={24} height={24} alt="icon"/> Recent Played
      </button>
      <button className="mt-8 text-base font-semibold  text-grayTextColor flex">
        <Image className="mr-3" src="/movies/download.svg" width={24} height={24} alt="icon"/> Download
      </button>
      <div className="mt-8 flex items-center justify-center">
        <span className="text-base font-semibold text-grayTextColor flex">
          <Image className="mr-3" src="/movies/moon.svg" width={24} height={24} alt="icon"/> Dark Mode
        </span>
        <Toggle />
      </div>

      <button className="mt-8 text-base font-semibold  text-grayTextColor flex">
        <Image className="mr-3" src="/movies/setting.svg" width={24} height={24} alt="icon"/> Settings
      </button>
    </div>
  );
}

export default SideBar;
