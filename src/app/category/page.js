import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GoTop from "@/app/components/GoTop";
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


import ava from "@/assets/img/ava1.svg";

export default function Category() {
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

      <main className="">
        <div>
          <section className="pick-color bg-[#f5f6ff] min-h-screen pt-36 text-black">
            <section class="wrapper !md:max-w-7xl relative h-full mx-auto w-11/12">
              
              <div class="md:hidden">
                <div class="mb-6">
                  <div
                    class="relative z-10 inline-block w-full"
                    data-headlessui-state=""
                  >
                    <div>
                      <button
                        class="inline-flex w-full items-center justify-between rounded-lg bg-pink-300 px-4 py-3 text-base font-medium text-black"
                        id="headlessui-menu-button-:r0:"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        <span class="capitalize opacity-70">All blogs</span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          class="-mr-1 ml-2 h-4 w-4"
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
              <nav class="no-scrollbar mb-10 hidden grid-flow-col items-center justify-start gap-0 pb-3 md:grid md:gap-1 md:overflow-x-auto md:pb-0">
                <a
                  class="whitespace-nowrap rounded-full px-4 py-1 capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg  bg-black font-medium text-white hover:bg-[#212121]"
                  href="/blog"
                >
                  All News
                </a>
                <a
                  class="whitespace-nowrap rounded-full px-4 py-1 text-base capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg text-black/50 font-medium hover:bg-pink-300"
                  href="/blogs/real-estate-investing"
                >
                  TV/Film
                </a>
                <a
                  class="whitespace-nowrap rounded-full px-4 py-1 text-base capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg text-black/50 font-medium hover:bg-pink-300"
                  href="/blogs/help-center"
                >
                  Music
                </a>
                <a
                  class="whitespace-nowrap rounded-full px-4 py-1 text-base capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg text-black/50 font-medium hover:bg-pink-300"
                  href="/blogs/announcements"
                >
                  Celebs
                </a>
                <a
                  class="whitespace-nowrap rounded-full px-4 py-1 text-base capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg text-black/50 font-medium hover:bg-pink-300"
                  href="/blogs/community"
                >
                  Fashion
                </a>
                <a
                  class="whitespace-nowrap rounded-full px-4 py-1 text-base capitalize transition duration-300 ease-in-out hover:opacity-100 md:px-5 md:text-lg text-black/50 font-medium hover:bg-pink-300"
                  href="/blogs/guides"
                >
                  Forum
                </a>
              </nav>
            
              <div class="py-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:pb-16 md:grid-cols-3 lg:grid-cols-4 divide-y md:divide-y-0 divide-gray-300">
                {newsData.map((data,index) => (
                    <div className="pt-5 md:pt-0">
                  <a
                    class="hover:underline"
                    href="/blogs/celebrating-two-years"
                  >
                    <div class="relative block h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={data.img}
                        alt=""
                        class="h-full w-full object-cover"
                      />
                    </div>
                  </a>
                  <div class="mb-2 mt-3">
                    <div class="grid grid-flow-col justify-start gap-3">
                      <a href="/blogs/announcements">
                        <div class="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                          <span class="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                            news
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <a
                    class="hover:underline"
                    href="/blogs/celebrating-two-years"
                  >
                    <h3 class="line-clamp-2 text-xl font-extrabold leading-6">
                      {data.title}
                    </h3>
                  </a>
                  <p class="mb-4 mt-3 line-clamp-2 text-gr-300 opacity-80 leading-tight">
                    Looking for the best spas, restaurants, bars, and
                    experiences
                  </p>
                  <div className="flex flex-col space-y-1 ">
                    <div class="flex items-center space-x-2 relative">
                      <Image
                        src={ava}
                        alt=""
                        class="w-7 h-7 rounded-full object-cover"
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
                ))}
                
               
              </div>
              <div></div>
            </section>
          </section>
        </div>
      </main>

      <SubscribeForm />
      <Footer />
    </>
  );
}
