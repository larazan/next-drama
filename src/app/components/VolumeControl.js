"use client"

import React, { useState, useRef, useEffect } from "react";
import Transition from "@/app/utils/Transition";

const VolumeControl = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });


  return (
    <>
        <div className="relative inline-flex ml-3 md:hidden">
        <button
          ref={trigger}
          // className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`}
          aria-haspopup="true"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
        >
          <span className="uppercase md:tracking-widest font-semibold text-xs">
            <svg
              className="fill-current "
              role="img"
              height="18"
              width="18"
              viewBox="0 0 16 16"
            >
              <path d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"></path>
            </svg>
          </span>
        </button>

        <Transition
          className="bg-[#162c41] origin-top-right z-20 absolute top-full right-0 -mr-1 md:-mr-2 sm:mr-0 w-8 h-32 md:w-36  border border-slate-400 py-1.5 rounded shadow-lg overflow-hidden mt-1"
          show={dropdownOpen}
          enter="transition ease-out duration-200 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          <div
            ref={dropdown}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            <div className="flex flex-col justify-center items-center space-y-1">
              <div className="bg-gray-300 border border-gray-300 rounded-full w-1.5 h-24 "></div>

              <svg
                className="fill-current "
                role="img"
                height="16"
                width="16"
                viewBox="0 0 16 16"
              >
                <path d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"></path>
              </svg>
            </div>
          </div>
        </Transition>
      </div>
    </>
  )
}

export default VolumeControl