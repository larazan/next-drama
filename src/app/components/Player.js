
import React from 'react'
import Image from 'next/image'

import VolumeControl from './VolumeControl'
import milet from "@/assets/album/1.jpg"

const Player = () => {
  return (
    <>
        <footer className="bg-[#162c41] w-full sticky bottom-0 z-10 col-span-6 p-2 md:p-4 grid grid-cols-3 gap-1 md:gap-6 border-t border-gray-800">
        <div className="flex items-center ">
          <Image
            className="h-10 w-10 md:h-14 md:w-14 mr-2 md:mr-4 flex-shrink-0"
            src={milet}
            alt=""
          />
          <div className="mr-4">
            <div className="text-xs md:text-sm text-white text-line-clamp-1 font-semibold leading-tight">
              Re:I AM
            </div>
            <div className="text-xs text-gray-100 text-line-clamp-1 capitalize">
              <span>Aimer</span>
            </div>
          </div>
          <div className="flex items-center hidden2 md:block">
            <button className="text-pink-500 p-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
              </svg>
            </button>
            <button className="text-gray-100 p-2">
              <svg
                className="w-4 h-4"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor" fill-rule="evenodd">
                  <path
                    d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                    fill-rule="nonzero"
                  ></path>
                  <path d="M10 8h4v3h-4z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-center justify-center">
          <div className="flex items-center justify-center md:mb-3 ">
            <button className="w-5 h-5 text-gray-100 mr-1 md:mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrows-shuffle-2"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 4l3 3l-3 3"></path>
                <path d="M18 20l3 -3l-3 -3"></path>
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5"></path>
                <path d="M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5"></path>
              </svg>
            </button>
            <button className="w-6 h-6 md:w-7 md:h-7 text-gray-100 mr-1 md:mr-6">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
              </svg>
            </button>
            <button className="w-7 h-7 md:w-9 md:h-9 border border-gray-300 bg-white rounded-full flex text-gray-100 mr-1 md:mr-6">
              <svg
                className="fill-current2 h-6 w-6 m-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
              </svg>
            </button>
            <button className="w-6 h-6 md:w-7 md:h-7 text-gray-100 mr-1 md:mr-6">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
              </svg>
            </button>
            <button className="w-5 h-5 text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-repeat"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
                <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex flex-row  w-full items-center ">
            <div><span className="text-xs text-gray-100 font-light2">4:18</span></div>
            <div className="overflow-hidden relative flex-1 mx-2 rounded">
              <div className="border-b-4 border-gray-600 rounded"></div>
              <div className="absolute inset-x-0 top-0 -translate-x-48 border-b-4 border-gray-100 rounded transform hover:border-green-200"></div>
            </div>
            <div><span className="text-xs text-gray-100 font-light2">5:13</span></div>
          </div>
        </div>
        <div className="flex justify-end w-full mr-6">
          <div className="flex justify-between items-center text-gray-300 space-x-3">
            <div className="block md:hidden">
              <span className="text-xs text-gray-100 font-light2">4:18</span>
            </div>
            <button className="text-pink-500 p-2 md:hidden">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
              </svg>
            </button>
            <svg
              className="fill-current hidden md:block"
              height="20"
              width="20"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48H0z" fill="none"></path>
              <path d="M30 12H6v4h24v-4zm0 8H6v4h24v-4zM6 32h16v-4H6v4zm28-20v16.37c-.63-.23-1.29-.37-2-.37-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6V16h6v-4H34z"></path>
            </svg>
            <svg
              className="fill-current hidden md:block"
              role="img"
              height="18"
              width="18"
              viewBox="0 0 16 16"
            >
              <path d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"></path>
            </svg>
            <VolumeControl />
            <div className="bg-gray-300 border border-gray-300 rounded-full w-20 h-1 hidden md:block"></div>
           
          </div>
        </div>
      </footer>
    </>
  )
}

export default Player