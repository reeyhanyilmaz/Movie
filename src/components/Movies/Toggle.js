import React from "react";
import { useTheme } from "next-themes";

function Toggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center justify-center ml-2">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" className="sr-only" id="toggle" checked={!isDarkMode} onChange={toggleTheme} />
          <div className={`block ${isDarkMode ? " bg-pinkColor" : "bg-ligthModeBorderColor"} w-11 h-6 rounded-full`}></div>
          <div className="dot absolute right-1 top-1 bg-white w-4 h-4 rounded-full transition transform-x-0"></div>
        </div>
      </label>

      <style jsx>{`
        #toggle:checked ~ .dot {
          background-color: #78828a;
          transform: translateX(-105%);
        }
      `}</style>
    </div>
  );
}

export default Toggle;
