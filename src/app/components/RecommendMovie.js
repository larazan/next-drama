"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import movie1 from "@/assets/movies/movie1.jpg";
import movie2 from "@/assets/movies/movie2.jpg";
import movie3 from "@/assets/movies/movie3.jpg";
import movie4 from "@/assets/movies/movie4.jpg";
import movie5 from "@/assets/movies/movie5.jpg";
import movie6 from "@/assets/movies/movie6.jpg";
import movie7 from "@/assets/movies/movie7.jpg";
import movie8 from "@/assets/movies/movie8.jpg";
import movie9 from "@/assets/movies/movie9.jpg";
import movie10 from "@/assets/movies/movie10.jpg";
import movie11 from "@/assets/movies/movie11.jpg";
import movie12 from "@/assets/movies/movie12.jpg";
import movie13 from "@/assets/movies/movie13.jpg";
import movie14 from "@/assets/movies/movie14.jpg";
import movie15 from "@/assets/movies/movie15.jpg";
import movie16 from "@/assets/movies/movie16.jpg";
import movie17 from "@/assets/movies/movie17.jpg";
import movie18 from "@/assets/movies/movie18.jpg";
import movie19 from "@/assets/movies/movie19.jpg";
import movie20 from "@/assets/movies/movie20.jpg";
import movie21 from "@/assets/movies/movie21.jpg";
import movie22 from "@/assets/movies/movie22.jpg";
import movie23 from "@/assets/movies/movie23.jpg";
import movie24 from "@/assets/movies/movie24.jpg";
import movie25 from "@/assets/movies/movie25.jpg";
import movie26 from "@/assets/movies/movie26.jpg";
import movie27 from "@/assets/movies/movie27.jpg";
import movie28 from "@/assets/movies/movie28.jpg";
import movie29 from "@/assets/movies/movie29.jpg";
import movie30 from "@/assets/movies/movie30.jpg";
import movie31 from "@/assets/movies/movie31.jpg";
import movie32 from "@/assets/movies/movie32.jpg";
import movie33 from "@/assets/movies/movie33.jpg";
import movie34 from "@/assets/movies/movie34.jpg";
import movie35 from "@/assets/movies/movie35.jpg";
import movie36 from "@/assets/movies/movie36.jpg";
import movie37 from "@/assets/movies/movie37.jpg";
import movie38 from "@/assets/movies/movie38.jpg";
import movie39 from "@/assets/movies/movie39.jpg";
import movie40 from "@/assets/movies/movie40.jpg";
import movie41 from "@/assets/movies/movie41.jpg";
import movie42 from "@/assets/movies/movie42.jpg";
import movie43 from "@/assets/movies/movie43.jpg";
import movie44 from "@/assets/movies/movie44.jpg";

export default function RecommendMovie() {
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

  const movieData = [
    {
      title: "the penthouse",
      img: movie21,
      year: 2020,
    },
    {
      title: "long time no sex",
      img: movie22,
      year: 2020,
    },
    {
      title: "a shop for killer",
      img: movie23,
      year: 2020,
    },
    {
      title: "marry my husband",
      img: movie24,
      year: 2020,
    },
    {
      title: "taxi driver",
      img: movie25,
      year: 2020,
    },
    {
      title: "knight flower",
      img: movie26,
      year: 2020,
    },
    {
      title: "sweet home",
      img: movie27,
      year: 2020,
    },
    {
      title: "gyeongseong creature",
      img: movie28,
      year: 2020,
    },
    {
      title: "the worst of evil",
      img: movie29,
      year: 2020,
    },
    {
      title: "vincenzo",
      img: movie30,
      year: 2020,
    },
    {
      title: "killing vote",
      img: movie31,
      year: 2020,
    },
    {
      title: "moving",
      img: movie32,
      year: 2020,
    },
    {
      title: "revenant",
      img: movie33,
      year: 2020,
    },
    {
      title: "lies hidden in my garden",
      img: movie34,
      year: 2020,
    },
    {
      title: "the glory",
      img: movie35,
      year: 2020,
    },
    {
      title: "connect",
      img: movie36,
      year: 2020,
    },
    {
      title: "hospital playlist",
      img: movie37,
      year: 2020,
    },
    {
      title: "the queen umbrella",
      img: movie38,
      year: 2020,
    },
    {
      title: "one dollar lawyer",
      img: movie39,
      year: 2020,
    },
    {
      title: "my name",
      img: movie40,
      year: 2020,
    },
  ];

  return (
    <>
      <div className="flex w-full py-0 md:py-6 px-5 bg-[#0a1016]">
        <div className="flex flex-col space-y-3 w-full">
          <div className="flex flex-row justify-between  items-center">
            <div className="flex items-end space-x-2 group cursor-pointer text-white">
              <div className="flex">
                <p className=" text-lg font-bold md:text-2xl lg:text-2xl">
                  People Also Liked
                </p>
              </div>
              
            </div>

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
                    className="w-4 h-4 md:w-6 md:h-6"
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
                    className="w-4 h-4 md:w-6 md:h-6"
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
              {movieData.map((data, index) => {
                return (
                  <div
                    className="transition-all duration-150 flex mr-[1em] mb-[1em] hover:scale-110"
                    key={index}
                  >
                    <div className="flex w-[160px] md:w-[190px] ">
                      <div className="rounded bg-transparent border border-transparent hover:border-[#00dc89] group flex flex-col overflow-hidden  transition duration-500 ease-in-out">
                        <Link
                          href="/movies/one"
                          className="relative shadow-sm shadow-[#282d32]"
                        >
                          <Image
                            src={data.img}
                            alt=""
                            className="w-full h-full object-cover border rounded border-[#282d32]"
                          />{" "}
                          <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                        </Link>{" "}
                        <div className="px-3 py-2 flex flex-col justify-between leading-tight">
                          <div className="w-[197px]">
                            <h3 className="my-[0.25em] mx-[0em] md:text-md text-white leading-tight md:leading-tight font-semibold capitalize max-w-[85%] lg:max-w-[85%] line-clamp-1">
                              <Link href="/movies/one">{data.title}</Link>
                            </h3>{" "}
                          </div>
                          <div className="font-mabry text-xs text-white">
                            {data.year}
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
  );
}
