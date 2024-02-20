import React from 'react'
import Link from 'next/link'

const SongList = () => {
  return (
    <>
       <div className="flex flex-row flex-wrap justify-center mx-4 md:mx-auto md:max-w-[760px] lg:max-w-container-lg mt-10 mb-16">
      <div className="flex flex-col-reverse items-center w-full lg:flex-row lg:items-start">
          <div className="flex flex-col flex-1 w-full max-w-[760px] mx-auto sm:max-w-container-lg space-y-2">
          {/*  */}
          <Link href={"/music"}>
          <div className="relative w-full">
            <div className="absolute left-4 top-4">
              <button className="text-pink-600">
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
              </button>
            </div>
            <div className="flex justify-between bg-[#162c41] hover:bg-[#1f364d] rounded shadow px-3 py-3 cursor-pointer">
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded bg-sky-400"></button>
                <div className="flex flex-col">
                  <button className="hover:text-gray-400 text-white text-md">
                    <span>chAnge</span>
                  </button>
                  <span className="text-[#5aa3ed] text-sm cursor-pointer">
                    miwa
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-sm font-semibold text-[#9cb3c9] capitalize">
                  Delight
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-sm font-semibold text-[#9cb3c9]">
                  4:52
                </span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button className="text-[#9cb3c9] hover:rounded-full hover:bg-[#0e2439] p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
                <button className="text-[#9cb3c9] hover:rounded-full hover:bg-[#0e2439] p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          </Link>
          {/*  */}
          <Link href={"/music"}>
          <div className="relative w-full">
            <div className="absolute left-4 top-4">
              <button className="text-pink-600">
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
              </button>
            </div>
            <div className="flex justify-between bg-[#162c41] hover:bg-[#1f364d] rounded shadow px-3 py-3 cursor-pointer">
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded bg-sky-400"></button>
                <div className="flex flex-col">
                  <button className="hover:text-gray-400 text-white text-md">
                    <span>chAnge</span>
                  </button>
                  <span className="text-[#5aa3ed] text-sm cursor-pointer">
                    miwa
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-sm font-semibold text-[#9cb3c9] capitalize">
                  Delight
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-sm font-semibold text-[#9cb3c9]">
                  4:52
                </span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button className="text-[#9cb3c9] hover:rounded-full hover:bg-[#0e2439] p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
                <button className="text-[#9cb3c9] hover:rounded-full hover:bg-[#0e2439] p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          </Link>
          </div>
        </div>
      </div>  
    </>
  )
}

export default SongList