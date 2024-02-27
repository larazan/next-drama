import React from 'react'
import Image from "next/image";
import Link from "next/link";

import article1 from "@/assets/blogs/article1.jpeg";
import article2 from "@/assets/blogs/article2.png";
import article3 from "@/assets/blogs/article3.png";
import article4 from "@/assets/blogs/article4.png";
import article5 from "@/assets/blogs/article5.png";
import article6 from "@/assets/blogs/article6.png";
import article7 from "@/assets/blogs/article7.png";
import article8 from "@/assets/blogs/article8.png";


const ArticleRelated = () => {
    const newsData = [
        {
          title:
            "“Gyeongseong Creature” Teases Season 2 With Han So Hee And Park Seo Joon In Present Day",
          img: article1,
        },
        {
          title:
            "Esom And Ahn Jae Hong Are In Disagreement When It Comes To Relationship Matters In “LTNS” Posters",
          img: article2,
        },
        {
          title:
            "Kim Soo Hyun And Kim Ji Won Star In First Glimpse Of New Drama + March Premiere Confirmed",
          img: article3,
        },
        {
          title:
            "Ji Chang Wook And Shin Hye Sun’s Camping Date Gets Crashed In “Welcome To Samdalri”            ",
          img: article4,
        },
        {
          title:
            "Jang Nara Lets Out Her Pent-Up Anger On Son Ho Jun Following His Betrayal In “My Happy Ending”",
          img: article5,
        },
        {
          title:
            "“Maestra: Strings Of Truth” Stars Say Goodbye And Share Thoughts Ahead Of Finale",
          img: article6,
        },
        
     
      ];

  return (
    <>
        <div className="flex bg-[#0a1016] min-h-screen pt-5 pb-10 md:pt-[10px]">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center relative">
            <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
              <section className="w-full mx-auto  mt-10 md:mt-10 px-5 ">
                
                <div>
                 
                  <div className="flex w-full space-x-4">
                    <div className='divide-y-2 divide-[#31373b]'>
                      {newsData.map((data, index) => (
                          <div
                            className="text-tundora no-underline"
                            key={index}
                          >
                            <div className="my-[1em] mx-[0em] flex md:items-center w-full bg-transparent leading-[1.25em]">
                              <div className="m-0 mr-2 md:mr-5 flex aspect-[16/9] md:aspect-[12/9]2 h-fit flex-1 items-center justify-center">
                                <Link href={"/blogs/blog-one"}>
                                  <Image
                                    alt=""
                                    src={data.img}
                                    className="h-full w-full rounded object-cover"
                                    style={{ color: "transparent" }}
                                  />
                                </Link>
                              </div>
                              <div className=" flex w-2/3 md:max-w-[55%] flex-2 flex-col space-y-1 md:space-y-2">
                               
                                <Link
                                  href={"/blogs/blog-one"}
                                  className="text-white hover:underline underline-offset-2"
                                >
                                  <span className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-[22px] leading-tight md:leading-tight font-semibold">
                                    {data.title}
                                  </span>
                                </Link>
                                <div className="flex flex-col space-y-1">
                                  <p className="hidden text-sm font-semibold text-[#cecfd0]">
                                    By Brigitt Earley
                                  </p>
                                  <span className="text-xs text-gray-300">
                                    January 6, 2024
                                  </span>
                                </div>
                               
                              </div>
                            </div>
                            {/* <div className="h-px bg-mercury"></div> */}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                {/* load more */}
                <div className="mt-5 w-full rounded-2xl py-3 text-center bg-[#31373b] hover:bg-gray-700 cursor-pointer">
                  <span className="font-semibold text-white capitalize">
                    Load more
                  </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleRelated