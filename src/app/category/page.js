import React from 'react'
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GoTop from "@/app/components/GoTop";

import article1 from "@/assets/blogs/article1.jpeg"
import article2 from "@/assets/blogs/article2.png"
import article3 from "@/assets/blogs/article3.png"
import article4 from "@/assets/blogs/article4.png"
import article5 from "@/assets/blogs/article5.png"
import article6 from "@/assets/blogs/article6.png"
import article7 from "@/assets/blogs/article7.png"
import article8 from "@/assets/blogs/article8.png"
import article9 from "@/assets/blogs/article9.png"
import article10 from "@/assets/blogs/article10.jpeg"
import article11 from "@/assets/blogs/article11.png"
import article12 from "@/assets/blogs/article12.png"
import article13 from "@/assets/blogs/article13.jpeg"
import article14 from "@/assets/blogs/article14.png"
import article15 from "@/assets/blogs/article15.png"
import article16 from "@/assets/blogs/article16.png"
import article17 from "@/assets/blogs/article17.png"
import article18 from "@/assets/blogs/article18.png"
import article19 from "@/assets/blogs/article19.png"
import article20 from "@/assets/blogs/article20.png"
import article21 from "@/assets/blogs/article21.jpeg"
import article22 from "@/assets/blogs/article22.png"
import article23 from "@/assets/blogs/article23.png"
import article24 from "@/assets/blogs/article24.jpeg"
import article25 from "@/assets/blogs/article25.png"
import article26 from "@/assets/blogs/article26.png"
import article27 from "@/assets/blogs/article27.png"
import article28 from "@/assets/blogs/article28.png"
import article29 from "@/assets/blogs/article29.png"
import article30 from "@/assets/blogs/article30.png"
import article31 from "@/assets/blogs/article31.png"

export default function Category() {

    const newsData = [
        {
            title: "“Gyeongseong Creature” Teases Season 2 With Han So Hee And Park Seo Joon In Present Day",
            img: article1
        },
        {
            title: "Esom And Ahn Jae Hong Are In Disagreement When It Comes To Relationship Matters In “LTNS” Posters",
            img: article2
        },
        {
            title: "Kim Soo Hyun And Kim Ji Won Star In First Glimpse Of New Drama + March Premiere Confirmed",
            img: article3
        },
        {
            title: "Ji Chang Wook And Shin Hye Sun’s Camping Date Gets Crashed In “Welcome To Samdalri”            ",
            img: article4
        },
        {
            title: "Jang Nara Lets Out Her Pent-Up Anger On Son Ho Jun Following His Betrayal In “My Happy Ending”",
            img: article5
        },
        {
            title: "“Maestra: Strings Of Truth” Stars Say Goodbye And Share Thoughts Ahead Of Finale",
            img: article6
        },
        {
            title: "Esom And Ahn Jae Hong Secretly Spy On Cheating Couples In Posters For “LTNS”",
            img: article7
        },
        {
            title: "“Flex x Cop” Introduces Key Characters And Their Riveting Personalities In New Poster",
            img: article8
        },
        {
            title: "Jang Nara And Nam Ji Hyun’s New Drama “Good Partner” Confirms Characters And More Details",
            img: article9
        },
        {
            title: "Jang Hye Jin, Hyun Bong Sik, And Yoon Sang Hyun Are Park Shin Hye’s Family And Pillars Of Support In “Doctor Slump”",
            img: article10
        },
        {
            title: "Kim Go Eun, Park Ji Hyun, And Kim Gun Woo Confirmed For New Drama By “Do You Like Brahms?” Director",
            img: article11
        },
        {
            title: "Kim Nam Joo, Cha Eun Woo, And More Showcase Exceptional Synergy At Script Reading For New Drama",
            img: article12
        },
        {
            title: "First Impressions: “Knight Flower” Is The Gender-Swapped Robin Hood We’ve Been Waiting For",
            img: article13
        },
        {
            title: "“Crime Scene Returns” Cast Members Get Entangled In Murder Mystery In Riveting New Poster",
            img: article14
        },
        {
            title: "Gong Myung, Kim Min Ha, And More Impress At Script Reading For Upcoming Fantasy Romance Drama",
            img: article15
        },
        {
            title: "8 K-Dramas With Iconic Winter Moments To Watch This Season",
            img: article16
        },
        {
            title: "Yoo Teo Is 1st Korean Male To Be Nominated For Best Actor At BAFTA Film Awards; “Past Lives” Earns 3 Nominations In Total",
            img: article17
        },
        {
            title: "Park Hyung Sik And Park Shin Hye Dish On Starring Together In “Doctor Slump” 11 Years After “Heirs”",
            img: article18
        },
        {
            title: "Kim Tae Hee Is A Dazzling Top Star In Special Appearance For “Welcome To Samdalri” Finale",
            img: article19
        },
        {
            title: "“Welcome To Samdalri” Ends On Highest Ratings Of Its Run; “My Happy Ending” And “Live Your Own Life” Hit New All-Time Highs",
            img: article20
        },
        {
            title: "Park Hyung Sik And Park Shin Hye Charm With Their Behind-The-Scenes Chemistry For “Doctor Slump”",
            img: article21
        },
        {
            title: "“Welcome To Samdalri” Cast Reflects On Their Time Filming With Heartwarming Closing Remarks",
            img: article22
        },
        {
            title: "Woo Do Hwan, Jang Dong Gun, Hyeri, And More Confirmed For New Action Movie",
            img: article23
        },
        {
            title: "EXO’s Suho, Hong Ye Ji, And More Tease Chemistry At Script Reading For New Historical Drama + Premiere Date Confirmed",
            img: article24
        },
        {
            title: "Kim Young Ah, Shin Do Hyun, And Lee Sang Hee Join Yoo Teo For Season 2 Of American Series “The Recruit”",
            img: article25
        },
        {
            title: "Hit Dating Show “EXchange 3” To Take Legal Action Against Leaks And Hate Comments",
            img: article26
        },
        {
            title: "Jung Eun Chae Confirmed To Join Kim Tae Ri, Shin Ye Eun, And More In New Drama",
            img: article27
        },
        {
            title: "Bae Yoon Kyung Is A Charismatic And Confident CEO In “Wedding Impossible”",
            img: article28
        },
        {
            title: "WJSN’s Bona Becomes The Target Of School Bullying In Poster for Upcoming Thriller Drama “Pyramid Game”",
            img: article29
        },
        {
            title: "Park Hae Soo And Kim Tae Hee Confirmed To Star in American Series “Butterfly”",
            img: article30
        },
        {
            title: "Lee Young Ae Confirmed To Reprise Her Role As Dae Jang Geum After 20 Years + Upcoming Drama Shares Broadcast Plans",
            img: article31
        },
    ]

  return (
    <>
        
    </>
  )
}
