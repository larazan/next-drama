import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ava from "@/assets/img/ava1.svg";
import blog1 from "@/assets/blogs/blog1.png";
import blog2 from "@/assets/blogs/blog2.png";
import blog3 from "@/assets/blogs/blog3.jpeg";
import blog4 from "@/assets/blogs/blog4.png";
import blog5 from "@/assets/blogs/blog5.png";
import blog6 from "@/assets/blogs/blog6.jpeg";

import article1 from "@/assets/blogs/article1.jpeg";
import article2 from "@/assets/blogs/article2.png";
import article3 from "@/assets/blogs/article3.png";
import article4 from "@/assets/blogs/article4.png";
import article5 from "@/assets/blogs/article5.png";
import article6 from "@/assets/blogs/article6.png";
import article7 from "@/assets/blogs/article7.png";
import article8 from "@/assets/blogs/article8.png";
import article9 from "@/assets/blogs/article9.png";
import article10 from "@/assets/blogs/article10.jpeg";
import article11 from "@/assets/blogs/article11.png";
import article12 from "@/assets/blogs/article12.png";
import article13 from "@/assets/blogs/article13.jpeg";
import article14 from "@/assets/blogs/article14.png";
import article15 from "@/assets/blogs/article15.png";
import article16 from "@/assets/blogs/article16.png";
import article17 from "@/assets/blogs/article17.png";
import article18 from "@/assets/blogs/article18.png";
import article19 from "@/assets/blogs/article19.png";
import article20 from "@/assets/blogs/article20.png";
import article21 from "@/assets/blogs/article21.jpeg";
import article22 from "@/assets/blogs/article22.png";
import article23 from "@/assets/blogs/article23.png";
import article24 from "@/assets/blogs/article24.jpeg";
import article25 from "@/assets/blogs/article25.png";
import article26 from "@/assets/blogs/article26.png";
import article27 from "@/assets/blogs/article27.png";
import article28 from "@/assets/blogs/article28.png";
import article29 from "@/assets/blogs/article29.png";
import article30 from "@/assets/blogs/article30.png";
import article31 from "@/assets/blogs/article31.png";

