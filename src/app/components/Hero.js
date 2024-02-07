import React from "react";
import Image from "next/image";
import Link from "next/link";

import product from "@/assets/details/hero.png";

const Hero = () => {
  return (
    <>
     <div
        data-section="hero-sectionIndex=0"
        className="relative w-full flex flex-col justify-center md:h-[480px] mx-auto h-[193px] xs:items-center xs:justify-center md:items-start md:justify-center text-white"
      >
        <div className="absolute w-full h-full">
          <div className="w-full h-full">
            <div className="hidden2 md:block md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out] " style={{ background: 'linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 15%)' }}>
              <Image src={product} alt="" className="object-cover h-full w-full" />
            </div>
          </div>
        </div>
        <div className="z-10 h-full flex flex-col justify-center bg-black/70 items-center text-center  xs:my-[12px] md:my-[48px] px-[12px] md:px-[30px] md:w-[380px] relative xs:items-center xs:text-center xs:justify-center md:items-start md:text-left md:justify-center">
          <h3 className="font-bold mb-[12px] text-2xl md:text-h5 md:mb-[20px]">
          Here&apos;s More Of That Scion XD86D Four-Door Concept Based On The 86 Coupe
          </h3>
          <div className=" leading-tight text-md md:text-lg mb-[8px] md:mb-[24px]">
            <div>
              <div>
                <p className="leading-tight">Would you prefer if the Scion FR-S, Toyota 86, and Subaru BRZ had a more practical shooting brake body?</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3"></div>
        </div>
      </div>

     
    </>
  );
};

export default Hero;
