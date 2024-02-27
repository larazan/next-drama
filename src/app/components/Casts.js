import React from 'react'
import Link from "next/link";
import Image from "next/image";

import cast1 from "@/assets/actress/cast1.png";
import cast2 from "@/assets/actress/cast2.png";
import cast3 from "@/assets/actress/cast3.png";
import cast4 from "@/assets/actress/cast4.png";
import cast5 from "@/assets/actress/cast5.png";
import cast6 from "@/assets/actress/cast6.png";
import cast7 from "@/assets/actress/cast7.png";
import cast8 from "@/assets/actress/cast8.png";
import cast9 from "@/assets/actress/cast9.png";
import cast10 from "@/assets/actress/cast10.png";
import cast11 from "@/assets/actress/cast11.png";
import cast12 from "@/assets/actress/cast12.png";
import cast13 from "@/assets/actress/cast13.png";
import cast14 from "@/assets/actress/cast14.png";
import cast15 from "@/assets/actress/cast15.png";
import cast16 from "@/assets/actress/cast16.png";
import cast17 from "@/assets/actress/cast17.png";

const Casts = () => {

    const actressData = [
        {
          name: "jang hyuk jin",
          img: cast1,
        },
        {
          name: "kim ji won",
          img: cast2,
        },
        {
          name: "esom",
          img: cast3,
        },
        {
          name: "kim eui sung",
          img: cast4,
        },
        {
          name: "yoo seung mok",
          img: cast5,
        },
        {
          name: "yoon eun hye",
          img: cast6,
        },
        {
          name: "seo jeong yeon",
          img: cast7,
        },
        {
          name: "lee ho chul",
          img: cast8,
        },
        {
          name: "gong yoo",
          img: cast9,
        },
        {
          name: "park shin hye",
          img: cast10,
        },
        {
          name: "lee yo joon",
          img: cast11,
        },
        {
          name: "park gyu young",
          img: cast12,
        },
        {
          name: "lee je hoon",
          img: cast13,
        },
        {
          name: "pyo ye jin",
          img: cast14,
        },
        {
          name: "bae suzy",
          img: cast15,
        },
        {
          name: "bae yoo ram",
          img: cast16,
        },
        {
          name: "yeonwoo",
          img: cast17,
        },
      ];

  return (
    <>
        <div className="flex w-full py-6 px-5 bg-[#0a1016]">
        <div className="flex flex-col space-y-3 w-full">
          <div className="flex flex-row justify-between px-4 items-center">
            <Link href={"/celebs"} className="flex items-end space-x-2 group cursor-pointer text-white hover:text-[#0c9bff]">
              <div className="flex">
                <p className=" text-lg font-bold md:text-2xl lg:text-2xl">
                  Casts
                </p>
                <div className="pl-1 items-end pb-1.5 flex group-hover:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={6}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="hidden  group-hover:flex group-hover:transition group-hover:duration-700 group-hover:ease-in-out items-center space-x-0.5">
                <span className="text-[16px] font-semibold capitalize">
                  see all
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={6}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>

          </div>

          <div className="relative flex flex-row w-12/12 justify-between items-center">
            <div
              className="mb-[1em] py-4 px-4 grid grid-cols-3 md:grid-cols-5 gap-3"
             
            >
              {actressData.map((data, index) => (
                  <div
                    className="transition-all duration-150 flex mr-[1em] mb-[1em] hover:scale-110"
                    key={index}
                  >
                    <div className="flex w-[90px] md:w-[140px] ">
                      <div className="rounded bg-transparent  group flex flex-col overflow-hidden  transition duration-500 ease-in-out">
                        <Link href="/person" className="relative">
                          <Image
                            src={data.img}
                            alt=""
                            className="w-[138px] object-cover rounded-full border-2 border-[#0c9bff]"
                          />{" "}
                          <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                        </Link>{" "}
                        <div className="px-3 py-2 flex flex-col justify-center text-center leading-tight">
                          <h3 className="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm md:text-md text-white leading-tight md:leading-tight font-semibold capitalize">
                            <Link href="/actress/kim-ji-won">{data.name}</Link>
                          </h3>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Casts