const LatestNews = () => {
    const news = [
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
          {
            title:
              "Esom And Ahn Jae Hong Secretly Spy On Cheating Couples In Posters For “LTNS”",
            img: article7,
          },
          {
            title:
              "“Flex x Cop” Introduces Key Characters And Their Riveting Personalities In New Poster",
            img: article8,
          },
          {
            title:
              "Jang Nara And Nam Ji Hyun’s New Drama “Good Partner” Confirms Characters And More Details",
            img: article9,
          },
          {
            title:
              "Jang Hye Jin, Hyun Bong Sik, And Yoon Sang Hyun Are Park Shin Hye’s Family And Pillars Of Support In “Doctor Slump”",
            img: article10,
          },
    ]

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
        {
          title:
            "Esom And Ahn Jae Hong Secretly Spy On Cheating Couples In Posters For “LTNS”",
          img: article7,
        },
        {
          title:
            "“Flex x Cop” Introduces Key Characters And Their Riveting Personalities In New Poster",
          img: article8,
        },
        {
          title:
            "Jang Nara And Nam Ji Hyun’s New Drama “Good Partner” Confirms Characters And More Details",
          img: article9,
        },
        {
          title:
            "Jang Hye Jin, Hyun Bong Sik, And Yoon Sang Hyun Are Park Shin Hye’s Family And Pillars Of Support In “Doctor Slump”",
          img: article10,
        },
        {
          title:
            "Kim Go Eun, Park Ji Hyun, And Kim Gun Woo Confirmed For New Drama By “Do You Like Brahms?” Director",
          img: article11,
        },
        {
          title:
            "Kim Nam Joo, Cha Eun Woo, And More Showcase Exceptional Synergy At Script Reading For New Drama",
          img: article12,
        },
        {
          title:
            "First Impressions: “Knight Flower” Is The Gender-Swapped Robin Hood We’ve Been Waiting For",
          img: article13,
        },
        {
          title:
            "“Crime Scene Returns” Cast Members Get Entangled In Murder Mystery In Riveting New Poster",
          img: article14,
        },
        {
          title:
            "Gong Myung, Kim Min Ha, And More Impress At Script Reading For Upcoming Fantasy Romance Drama",
          img: article15,
        },
        {
          title: "8 K-Dramas With Iconic Winter Moments To Watch This Season",
          img: article16,
        },
        {
          title:
            "Yoo Teo Is 1st Korean Male To Be Nominated For Best Actor At BAFTA Film Awards; “Past Lives” Earns 3 Nominations In Total",
          img: article17,
        },
        {
          title:
            "Park Hyung Sik And Park Shin Hye Dish On Starring Together In “Doctor Slump” 11 Years After “Heirs”",
          img: article18,
        },
        {
          title:
            "Kim Tae Hee Is A Dazzling Top Star In Special Appearance For “Welcome To Samdalri” Finale",
          img: article19,
        },
        {
          title:
            "“Welcome To Samdalri” Ends On Highest Ratings Of Its Run; “My Happy Ending” And “Live Your Own Life” Hit New All-Time Highs",
          img: article20,
        },
        {
          title:
            "Park Hyung Sik And Park Shin Hye Charm With Their Behind-The-Scenes Chemistry For “Doctor Slump”",
          img: article21,
        },
        {
          title:
            "“Welcome To Samdalri” Cast Reflects On Their Time Filming With Heartwarming Closing Remarks",
          img: article22,
        },
        {
          title:
            "Woo Do Hwan, Jang Dong Gun, Hyeri, And More Confirmed For New Action Movie",
          img: article23,
        },
        {
          title:
            "EXO’s Suho, Hong Ye Ji, And More Tease Chemistry At Script Reading For New Historical Drama + Premiere Date Confirmed",
          img: article24,
        },
        {
          title:
            "Kim Young Ah, Shin Do Hyun, And Lee Sang Hee Join Yoo Teo For Season 2 Of American Series “The Recruit”",
          img: article25,
        },
        {
          title:
            "Hit Dating Show “EXchange 3” To Take Legal Action Against Leaks And Hate Comments",
          img: article26,
        },
        {
          title:
            "Jung Eun Chae Confirmed To Join Kim Tae Ri, Shin Ye Eun, And More In New Drama",
          img: article27,
        },
        {
          title:
            "Bae Yoon Kyung Is A Charismatic And Confident CEO In “Wedding Impossible”",
          img: article28,
        },
        {
          title:
            "WJSN’s Bona Becomes The Target Of School Bullying In Poster for Upcoming Thriller Drama “Pyramid Game”",
          img: article29,
        },
        {
          title:
            "Park Hae Soo And Kim Tae Hee Confirmed To Star in American Series “Butterfly”",
          img: article30,
        },
        {
          title:
            "Lee Young Ae Confirmed To Reprise Her Role As Dae Jang Geum After 20 Years + Upcoming Drama Shares Broadcast Plans",
          img: article31,
        },
      ];

  return (
    <>
     <div className="flex w-full mt-12 md:mt-0 pt-6 md:py-6 px-5 bg-[#0a1016]">
        <div className="flex flex-col space-y-3 w-full">
          <div className="flex flex-row justify-between  items-center">
            <Link href={"/blogs"}  className="flex items-end space-x-2 group cursor-pointer text-white hover:text-[#0c9bff]"> 
              <div className="flex">
              <p className=" text-lg font-bold md:text-2xl lg:text-2xl">
              Latest News
              </p>
              <div className="pl-1 items-end pb-1.5 flex group-hover:hidden">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={6}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
              </div>
              </div>
            <div className="hidden  group-hover:flex group-hover:transition group-hover:duration-700 group-hover:ease-in-out items-center space-x-0.5">
              <span className="text-[16px] font-semibold capitalize">see all</span>
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={6}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
            </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2">
              {news.map((data, index) => {
                return (
                  <div className='flex before:inline items-center before:px-1.5  before:text-sm before:content-["►"] text-white' key={index}>
                    <Link href={"/"} className="text-white  hover:text-[#0c9bff] leading-tight">
                    <span className="text-sm md:text-md">{data.title}</span>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="pt-8 px-4 py-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:pb-16 md:grid-cols-3 lg:grid-cols-4 ">
                <div>
                  <Link
                    className=""
                    href="/blogs/celebrating-two-years"
                  >
                    <div className="relative block h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={blog1}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="mb-2 mt-3">
                    <div className="grid grid-flow-col justify-start gap-3">
                      <Link href="/blogs/announcements">
                        <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                          <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                            news
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link
                    className="hover:underline text-white underline-offset-2"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80 leading-tight text-white">
                    Looking for the best spas, restaurants, bars, and
                    experiences
                  </p>
                  <div className="flex flex-col space-y-1 ">
                    <div className="flex items-center space-x-2 relative">
                      <Image
                        src={ava}
                        alt=""
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold text-white">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-white">
                      January 6, 2024
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    className=""
                    href="/blogs/celebrating-two-years"
                  >
                    <div className="relative block h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={blog2}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="mb-2 mt-3">
                    <div className="grid grid-flow-col justify-start gap-3">
                      <Link href="/blogs/announcements">
                        <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                          <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                            news
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link
                    className="hover:underline text-white underline-offset-2"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80 leading-tight text-white">
                    Looking for the best spas, restaurants, bars, and
                    experiences
                  </p>
                  <div className="flex flex-col space-y-1 ">
                    <div className="flex items-center space-x-2 relative">
                      <Image
                        src={ava}
                        alt=""
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold text-white">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-white">
                      January 6, 2024
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    className=""
                    href="/blogs/celebrating-two-years"
                  >
                    <div className="relative block h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={blog3}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="mb-2 mt-3">
                    <div className="grid grid-flow-col justify-start gap-3">
                      <Link href="/blogs/announcements">
                        <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                          <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                            news
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link
                    className="hover:underline text-white underline-offset-2"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80 leading-tight text-white">
                    Looking for the best spas, restaurants, bars, and
                    experiences
                  </p>
                  <div className="flex flex-col space-y-1 ">
                    <div className="flex items-center space-x-2 relative">
                      <Image
                        src={ava}
                        alt=""
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold text-white">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-white">
                      January 6, 2024
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    className=""
                    href="/blogs/celebrating-two-years"
                  >
                    <div className="relative block h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={blog4}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="mb-2 mt-3">
                    <div className="grid grid-flow-col justify-start gap-3">
                      <Link href="/blogs/announcements">
                        <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                          <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                            news
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link
                    className="hover:underline text-white underline-offset-2"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80 leading-tight text-white">
                    Looking for the best spas, restaurants, bars, and
                    experiences
                  </p>
                  <div className="flex flex-col space-y-1 ">
                    <div className="flex items-center space-x-2 relative">
                      <Image
                        src={ava}
                        alt=""
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold text-white">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-white">
                      January 6, 2024
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    className="hover:underline text-white"
                    href="/blogs/celebrating-two-years"
                  >
                    <div className="relative block h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={blog5}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="mb-2 mt-3">
                    <div className="grid grid-flow-col justify-start gap-3">
                      <Link href="/blogs/announcements">
                        <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                          <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                            news
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link
                    className="hover:underline text-white"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80 leading-tight text-white">
                    Looking for the best spas, restaurants, bars, and
                    experiences
                  </p>
                  <div className="flex flex-col space-y-1 ">
                    <div className="flex items-center space-x-2 relative">
                      <Image
                        src={ava}
                        alt=""
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold text-white">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-white">
                      January 6, 2024
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    className=""
                    href="/blogs/celebrating-two-years"
                  >
                    <div className="relative block h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={blog6}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="mb-2 mt-3">
                    <div className="grid grid-flow-col justify-start gap-3">
                      <Link href="/blogs/announcements">
                        <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                          <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                            news
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link
                    className="hover:underline text-white underline-offset-2"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80 leading-tight text-white">
                    Looking for the best spas, restaurants, bars, and
                    experiences
                  </p>
                  <div className="flex flex-col space-y-1 ">
                    <div className="flex items-center space-x-2 relative">
                      <Image
                        src={ava}
                        alt=""
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold text-white">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-white">
                      January 6, 2024
                    </span>
                  </div>
                </div>
              </div>

        </div>
      </div>

       
    </>
  )
}

export default LatestNews