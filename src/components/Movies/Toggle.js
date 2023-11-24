import React, { useState } from "react";

function Toggle() {
  const [isChecked, setIsChecked] = useState(true);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-center ml-2">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" className="sr-only" id="toggle" checked={isChecked} onChange={toggleHandler} />
          <div className={`block ${!isChecked ? "bg-pinkColor" : "bg-ligthModeBorderColor"} w-11 h-6 rounded-full`}></div>
          <div className="dot absolute right-1 top-1 bg-white w-4 h-4 rounded-full transition transform"></div>
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
