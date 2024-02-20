"use client"

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import miwa from "@/assets/actress/miwa.jpg";
import milet from "@/assets/actress/milet.jpg";
import aimer from "@/assets/actress/aimer.jpg";
import lisa from "@/assets/actress/lisa.jpg";
import yui from "@/assets/actress/yui.jpg";
import radwimps from "@/assets/actress/radwimps.jpg";
import kanaboon from "@/assets/actress/kanaboon.jpg";
import okrock from "@/assets/actress/okrock.jpg";
import asiankungfu from "@/assets/actress/asiankungfu.jpg";
import kenshi from "@/assets/actress/kenshi.jpg";
import doinfinity from "@/assets/actress/doinfinity.jpg";

const MusicList = () => {
    let scrl = useRef(null);
  const shiftN = 230;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

    const musicData = [
        {
            id: 1,
            title: "mix miwa",
            artist: "miwa",
            description: "change, don't cry anymore, hikarie and many more",
            image: miwa
        },
        {
            id: 2,
            title: "mix milet",
            artist: "milet",
            description: "inside you, us, fly high and many more",
            image: milet
        },
        {
            id: 3,
            title: "mix aimer",
            artist: "aimer",
            description: "black bird, stand alone, stars in the rain and many more",
            image: aimer
        },
        {
            id: 4,
            title: "mix lisa",
            artist: "lisa",
            description: "gurenge and many more",
            image: lisa
        },
        {
            id: 5,
            title: "do as infinity",
            artist: "do as infinity",
            description: "change, don't cry anymore, hikarie and many more",
            image: doinfinity
        },
        {
            id: 6,
            title: "mix radwimps",
            artist: "radwimps",
            description: "change, don't cry anymore, hikarie and many more",
            image: radwimps
        },
        {
            id: 7,
            title: "mix kana boon",
            artist: "kana boon",
            description: "change, don't cry anymore, hikarie and many more",
            image: kanaboon
        },
        {
            id: 8,
            title: "mix one ok rock",
            artist: "one ok rock",
            description: "change, don't cry anymore, hikarie and many more",
            image: okrock
        },
        {
            id: 9,
            title: "mix asian kungfu generation",
            artist: "asian kungfu generation",
            description: "change, don't cry anymore, hikarie and many more",
            image: asiankungfu
        },
        {
            id: 10,
            title: "mix yui",
            artist: "yui",
            description: "change, don't cry anymore, hikarie and many more",
            image: yui
        },
        {
            id: 11,
            title: "mix kenshi yonezu",
            artist: "kenshi yonezu",
            description: "change, don't cry anymore, hikarie and many more",
            image: kenshi
        }
    ]

  return (
    <>
        <div className="flex w-full mt-0 md:mt-0 py-6 px-5 bg-[#0a1016]">
        <div className="flex flex-col space-y-3 w-full">
          <div className="flex flex-row justify-between  items-center">
            <Link href={"/musics"} className="flex items-end space-x-2 group cursor-pointer text-white hover:text-[#0c9bff]"> 
              <div className="flex">
              <p className=" text-lg font-bold md:text-2xl lg:text-2xl">
              Musics
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
              <span className="text-[16px] font-semibold capitalize">see all</span>
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
            
            <div className="flex space-x-0">
              <div
                onClick={() => slide(-shiftN)}
                className={`p-1 text-white  ${
                  scrollX !== 0
                    ? "bg-white2 cursor-pointer"
                    : "bg-white2 opacity-50 cursor-default"
                } shadow-menu`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={5}
                    stroke="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
              <div
                onClick={() => slide(+shiftN)}
                className={`p-1 text-white  ${
                  !scrolEnd
                    ? "bg-white2 cursor-pointer"
                    : "bg-white2 opacity-50 cursor-default"
                }`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={5}
                    stroke="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-row w-12/12 justify-between items-center">
            <div
              className="mb-[1em] py-6 px-4 flex flex-row overflow-x-auto scroll-smooth no-scrollbar"
              ref={scrl}
              onScroll={scrollCheck}
            >
              {musicData.map((data, index) => {
                return (
                  <div
                  className="transition-all duration-150 flex mr-[1em] mb-[1em] hover:scale-110"
                  key={index}
                >
                  <div className="flex w-[160px] md:w-[230px] ">
                    <div className="rounded bg-transparent border border-gray-800 hover:border-[#00dc89] group flex flex-col overflow-hidden  transition duration-500 ease-in-out">
                      <Link href="/musics/angora" className="relative w-[200px] h-[140px] md:w-[250px] md:h-[250px]">
                        <Image
                          src={data.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />{" "}
                        <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                      </Link>{" "}
                      <div className="px-3 py-2 flex flex-col leading-tight2">
                        <div className="w-[197px]">
                          <h3 className="my-[0.25em] mx-[0em] md:text-lg text-white leading-tight md:leading-tight font-semibold capitalize max-w-[85%] lg:max-w-[85%] line-clamp-1">
                            <Link href="/musics/one">{data.title}</Link>
                          </h3>{" "}
                        </div>
                        <div className="font-mabry text-sm capitalize text-white leading-tight">
                          {data.artist}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MusicList