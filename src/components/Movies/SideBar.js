import React from "react";
import Toggle from "@/components/Movies/Toggle";

function SideBar() {
  return (
    <div className="w-1/6 flex flex-col items-start pt-11 pl-8 min-h-screen bg-[#F9F9F9] border-r-2 border-[ligthModeBorderColor]">
      <p className="text-base">MENU</p>
      <button className="mt-6 text-base">Discovery</button>
      <button className="mt-8 text-base">Top Rated</button>
      <button className="mt-8 text-base">Coming Soon</button>
      <p className="mt-10">LIBRARY</p>
      <button className="mt-6 text-base">Recent Played</button>
      <button className="mt-8 text-base">Download</button>
      <div className="flex mt-8">
        <span className="text-base">Dark Mode</span>
        <Toggle />
      </div>

      <button className="mt-8 text-base">Settings</button>
    </div>
  );
}

export default SideBar;
