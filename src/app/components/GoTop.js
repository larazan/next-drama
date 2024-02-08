'use client'

import React, { useEffect, useState } from "react";

 const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className="fixed flex justify-center mx-auto w-full top-3 z-40 cursor-pointer">
        {isVisible && (
          <div
            onClick={scrollToTop}
            className="fixed flex space-x-2 px-3 py-1 lg:px-4 lg:py-4 items-center text-black rounded-full bg-[#00dc89] top-20 hover:bg-white hover:border-[#404040] hover:text-black lg:top-20 lg:right-5 cursor-pointer border border-[#00dc89]"
          >
            <div className="font-semibold text-sm">Scroll to top</div>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M8 7l4-4m0 0l4 4m-4-4v18"
              />
            </svg> */}
          </div>
        )}
      </div>
    </>
  );
};

export default GoTop