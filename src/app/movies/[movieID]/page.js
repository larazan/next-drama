import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import GoTop from "@/app/components/GoTop";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import taxi from "@/assets/details/taxi.png";
import driver from "@/assets/details/taxi_driver.jpg";
import Casts from "@/app/components/Casts";

export default function Detail() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />

      <div className="flex h-12 md:h-20 bg-black w-full max-w-screen-xl"></div>
      <div className="relative md:relative w-full flex flex-col justify-center md:h-[480px] mx-auto h-[420px] xs:items-end xs:justify-end md:items-start md:justify-center text-white ">
        <div className="absolute z-10 top-0 h-32 w-full bg-gradient-to-t from-transparent to-black"></div>
        <div className="absolute z-10 bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-[#0a1016]"></div>
        <div className="absolute w-full h-full">
          <div className="w-full h-full">
            <div
              className="bg-mask flex h-full md:block md:w-full md:h-full relative transition duration-300 ease-out "
              style={{
                background:
                  "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 15%)",
              }}
            >
              <Image src={taxi} alt="" className="object-cover h-full w-full" />
            </div>
          </div>
        </div>
        <div className="md:relative md:mt-12 md:pb-20 bottom-0 z-10 h-full flex flex-col rounded justify-center bg-black/50 items-center text-center  xs:my-[12px] md:my-[48px] px-[12px] md:px-[30px] mx-auto md:w-full  xs:items-center xs:text-center xs:justify-center md:items-start md:text-left md:justify-center">
          <div className="flex-row md:flex px-4 md:px-6 md:space-x-7 w-full justify-between">
            <div className="hidden flex w-full md:block md:w-1/3 ">
              <div className="mx-auto w-full">
                <Image src={driver} className="" alt="" />
              </div>
            </div>
            <div className="flex-col mx-auto2 w-full md:w-2/3 justify-center ">
              <div className="items-center">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center2 text-white space-x-2">
                      <div className="">
                        <span className="text-3xl md:text-4xl font-bold">
                          Parasite
                        </span>
                      </div>
                      <div className="flex items-end">
                        <span className="text-lg md:text-lg text-gray-200">
                          (2009)
                        </span>
                      </div>
                    </div>
                    <div className="flex-row md:flex-col text-white">
                      <div className="flex space-x-2">
                        <div className=" border rounded px-1">
                          <span className="font-semibold">R</span>
                        </div>
                        <span>30/05/2019 (KR)</span>
                        <span className="hidden md:block text-[#0b89ff] font-semibold">
                          Komedi, Cerita Seru, Drama
                        </span>
                        <span>2h 13m</span>
                      </div>
                      <span className="block md:hidden">
                        Komedi, Cerita Seru, Drama
                      </span>
                    </div>
                    <div className="flex py-2 md:py-5">
                      <div className="flex items-center space-x-1.5 md:space-x-5">
                        <div className="h-11 w-11 md:h-16 md:w-16 p-1 rounded-full bg-[#00dc89]"></div>
                        <div className="text-black">
                          <button className="rounded-full bg-[#00dc89] p-2.5 md:p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-black">
                          <button className="rounded-full bg-[#00dc89] p-2.5 md:p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="text-black">
                          <button className="rounded-full bg-[#00dc89] p-2.5 md:p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-black">
                          <button className="rounded-full bg-[#00dc89] p-2.5 md:p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                        </div>
                        <div className="hidden md:flex ">
                          <button className="flex items-center text-white hover:text-gray-300 space-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="font-bold text-lg ">
                              Play Trailer
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block md:hidden">
                    <div className="mx-auto w-24">
                      <Image src={driver} className="" alt="" />
                    </div>
                  </div>
                </div>

                <div className="">
                  <div>
                    <span className="text-gray-200 italic text-lg">
                      Act like you own the place.
                    </span>
                  </div>
                </div>
                <div className="flex-col space-y-1 md:space-y-2">
                  <div>
                    <span className="text-xl font-bold text-white">
                      Kilasan Singkat
                    </span>
                  </div>
                  <div className="leading-tight">
                    <span className="text-white ">
                      Semua menganggur, keluarga Ki-taek memiliki minat khusus
                      pada Taman kaya dan glamor untuk mata pencaharian mereka
                      sampai mereka terjerat dalam insiden tak terduga.
                    </span>
                  </div>
                </div>
                <div className="flex py-2 space-x-10">
                  <div className="flex-col text-white">
                    <div>
                      <span className="font-bold">Bong Joon-ho</span>
                    </div>
                    <div>
                      <span className="">Director, Screenplay, Story</span>
                    </div>
                  </div>
                  <div className="flex-col text-white">
                    <div>
                      <span className="font-bold">Han Jin-won</span>
                    </div>
                    <div>
                      <span className="">Screenplay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3"></div>
        </div>
      </div>
      <div className="flex h-6 md:h-8 bg-[#0a1016] w-full max-w-screen-xl"></div>

    <Casts />
      <Footer />
    </>
  );
}
