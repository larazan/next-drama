"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide5 from "@/assets/slides/slide1.png";
import slide6 from "@/assets/slides/slide2.png";
import slide7 from "@/assets/slides/slide3.png";

const Slideshow = () => {
  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    
  };

  const slides = [
    {
      url: slide5,
    },
    {
      url: slide6,
    },
    {
      url: slide7,
    },
   
  ];

  return (
    <>
      <div className="max-w-[1400px] h-full w-full m-auto py-0 px-0 relative group overflow-hidden">
        <div className="w-full h-full rounded-2xl bg-center bg-cover2 object-cover duration-500">
          <Slider {...settings}>
            {slides.map((data, index) => (
                <Image src={data.url} alt="" className="md:h-full w-full" key={index} />
              )
            )}
          </Slider>
        </div>
     
      </div>
    </>
  );
};

export default Slideshow;
