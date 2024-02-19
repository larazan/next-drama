import React from "react";
import Image from "next/image";
import Link from "next/link";

import hero from "@/assets/details/hero.png";

const Hero = () => {
  return (
    <>
      <div className="flex h-12 md:h-20 bg-black w-full max-w-screen-xl"></div>
      <div className="relative md:relative w-full flex flex-col justify-center md:h-[480px] mx-auto h-[193px] xs:items-end xs:justify-end md:items-start md:justify-center text-white ">
        <div className="absolute z-10 top-0 h-32 w-full bg-gradient-to-t from-transparent to-black"></div>
        <div className="absolute z-10 bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-[#0a1016]"></div>
        <div className="absolute w-full h-full">
          <div className="w-full h-full">
            <div
              className="bg-mask flex md:block md:w-full md:h-full relative transition duration-300 ease-out "
              style={{
                background:
                  "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 15%)",
              }}
            >
              <Image
                src={hero}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-24 bottom-0 z-10 h-full flex flex-col justify-center bg-black/60 items-center text-center  xs:my-[12px] md:my-[48px] px-[12px] md:px-[30px] md:w-[380px]  xs:items-center xs:text-center xs:justify-center md:items-start md:text-left md:justify-center">
          <h3 className="font-bold mb-[12px] text-2xl md:text-h5 md:mb-[20px]">
            Kim Ha Neul And Jang Seung Jo Are A Picture-Perfect Couple In
            Upcoming Thriller Drama
          </h3>
          <div className=" leading-tight text-md md:text-lg mb-[8px] md:mb-[24px]">
            <div>
              <div>
                <p className="leading-tight">
                  Upcoming drama “Let’s Get Grabbed by the Collar” (literal
                  translation) has shared new stills of Kim Ha Neul and Jang
                  Seung Jo!
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3"></div>
        </div>
      </div>
      <div className="flex h-6 md:h-8 bg-[#0a1016] w-full max-w-screen-xl"></div>
    </>
  );
};

export default Hero;
