'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import cookie from "@/assets/icons/cookies.svg"

 const CookieConsent = () => {
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      {isShow ? (
        <>
        <div className="fixed left-2 bottom-0 z-50 ">
          <div className="fixed  bottom-6 md:bottom-4 left-6 py-4 px-5 rounded-lg bg-[#181a1c] w-full max-w-[calc(100%-48px)] sm:max-w-xs shadow-lg z-50 border-platinum ">
            <div className="">
              <div className="relative overflow-hidden px-1 md:px-1 pt-2 ">
                <div className="flex items-center space-x-2">
                  <Image src={cookie} alt="" className="w-8 h-8" />
                  <span className="text-md md:text-lg font-bold text-white">We use Cookies</span>
                </div> 

                <div className="pt-4 pb-4 text-sm md:text-base text-white leading-tight md:leading-snug">
                  <p className="text-sm text-brand-dark">We use cookies to improve your browsing experience and for marketing purposes.</p>
                  <button className="mt-2 block underline text-[#32e6e2] font-medium underline-offset-2 cursor-pointer hover:opacity-85" onClick={handleClick}>Read our Privacy Policy</button>
                </div>
              </div>
              <div className="flex items-center w-full space-x-2">
                <button className="flex w-full rounded py-2 bg-transparent items-center justify-center text-sm text-center border border-[#32e6e2] text-[#32e6e2] font-semibold cursor-pointer hover:opacity-85">
                  Reject All
                </button>
                <button className="flex w-full rounded py-2 bg-[#32e6e2] items-center justify-center text-sm text-center border border-[#32e6e2] text-[#181a1c] font-semibold cursor-pointer hover:opacity-85">
                  Accept All
                </button>
              </div>
            </div>

          </div>

        </div>
        {/* <div className="opacity-50 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CookieConsent