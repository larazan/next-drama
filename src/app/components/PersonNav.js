"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'


const PersonNav = () => {
  const pathname = usePathname()
 
  return (
    <>
      <div className="shadow-lg shadow-[#0a0a0a] bg-[#1a1a1a] sticky top-12 md:top-14 z-20 border-b-22 border-black">
        <div className="flex-nowrap mx-auto w-full md:w-full px-4">
          <ul className="flex overflow-x-auto no-scrollbar w-full items-center justify-center space-x-2 md:space-x-3 tracking-tight text-sm text-[#b6cce2] ">
            
            <li className="flex min-w-max nav-item md:-mt-px">
              <Link
                className={`flex items-center md:space-x-2 p-3 cursor-pointer ${pathname === '/person/kim-ji-won' ? 'border-[#0776df]' : 'border-[#1a1a1a]'} border-b-2`}
                href={"/person"}
              >
                <span className={`text-[15px] md:text-lg md:inline ${pathname === '/person/kim-ji-won' ? 'text-white' : 'text-[#bbbbbb] hover:text-white'}  font-semibold`}>
                  Overview
                </span>
              </Link>
            </li>
            <li className="flex min-w-max nav-item md:-mt-px">
              <Link
                className={`flex items-center md:space-x-2 p-3 cursor-pointer ${pathname === '/f1' ? 'border-[#0776df]' : 'border-[#1a1a1a]'} border-b-2`}
                href={"/f1"}
              >
                <span className="text-[15px] md:text-lg md:inline text-[#bbbbbb] hover:text-white font-semibold">
                  Related Article
                </span>
              </Link>
            </li>
            <li className="flex min-w-max nav-item md:-mt-px">
              <Link
                className={`flex items-center md:space-x-2 p-3 cursor-pointer ${pathname === '/f1' ? 'border-[#0776df]' : 'border-[#1a1a1a]'} border-b-2`}
                href={"/f1"}
              >
                <span className="text-[15px] md:text-lg md:inline text-[#bbbbbb] hover:text-white font-semibold">
                  Comments
                </span>
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default PersonNav;
