"use client";

import React, { useState, useRef, useEffect } from "react";

const options = [
  "All",
"Alternative Dance",
"Alternative Rock",
"Art Pop",
"Black Metal",
"Dance",
"Death Metal",
"Garage Rock",
"Hardcore Punk",
"Hip Hop",
"Indie Pop",
"Indie Rock",
"Metal",
"Pop",
"Pop Punk",
"Pop Rap",
"Post-Punk",
"Psychedelia",
"Psychedelic Rock",
"Punk",
"Rock",
"Singer-Songwriter",
"Trap",
"UK Hip Hop",

];

const SortGenreMusic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  let autoRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!autoRef.current.contains(e.target)) {
        setIsOpen(false);
        console.log(autoRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className={`flex pr-2 pb-2 ${isOpen ? 'z-30' : 'z-20'}`}>
        <div
          className={`relative flex items-center justify-between px-0 border border-[#cccdce] ${
            isOpen
              ? "bg-white text-black"
              : "bg-transparent text-[#ddd] hover:bg-[#31363b]"
          }  rounded min-w-40 h-9 cursor-pointer`}
          ref={autoRef}
          onClick={toggling}
        >
          <button className="text-[13px]  font-bold uppercase pl-2 px-2 tracking-wide">
            {selectedOption || "All"}
          </button>
          <span className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className={`w-4 h-4 ${
                isOpen ? "rotate-180 text-black" : "text-[#ddd]"
              } `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          {isOpen && (
            <div className="min-w-40 absolute top-6 py-2 right-0 z-30 mt-4 origin-top-right rounded  bg-[#474645] h-[400px] overflow-y-auto">
              {options.map((option, index) => (
                <div className="px-0" key={index}>
                  <button
                    // type="button"
                    onClick={onOptionClicked(option)}
                    className="flex py-1.5 px-3 w-full uppercase font-semibold text-[13px] text-[#d8d9d9] no-underline hover:bg-[#65686a] hover:text-white"
                  >
                    <span className="">{option}</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SortGenreMusic;
