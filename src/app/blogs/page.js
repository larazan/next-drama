import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GoTop from "@/app/components/GoTop";

import blog1 from "@/assets/blogs/blog1.png";
import blog2 from "@/assets/blogs/blog2.png";
import blog3 from "@/assets/blogs/blog3.jpeg";
import blog4 from "@/assets/blogs/blog4.png";
import blog5 from "@/assets/blogs/blog5.png";
import blog6 from "@/assets/blogs/blog6.jpeg";

import ava from "@/assets/img/ava1.svg";
import NewsFeed from "../components/NewsFeed";
import SubscribeForm from "../components/SubscribeForm";


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

// import TipsHome from "../components/TipsHome";

export default function Blogs() {
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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />
      <NewsFeed />

      {/* <div className="bg-white">
        <div className="dark:bg-transparent">
          <div className="mx-auto flex flex-col items-center py-12 sm:py-12">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 ">
              <h1 className="text-4xl md:text-4xl lg:text-4xl text-center text-gray-900 font-bold leading-10">
                Beauty
              </h1>
              <p className="mt-3 md:mt-7 lg:w-10/12 text-gray-900 leading-tight font-normal text-center text-[18px] ">
                Find celebrity beauty secrets, hairstyles, skin care tips, and
                beauty trends. Find new ideas for your hair, makeup, nails and
                more.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="bg-[#ffc84e] w-full flex items-center py-3">
        <div className="flex flex-col items-center justify-center mx-auto w-11/12 ">
          <h1 className="py-6 text-4xl md:text-4xl lg:text-4xl text-center text-gray-900 font-bold leading-10">
            Latest blog
          </h1>
          <div className="flex flex-col w-full">
            <Image src={product} alt="" className="w-full object-cover" />
            <div className="flex flex-col space-y-2 items-center justify-center px-6 md:px-20 py-6 text-center ">
              <span className="text-gray-900 text-2xl md:text-4xl font-bold">
                2024 Ford Mustang Mach-E GT Joins the Bronze Age
              </span>
              <span className="pt-1 font-semibold uppercase text-[11px] text-gray-900">
                by todd lassa
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-4 mx-auto w-full px-3 md:px-0 ">
            <div className="">
              <div className=" bg-transparent group flex  flex-col overflow-hidden ">
                <Link href="/detail" className="relative bg-pink-50">
                  <Image src={blog1} alt="" className="object-cover w-full" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                      Ford Is Slowing F-150 Lightning Production Again
                    </Link>
                  </h3>{" "}
                  <span className="pt-1 font-semibold uppercase text-[11px] text-gray-900">
                    by todd lassa
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" bg-transparent group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={blog2} alt="" className="object-cover w-full" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                      Will Honda Finally Capitalize on EVs in 2024?
                    </Link>
                  </h3>{" "}
                  <span className="pt-1 font-semibold uppercase text-[11px] text-gray-900">
                    by todd lassa
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" bg-transparent group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={blog3} alt="" className="object-cover w-full" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                      2024 Kia EV9 Brings Comfort and 304 Miles of Range
                    </Link>
                  </h3>{" "}
                  <span className="pt-1 font-semibold uppercase text-[11px] text-gray-900">
                    by todd lassa
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" bg-transparent group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={blog4} alt="" className="object-cover w-full" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                      Was 2023 an Awful Year for EV Sales? They Grew 46%
                    </Link>
                  </h3>{" "}
                  <span className="pt-1 font-semibold uppercase text-[11px] text-gray-900">
                    by todd lassa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <main className="">
        <div>
          <section className="pick-color bg-[#f5f6ff] min-h-screen pt-36 text-black">
            <section className="wrapper !md:max-w-7xl relative h-full mx-auto w-11/12">
              <div className="flex bg-transparent">
                <div className="mx-auto flex flex-col md:flex-row space-y-2 md:space-y-0 w-full  items-center2 md:divide-x py-12 sm:py-12">
                  <div className="w-full md:w-3/12 flex flex-col px-2 items-center space-y-4">
                    <div className="flex flex-col space-y-1 items-center">
                      <div>
                        <Image src={blog1} alt="" className="objcet-cover" />
                      </div>
                      <div className="px-0 py-1 pb-4 flex flex-col space-y-3 leading-tight">
                        <span className="text-sm text-[#ee0028] font-semibold">
                          Makeup
                        </span>
                        <h3 className="font-bold text-base md:text-2xl text-[#333333] leading-tight hover:underline underline-offset-2">
                          <Link href="/blogs/detail">
                            12 Eyebrow Growth Serums That Actually Work,
                            According to Experts
                          </Link>
                        </h3>{" "}
                        <div className="flex flex-col space-y-1 ">
                          <div className="flex items-center space-x-2 relative">
                            <Image
                              src={ava}
                              alt=""
                              className="w-7 h-7 rounded-full object-cover"
                            />
                            <p className="text-sm font-semibold text-[#757575]">
                              By Brigitt Earley
                            </p>
                          </div>

                          <span className="text-xs text-gray-900">
                            January 6, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1 items-center">
                      <div>
                        <Image src={blog2} alt="" className="objcet-cover" />
                      </div>
                      <div className="px-0 py-1 pb-4 flex flex-col space-y-3 leading-tight">
                        <span className="text-sm text-[#ee0028] font-semibold">
                          Wellness
                        </span>
                        <h3 className="font-bold text-base md:text-2xl text-[#333333] leading-tight hover:underline underline-offset-2">
                          <Link href="/blogs/detail">
                            The Daily Habit That Nutritionists Say Can
                            Drastically Improve Your Health
                          </Link>
                        </h3>{" "}
                        <div className="flex flex-col space-y-1 ">
                          <div className="flex items-center space-x-2 relative">
                            <Image
                              src={ava}
                              alt=""
                              className="w-7 h-7 rounded-full object-cover"
                            />
                            <p className="text-sm font-semibold text-[#757575]">
                              By Brigitt Earley
                            </p>
                          </div>

                          <span className="text-xs text-gray-900">
                            January 6, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-2 items-center justify-center">
                    <div className="flex flex-col space-y-1 items-center ">
                      <div>
                        <Image src={blog3} alt="" className="objcet-cover" />
                      </div>
                      <div className="px-0 py-1 pb-4 flex flex-col space-y-3 leading-tight">
                        <span className="text-sm text-[#ee0028] font-semibold">
                          Celebrity Beauty
                        </span>
                        <h3 className="font-bold text-base md:text-4xl text-[#333333] leading-tight hover:underline underline-offset-2">
                          <Link href="/blogs/detail">
                            The Daily Habit That Nutritionists Say Can
                            Drastically Improve Your Health
                          </Link>
                        </h3>{" "}
                        <div className="flex flex-col space-y-1 ">
                          <div className="flex items-center space-x-2 relative">
                            <Image
                              src={ava}
                              alt=""
                              className="w-7 h-7 rounded-full object-cover"
                            />
                            <p className="text-sm font-semibold text-[#757575]">
                              By Brigitt Earley
                            </p>
                          </div>

                          <span className="text-xs text-gray-900">
                            January 6, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-3/12 flex flex-col px-2 items-center space-y-4">
                    <div className="flex flex-col space-y-1 items-center ">
                      <div>
                        <Image src={blog4} alt="" className="objcet-cover" />
                      </div>
                      <div className="px-0 py-1 pb-4 flex flex-col space-y-3 leading-tight">
                        <span className="text-sm text-[#ee0028] font-semibold">
                          New Ink
                        </span>
                        <h3 className="font-bold text-base md:text-2xl text-[#333333] leading-tight hover:underline underline-offset-2">
                          <Link href="/blogs/detail">
                            Tattoo Trends 2024: Which Designs Are In and Which
                            Are Out?
                          </Link>
                        </h3>{" "}
                        <div className="flex flex-col space-y-1 ">
                          <div className="flex items-center space-x-2 relative">
                            <Image
                              src={ava}
                              alt=""
                              className="w-7 h-7 rounded-full object-cover"
                            />
                            <p className="text-sm font-semibold text-[#757575]">
                              By Brigitt Earley
                            </p>
                          </div>

                          <span className="text-xs text-gray-900">
                            January 6, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1 items-center ">
                      <div>
                        <Image src={blog5} alt="" className="objcet-cover" />
                      </div>
                      <div className="px-0 py-1 pb-4 flex flex-col space-y-3 leading-tight">
                        <span className="text-sm text-[#ee0028] font-semibold">
                          Nail it
                        </span>
                        <h3 className="font-bold text-base md:text-2xl text-[#333333] leading-tight hover:underline underline-offset-2">
                          <Link href="/blogs/detail">
                            Jennifer Lopez Just Debuted a Manicure That’s Going
                            to Be Huge in 2024
                          </Link>
                        </h3>{" "}
                        <div className="flex flex-col space-y-1 ">
                          <div className="flex items-center space-x-2 relative">
                            <Image
                              src={ava}
                              alt=""
                              className="w-7 h-7 rounded-full object-cover"
                            />
                            <p className="text-sm font-semibold text-[#757575]">
                              By Brigitt Earley
                            </p>
                          </div>

                          <span className="text-xs text-gray-900">
                            January 6, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:hidden">
                <div className="mb-6">
                  <div
                    className="relative z-10 inline-block w-full"
                    data-headlessui-state=""
                  >
                    <div>
                      <button
                        className="inline-flex w-full items-center justify-between rounded-lg bg-pink-300 px-4 py-3 text-base font-medium text-black"
                        id="headlessui-menu-button-:r0:"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        <span className="capitalize opacity-70">All blogs</span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          className="-mr-1 ml-2 h-4 w-4"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="no-scrollbar mb-10 hidden grid-flow-col items-center justify-start gap-0 pb-3 md:grid md:gap-1 md:overflow-x-auto md:pb-0">
                <Link
                  className="whitespace-nowrap rounded-full px-4 py-1 capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg  bg-black font-medium text-white hover:bg-[#212121]"
                  href="/blog"
                >
                  All News
                </Link>
                <Link
                  className="whitespace-nowrap rounded-full px-4 py-1 text-base capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg text-black/50 font-medium hover:bg-pink-300"
                  href="/blogs/real-estate-investing"
                >
                  TV/Film
                </Link>
                <Link
                  className="whitespace-nowrap rounded-full px-4 py-1 text-base capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg text-black/50 font-medium hover:bg-pink-300"
                  href="/blogs/help-center"
                >
                  Music
                </Link>
                <Link
                  className="whitespace-nowrap rounded-full px-4 py-1 text-base capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg text-black/50 font-medium hover:bg-pink-300"
                  href="/blogs/announcements"
                >
                  Celebs
                </Link>
                <Link
                  className="whitespace-nowrap rounded-full px-4 py-1 text-base capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg text-black/50 font-medium hover:bg-pink-300"
                  href="/blogs/community"
                >
                  Fashion
                </Link>
                <Link
                  className="whitespace-nowrap rounded-full px-4 py-1 text-base capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg text-black/50 font-medium hover:bg-pink-300"
                  href="/blogs/guides"
                >
                  Forum
                </Link>
              </nav>
              {/* <div className="grid grid-cols-1 items-start justify-start gap-8 md:grid-cols-2">
                <div>
                  <Link className="hover:underline" href="/blogs/why-we-build">
                    <div className="relative block h-270px w-full">
                      <img
                        alt="Why We Build"
                        loading="lazy"
                        width="592"
                        height="296"
                        decoding="async"
                        data-nimg="1"
                        className="h-full w-full rounded-lg object-cover"
                        srcset="
                            /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1644413808-interior-47.jpg%3Fw%3D750%26h%3D375&amp;w=640&amp;q=75  1x,
                            /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1644413808-interior-47.jpg%3Fw%3D750%26h%3D375&amp;w=1200&amp;q=75 2x
                        "
                        src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1644413808-interior-47.jpg%3Fw%3D750%26h%3D375&amp;w=1200&amp;q=75"
                        style="color: transparent;"
                      />
                    </div>
                  </Link>
                  <div className="my-5 grid grid-flow-col justify-start gap-3">
                    <div className="">
                      <Link href="/blogs/announcements">
                        <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                          <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                            announcements
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="">
                      <Link href="/blogs/community">
                        <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                          <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                            community
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <Link href="/blogs/travel">
                        <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                          <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                            travel
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link className="hover:underline" href="/blogs/why-we-build">
                    <h2 className="mb-3 line-clamp-2 text-2xl font-extrabold tracking-tight md:mb-5">
                      Why We Build
                    </h2>
                  </Link>
                  <p className="line-clamp-3 text-gr-300 opacity-80">
                    20M Series A Announcement: Building to help our customers
                    experience the world with the people they care about most.
                    To help them find their happy place.
                  </p>
                  <div className="mt-5">
                    <div className="flex items-center text-gr-300">
                      <div className="relative">
                        <img
                          alt="John Andrew Entwistle"
                          loading="lazy"
                          width="38"
                          height="38"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-full object-cover"
                          srcset="
                                /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1634661789-yz5y70zn400x400.jpg%3Fw%3D38%26h%3D38&amp;w=48&amp;q=75 1x,
                                /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1634661789-yz5y70zn400x400.jpg%3Fw%3D38%26h%3D38&amp;w=96&amp;q=75 2x
                            "
                          src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1634661789-yz5y70zn400x400.jpg%3Fw%3D38%26h%3D38&amp;w=96&amp;q=75"
                          style="color: transparent;"
                        />
                      </div>
                      <div className="ml-4 leading-3">
                        <h4 className="mb-2 font-extrabold">
                          John Andrew Entwistle
                        </h4>
                        <span className="text-sm opacity-70">CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    href="https://go.wander.link/TmB4/start"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-full overflow-hidden rounded-lg bg-gr-100 px-7 pt-6 pb-9">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="text-center md:text-left">
                          <h2 className="mb-2 text-2xl font-extrabold">
                            Get the Wander App
                          </h2>
                          <p className="mb-5 text-gr-300 opacity-80">
                            Work/life bliss is just a few taps away. Download
                            our app now.
                          </p>
                          <div className="inline-flex items-center rounded-lg bg-black p-2 py-2 text-white">
                            <i>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                className="text-4xl"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                              </svg>
                            </i>
                            <p className="ml-1 text-xs" style="line-height: 6px;">
                              <span style="font-size: 11px;">
                                Download on the
                              </span>{" "}
                              <br />
                              <span className="text-xl font-medium">App Store</span>
                            </p>
                          </div>
                        </div>
                        <div className="relative ml-11 mt-8 h-40 min-w-full sm:hidden md:ml-5 md:mt-10 lg:block lg:h-auto xl:ml-16 xl:mt-0">
                          <div className="absolute z-10">
                            <img
                              alt="Phone Wander Tahoe Slopes"
                              loading="lazy"
                              width="134"
                              height="201"
                              decoding="async"
                              data-nimg="1"
                              className="absolute"
                              srcset="/_next/image?url=%2Fimages%2Fblog%2Fphone.png&amp;w=256&amp;q=100 1x, /_next/image?url=%2Fimages%2Fblog%2Fphone.png&amp;w=384&amp;q=100 2x"
                              src="/_next/image?url=%2Fimages%2Fblog%2Fphone.png&amp;w=384&amp;q=100"
                              style="color: transparent;"
                            />
                          </div>
                          <div className="absolute left-14 top-10">
                            <img
                              alt="Phone Wander Tahoe Slopes"
                              loading="lazy"
                              width="134"
                              height="201"
                              decoding="async"
                              data-nimg="1"
                              className="absolute"
                              srcset="/_next/image?url=%2Fimages%2Fblog%2Fphone-back.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fphone-back.png&amp;w=384&amp;q=75 2x"
                              src="/_next/image?url=%2Fimages%2Fblog%2Fphone-back.png&amp;w=384&amp;q=75"
                              style="color: transparent;"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="mt-8 hidden flex-col md:flex md:flex-row">
                    <Link
                      className="hover:underline relative block h-32 w-full flex-shrink-0 overflow-hidden rounded-lg md:w-5/12"
                      href="/blogs/wander-brand-partnerships-exclusive-discounts"
                    >
                      <img
                        alt="Wander Brand Partnerships &amp; Exclusive Discounts for our Members"
                        loading="lazy"
                        width="280"
                        height="128"
                        decoding="async"
                        data-nimg="1"
                        className="h-full w-full object-cover"
                        srcset="
                            /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1668540841-25-webres-74.jpg%3Fw%3D280%26h%3D128&amp;w=384&amp;q=75 1x,
                            /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1668540841-25-webres-74.jpg%3Fw%3D280%26h%3D128&amp;w=640&amp;q=75 2x
                        "
                        src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1668540841-25-webres-74.jpg%3Fw%3D280%26h%3D128&amp;w=640&amp;q=75"
                        style="color: transparent;"
                      />
                    </Link>
                    <div className="ml-0 flex w-full flex-col md:ml-5 md:w-7/12 justify-between">
                      <div className="grid grid-flow-col justify-start gap-3">
                        <Link href="/blogs/community">
                          <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                            <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                              community
                            </span>
                          </div>
                        </Link>
                        <Link href="/blogs/announcements">
                          <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                            <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                              announcements
                            </span>
                          </div>
                        </Link>
                      </div>
                      <Link
                        className="hover:underline"
                        href="/blogs/wander-brand-partnerships-exclusive-discounts"
                      >
                        <h3 className="mb-2 mt-3 line-clamp-2 text-xl font-extrabold leading-6">
                          Wander Brand Partnerships &amp; Exclusive Discounts
                          for our Members
                        </h3>
                      </Link>
                      <p className="text-sm text-gr-300">
                        <span className="font-extrabold">Meghan</span>,{" "}
                        <span className="opacity-70">Head of Partnerships</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 hidden flex-col md:flex md:flex-row">
                    <Link
                      className="hover:underline relative block h-32 w-full flex-shrink-0 overflow-hidden rounded-lg md:w-5/12"
                      href="/blogs/introducing-split-with-friends-an-industry-first"
                    >
                      <img
                        alt="Introducing Split with Friends – An Industry First"
                        loading="lazy"
                        width="280"
                        height="128"
                        decoding="async"
                        data-nimg="1"
                        className="h-full w-full object-cover"
                        srcset="
                            /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1665671818-split-with-friends-header.jpg%3Fw%3D280%26h%3D128&amp;w=384&amp;q=75 1x,
                            /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1665671818-split-with-friends-header.jpg%3Fw%3D280%26h%3D128&amp;w=640&amp;q=75 2x
                        "
                        src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F53643%2F1665671818-split-with-friends-header.jpg%3Fw%3D280%26h%3D128&amp;w=640&amp;q=75"
                        style="color: transparent;"
                      />
                    </Link>
                    <div className="ml-0 flex w-full flex-col md:ml-5 md:w-7/12 justify-between">
                      <div className="grid grid-flow-col justify-start gap-3">
                        <Link href="/blogs/announcements">
                          <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                            <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                              announcements
                            </span>
                          </div>
                        </Link>
                      </div>
                      <Link
                        className="hover:underline"
                        href="/blogs/introducing-split-with-friends-an-industry-first"
                      >
                        <h3 className="mb-2 mt-3 line-clamp-2 text-xl font-extrabold leading-6">
                          Introducing Split with Friends – An Industry First
                        </h3>
                      </Link>
                      <p className="text-sm text-gr-300">
                        <span className="font-extrabold">Christie</span>,{" "}
                        <span className="opacity-70">Head of Content</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="py-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:pb-16 md:grid-cols-3 lg:grid-cols-4 ">
                <div>
                  <Link
                    className="hover:underline"
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
                    className="hover:underline"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80 leading-tight">
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
                      <p className="text-sm font-semibold text-[#757575]">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-gray-900">
                      January 6, 2024
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    className="hover:underline"
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
                    className="hover:underline"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80">
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
                      <p className="text-sm font-semibold text-[#757575]">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-gray-900">
                      January 6, 2024
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    className="hover:underline"
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
                    className="hover:underline"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80">
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
                      <p className="text-sm font-semibold text-[#757575]">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-gray-900">
                      January 6, 2024
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    className="hover:underline"
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
                    className="hover:underline"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80">
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
                      <p className="text-sm font-semibold text-[#757575]">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-gray-900">
                      January 6, 2024
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    className="hover:underline"
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
                    className="hover:underline"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 className="line-clamp-2 text-xl font-extrabold leading-6">
                      Wander Vail Valley: Complete Guide
                    </h3>
                  </Link>
                  <p className="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80">
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
                      <p className="text-sm font-semibold text-[#757575]">
                        By Brigitt Earley
                      </p>
                    </div>

                    <span className="text-xs text-gray-900">
                      January 6, 2024
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
            </section>
          </section>
        </div>
      </main>

      {/* <TipsHome /> */}
      <SubscribeForm />
      <Footer />
    </>
  );
}
