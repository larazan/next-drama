"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import photo1 from "@/assets/album/1.jpg";
import photo2 from "@/assets/album/2.jpg";
import photo3 from "@/assets/album/3.jpg";
import photo4 from "@/assets/album/4.jpg";
import photo5 from "@/assets/album/5.jpg";

const AlbumRelated = () => {
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

  const albumData = [
    {
      id: 1,
      title: "visions",
      year: 2022,
      image: photo3,
    },
    {
      id: 2,
      title: "who i am",
      year: 2020,
      image: photo5,
    },
    {
      id: 3,
      title: "eyes",
      year: 2020,
      image: photo2,
    },
    {
      id: 4,
      title: "us",
      year: 2019,
      image: photo4,
    },
    {
      id: 5,
      title: "inside you",
      year: 2019,
      image: photo1,
    },
  ];

  return (
    <>
      <div className="flex w-full mt-0 md:mt-0 py-6 px-5 bg-[#0a1016]">
        <div className="flex flex-col space-y-3 w-full">
          <div className="flex flex-row justify-between  items-center">
            <Link
              href={"/musics"}
              className="flex items-end space-x-2 group cursor-pointer text-white"
            >
              <div className="flex">
                <p className=" text-lg font-bold md:text-2xl lg:text-2xl">
                  Album
                </p>
                <div className="pl-1 items-end pb-1.5 flex group-hover:hidden"></div>
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
              {albumData.map((album, id) => (
                <Link
                  href={"/music"}
                  className="flex mr-[1em] mb-[1em]"
                  key={id}
                >
                  <div className="relative flex-col justify-center w-32 md:w-48 space-y-2">
                    <div className="relative overflow-hidden bg-white shadow flex rounded">
                      <Image
                        src={album.image}
                        alt=""
                        className="relative w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="text-center2 pt-0 md:pt-0 text-sm md:text-lg font-semibold text-white capitalize">
                        <span>{album.title}</span>
                      </div>
                      <span className="text-white text-sm">{album.year}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumRelated;
