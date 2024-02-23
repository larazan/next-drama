import React from "react";
import Image from "next/image";
import Link from "next/link";

import loved from "@/assets/icons/love.svg";
import liked from "@/assets/icons/like.svg";
import disliked from "@/assets/icons/dislike.svg";
import lovedW from "@/assets/icons/loved-white.svg";
import likedW from "@/assets/icons/like-white.svg";
import dislikedW from "@/assets/icons/dislike-white.svg";
import pravatar from "@/assets/img/ava1.svg";

const RateReview = () => {
  return (
    <>
      <div className="flex w-full py-10 md:py-12 px-5 bg-[#0a1016]">
        <div className="flex flex-col mx-auto space-y-3 w-11/12">
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-end space-x-2 group cursor-pointer text-white">
              <div className="flex">
                <p className=" text-lg font-bold md:text-2xl lg:text-2xl">
                  Ratings & Reviews
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row w-12/12 gap-16 justify-between items-center2">
            <div className="flex flex-col space-y-4 w-full md:w-5/12">
              <div className="flex space-x-4">
                <div className="text-[#bbbbbb]">
                  4.047 <span className="text-[#75797b]">Ratings</span>
                </div>
                <div className="text-[#bbbbbb]">
                  17 <span className="text-[#75797b]">Reviews</span>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="  pb-3">
                  <div className="w-full flex items-center mt-1">
                    <div className="w-3/12 mr-3 text-md font-mabry ">
                      <div className="flex items-center space-x-1 text-[#bbbbbb]">
                        <div>Loved</div>
                        <span className="tracking-tight text-[#e11a42]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="w-7/12">
                      <div className="bg-[#31373b] w-full rounded-full border border-gray-800 h-3.5">
                        <div className=" w-7/12 bg-[#e11a42] rounded-full h-3"></div>
                      </div>
                    </div>
                    <div className="w-2/12 mr-3 flex justify-end font-mabry pl-3">
                      <span className="text-md text-[#bbbbbb]">51%</span>
                    </div>
                  </div>
                  <div className="w-full flex items-center mt-1">
                    <div className="w-3/12 mr-3 text-md font-mabry ">
                      <div className="flex items-center space-x-1 text-[#bbbbbb]">
                        <div>Liked</div>
                        <span className="tracking-tight text-[#00dc89]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="w-7/12">
                      <div className="bg-[#31373b] w-full rounded-full border border-gray-800 h-3.5">
                        <div className=" w-2/12 bg-[#00dc89] rounded-full h-3"></div>
                      </div>
                    </div>
                    <div className="w-2/12  flex justify-end mr-3 font-mabry pl-3">
                      <span className="text-md text-[#bbbbbb]">21%</span>
                    </div>
                  </div>
                  <div className="w-full flex items-center mt-1">
                    <div className="w-3/12 mr-3 text-md font-mabry ">
                      <div className="flex items-center space-x-1 text-[#bbbbbb]">
                        <div>Disliked</div>
                        <span className="tracking-tight text-[#bbbdbe]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="w-7/12">
                      <div className="bg-[#31373b] w-full rounded-full border border-gray-800 h-3.5">
                        <div className=" w-1/12 bg-[#bbbdbe] rounded-full h-3"></div>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-end mr-3 font-mabry pl-3 text-[#bbbbbb]">
                      <span className="text-md">5%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 justify-center items-center p-3 border border-[#1d2428] rounded">
                <div className="text-center">
                  <span className="text-[#bbbbbb] text-lg leading-tight">
                    You Haven't Rated or Reviewed Reacher Yet
                  </span>
                </div>
                <div className="flex justify-around space-x-4">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex rounded-full justify-center p-4 items-center bg-[#31373b] cursor-pointer">
                      <Image src={lovedW} alt="" className="w-4" />
                    </div>
                    <span className="text-[#bbbbbb] text-sm">Love</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex rounded-full justify-center p-4 items-center bg-[#31373b] cursor-pointer">
                      <Image src={likedW} alt="" className="w-3" />
                    </div>
                    <span className="text-[#bbbbbb] text-sm">Like</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex rounded-full justify-center p-4 items-center bg-[#31373b] cursor-pointer">
                      <Image src={dislikedW} alt="" className="w-3" />
                    </div>
                    <span className="text-[#bbbbbb] text-sm">Dislike</span>
                  </div>
                </div>
                <div className="w-full flex px-3">
                  <button className="w-full flex px-3 py-2 rounded border border-[#31373b] bg-[#1d2428]">
                    <span className="text-[#75797b] text-sm">
                      Share your thoughts
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-7/12">
              <div className="grid grid-cols-1 gap-y-4 divide-y-2 divide-[#31373b]">
                {/*  */}
                <div className="flex py-4 first:pt-0 last:pb-0">
                  <div className="flex-shrink-0 mr-0">
                    <Image
                      className="mt-2 border border-gray-600 rounded-full w-8 h-8 md:w-9 md:h-9"
                      src={pravatar}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 px-4 py-0 md:px-4 md:py-0 leading-relaxed2 ">
                    <div className="flex w-full justify-between2 space-x-3">
                      <strong className="font-mabrybold text-white text-[16px]">
                        Sarah
                      </strong>{" "}
                      
                    </div>
                    <div className="flex space-x-1 items-center">
                        <Image src={loved} alt="" className="w-4" />
                        <span className="text-xs text-gray-400 ">Loved it</span>
                        <span className='before:inline before:px-1 before:text-sm before:content-["・"] text-xs md:text-xs text-gray-400  py-0.5'>
                          April 16, 2023
                        </span>
                      </div>
                    <p className="py-1 text-[15px] text-[#9c9da0] font-semibold leading-5 ">
                      What a great show. A truly incredible first season. I
                      can't wait to dive into season 2!
                    </p>
                    <div className="flex space-x-2 items-center justify-between pt-1">
                      <div className="flex space-x-1 items-center cursor-pointer px-1 py-0.5 bg-[#1d2428] rounded border border-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                        <span className="text-xs md:text-sm text-gray-400">
                          1
                        </span>
                      </div>
                      <div>
                        <div className="px-1  text-xs md:text-sm font-mabry rounded hover:bg-gray-700 cursor-pointer text-gray-400 border border-transparent">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex py-4 first:pt-0 last:pb-0">
                  <div className="flex-shrink-0 mr-0">
                    <Image
                      className="mt-2 border border-gray-600 rounded-full w-8 h-8 md:w-9 md:h-9"
                      src={pravatar}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 px-4 py-0 md:px-4 md:py-0 leading-relaxed2 ">
                    <div className="flex w-full justify-between2 space-x-3">
                      <strong className="font-mabrybold text-white text-[16px]">
                        Sarah
                      </strong>{" "}
                      
                    </div>
                    <div className="flex space-x-1 items-center">
                        <Image src={loved} alt="" className="w-4" />
                        <span className="text-xs text-gray-400 ">Loved it</span>
                        <span className='before:inline before:px-1 before:text-sm before:content-["・"] text-xs md:text-xs text-gray-400  py-0.5'>
                          April 16, 2023
                        </span>
                      </div>
                    <p className="py-1 text-[15px] text-[#9c9da0] font-semibold leading-5 ">
                      What a great show. A truly incredible first season. I
                      can't wait to dive into season 2!
                    </p>
                    <div className="flex space-x-2 items-center justify-between pt-1">
                      <div className="flex space-x-1 items-center cursor-pointer px-1 py-0.5 bg-[#1d2428] rounded border border-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                        <span className="text-xs md:text-sm text-gray-400">
                          1
                        </span>
                      </div>
                      <div>
                        <div className="px-1  text-xs md:text-sm font-mabry rounded hover:bg-gray-700 cursor-pointer text-gray-400 border border-transparent">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex py-4 first:pt-0 last:pb-0">
                  <div className="flex-shrink-0 mr-0">
                    <Image
                      className="mt-2 border border-gray-600 rounded-full w-8 h-8 md:w-9 md:h-9"
                      src={pravatar}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 px-4 py-0 md:px-4 md:py-0 leading-relaxed2 ">
                    <div className="flex w-full justify-between2 space-x-3">
                      <strong className="font-mabrybold text-white text-[16px]">
                        Sarah
                      </strong>{" "}
                      
                    </div>
                    <div className="flex space-x-1 items-center">
                        <Image src={loved} alt="" className="w-4" />
                        <span className="text-xs text-gray-400 ">Loved it</span>
                        <span className='before:inline before:px-1 before:text-sm before:content-["・"] text-xs md:text-xs text-gray-400  py-0.5'>
                          April 16, 2023
                        </span>
                      </div>
                    <p className="py-1 text-[15px] text-[#9c9da0] font-semibold leading-5 ">
                      What a great show. A truly incredible first season. I
                      can't wait to dive into season 2!
                    </p>
                    <div className="flex space-x-2 items-center justify-between pt-1">
                      <div className="flex space-x-1 items-center cursor-pointer px-1 py-0.5 bg-[#1d2428] rounded border border-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                        <span className="text-xs md:text-sm text-gray-400">
                          1
                        </span>
                      </div>
                      <div>
                        <div className="px-1  text-xs md:text-sm font-mabry rounded hover:bg-gray-700 cursor-pointer text-gray-400 border border-transparent">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
              <button className="my-8 flex justify-center rounded bg-[#31373b] hover:bg-gray-700 text-center py-3">
                <span className="text-sm font-semibold text-white">View More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RateReview;
