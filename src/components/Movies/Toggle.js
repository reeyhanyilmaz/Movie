import React, { useState, useEffect } from "react";
import { toggleTheme, setInitialTheme } from "../../utils/theme";

function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setInitialTheme(); // tema kayıtlımı kontrol eder
    setIsDarkMode(document.documentElement.classList.contains("light"));
  }, []);

  const toggleHandler = () => {
    const newTheme = isDarkMode ? "dark" : "light";
    toggleTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center justify-center ml-2">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" className="sr-only" id="toggle" checked={isDarkMode} onChange={toggleHandler} />
          <div className={`block ${isDarkMode ? " bg-ligthModeBorderColor" : "bg-pinkColor"} w-11 h-6 rounded-full`}></div>
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
