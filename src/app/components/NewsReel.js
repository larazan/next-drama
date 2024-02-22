"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsReel = () => {
  const settings = {
    dots: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;

  const handleClick = () => {
    setShow(!show);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === news.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const news = [
    "$50 off for your first order",
    // "Free UK Mainland Delivery on Orders Over £40",
    // "$50 off for your first order",
  ];

  const newsData = [
    {
      title:
        "“Crime Scene Returns” Cast Members Get Entangled In Murder Mystery In Riveting New Poster",
    },
    {
      title:
        "Gong Myung, Kim Min Ha, And More Impress At Script Reading For Upcoming Fantasy Romance Drama",
    },
    {
      title: "8 K-Dramas With Iconic Winter Moments To Watch This Season",
    },

    {
      title:
        "Park Hyung Sik And Park Shin Hye Dish On Starring Together In “Doctor Slump” 11 Years After “Heirs”",
    },
    {
      title:
        "Kim Tae Hee Is A Dazzling Top Star In Special Appearance For “Welcome To Samdalri” Finale",
    },

    {
      title:
        "Park Hyung Sik And Park Shin Hye Charm With Their Behind-The-Scenes Chemistry For “Doctor Slump”",
    },
    {
      title:
        "“Welcome To Samdalri” Cast Reflects On Their Time Filming With Heartwarming Closing Remarks",
    },
    {
      title:
        "Woo Do Hwan, Jang Dong Gun, Hyeri, And More Confirmed For New Action Movie",
    },

    {
      title:
        "Hit Dating Show “EXchange 3” To Take Legal Action Against Leaks And Hate Comments",
    },
    {
      title:
        "Jung Eun Chae Confirmed To Join Kim Tae Ri, Shin Ye Eun, And More In New Drama",
    },
    {
      title:
        "Bae Yoon Kyung Is A Charismatic And Confident CEO In “Wedding Impossible”",
    },
  ];

  return (
    <>
      <div className="flex h-12 md:h-14 bg-[#081118] w-full max-w-screen-xl"></div>
      <div className="bg-[#282d32]">
        <div className="grid-container overflow-x-hidden px-3 py-2 md:py-3 lg:px-0 lg:py-4">
          <div
          // style={{ transform: 'translateX(-200%)' }}
          // className="flex items-center transition-transform xl:gap-x-[4.5rem] xl:transition-none duration-[0ms]2 duration-500"
          >
            <Slider {...settings} className="overflow-hidden">
              {newsData.map((data, index) => (
                <div className="w-full shrink-0 text-center text-xs before:mr-2 before:text-gray-900 before:content-['\2713'] md:text-sm xl:flex xl:w-auto xl:items-center xl:justify-center xl:text-left" key={index}>
                  <span className="text-[#cccdce]">
                    <a href="/" className="">
                      {data.title}
                    </a>
                  </span>
                </div>
              ))}

              {/* <div 
              className="w-full shrink-0 text-center text-xs before:mr-2 before:text-gray-900 before:content-['\2713'] md:text-sm xl:flex xl:w-auto xl:items-center xl:justify-center xl:text-left"
            >
              <span className="text-gray-900">
                <a className="" href="/">
                Newsletter Sign Up - <strong className="font-bold">Get 10% Discount</strong>
                  
                </a>
              </span>
            </div>
            <div className="w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-sm xl:flex xl:w-auto xl:items-center xl:justify-center xl:text-left">
              <span className="text-gray-900">
                <a
                  href="/"
                  className=""
                  rel="noreferrer noopener"
                >
                  Order Now Pay Later with <strong className="font-bold">Klarna</strong>
                </a>
              </span>
            </div>
            <div className="w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-sm xl:flex xl:w-auto xl:items-center xl:justify-center xl:text-left xl:invisible 3xl:visible">
              <span className="text-gray-900">
                <a
                  href="/"
                  className=""
                  rel="noreferrer noopener"
                >
                  Ordered on weekdays before{" "}
                  <strong className="font-bold">12pm</strong>, shipped today
                </a>
              </span>
            </div>
            <div className=" w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-sm xl:hidden ">
              <span className="text-gray-900">
              <a
                href="/"
                className=""
                rel="noreferrer noopener"
              >
                <strong className="font-bold">Free shipping</strong> for orders over
                €75,-
              </a>
              </span>
            </div>  */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsReel;
