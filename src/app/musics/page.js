import React from 'react'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GoTop from "@/app/components/GoTop";
import NewsFeed from "../components/NewsFeed";
import FilterMovie from "../components/FilterMovie";
import SubscribeForm from "../components/SubscribeForm";
import PaginateMovie from "../components/PaginateMovie";

import miwa from "@/assets/actress/miwa.jpg";
import milet from "@/assets/actress/milet.jpg";
import aimer from "@/assets/actress/aimer.jpg";
import lisa from "@/assets/actress/lisa.jpg";
import yui from "@/assets/actress/yui.jpg";
import radwimps from "@/assets/actress/radwimps.jpg";
import kanaboon from "@/assets/actress/kanaboon.jpg";
import okrock from "@/assets/actress/okrock.jpg";
import asiankungfu from "@/assets/actress/asiankungfu.jpg";
import kenshi from "@/assets/actress/kenshi.jpg";
import doinfinity from "@/assets/actress/doinfinity.jpg";
import FilterMusic from '../components/FilterMusic';
import NewsReel from '../components/NewsReel';

export default function Musics() {
    const musicData = [
        {
            id: 1,
            title: "mix miwa",
            artist: "miwa",
            description: "change, don't cry anymore, hikarie and many more",
            image: miwa
        },
        {
            id: 2,
            title: "mix milet",
            artist: "milet",
            description: "inside you, us, fly high and many more",
            image: milet
        },
        {
            id: 3,
            title: "mix aimer",
            artist: "aimer",
            description: "black bird, stand alone, stars in the rain and many more",
            image: aimer
        },
        {
            id: 4,
            title: "mix lisa",
            artist: "lisa",
            description: "gurenge and many more",
            image: lisa
        },
        {
            id: 5,
            title: "do as infinity",
            artist: "do as infinity",
            description: "change, don't cry anymore, hikarie and many more",
            image: doinfinity
        },
        {
            id: 6,
            title: "mix radwimps",
            artist: "radwimps",
            description: "change, don't cry anymore, hikarie and many more",
            image: radwimps
        },
        {
            id: 7,
            title: "mix kana boon",
            artist: "kana boon",
            description: "change, don't cry anymore, hikarie and many more",
            image: kanaboon
        },
        {
            id: 8,
            title: "mix one ok rock",
            artist: "one ok rock",
            description: "change, don't cry anymore, hikarie and many more",
            image: okrock
        },
        {
            id: 9,
            title: "mix asian kungfu generation",
            artist: "asian kungfu generation",
            description: "change, don't cry anymore, hikarie and many more",
            image: asiankungfu
        },
        {
            id: 10,
            title: "mix yui",
            artist: "yui",
            description: "change, don't cry anymore, hikarie and many more",
            image: yui
        },
        {
            id: 11,
            title: "mix kenshi yonezu",
            artist: "kenshi yonezu",
            description: "change, don't cry anymore, hikarie and many more",
            image: kenshi
        }
    ]

  return (
    <>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />
      <NewsReel />

      <main className="w-full bg-[#0a1016]">
        <div className="mx-auto max-w-4xl">
          <div className="grid-container grid  w-full grid-cols-1 gap-3 md:grid-cols-12 xl:gap-4 px-3 pb-12 pt-0 md:pb-16 md:pt-6 lg:px-0">
            
            <FilterMusic />

            <div className="col-start-1 md:col-span-12 md:col-start-0 md:row-start-2 xl:col-start-4">
              <section className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-2 xl:grid-cols-4 xl:gap-4">
                {musicData.map((data, index) => (
                  <div
                    className="transition-all duration-150 flex mr-[1em] mb-[1em] hover:scale-110 "
                    key={index}
                  >
                    <div className="flex w-[170px] md:w-[200px] ">
                      <div className="rounded bg-[#1e2429] border border-gray-800 hover:border-[#00dc89] group flex flex-col overflow-hidden  transition duration-500 ease-in-out">
                      <Link href="/musics/angora" className="relative w-[170px]  h-[140px] md:w-[200px] md:h-[200px]">
                        <Image
                          src={data.image}
                          alt=""
                          className="md:w-full h-full rounded-lg object-cover px-3 pt-3 "
                        />{" "}
                        <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                      </Link>{" "}
                        <div className="px-3 py-2 flex flex-col justify-between leading-tight">
                        <div className="w-[197px]">
                          <h3 className="my-[0.25em] mx-[0em] md:text-md text-white leading-tight md:leading-tight font-semibold capitalize max-w-[85%] lg:max-w-[85%] line-clamp-1">
                            <Link href="/movies/one">{data.title}</Link>
                          </h3>{" "}
                        </div>
                        <div className="font-mabry text-sm capitalize text-white leading-tight">
                          {data.artist}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
          <PaginateMovie />
        </div>
        
      </main>

      <SubscribeForm />
      <Footer />
    </>
  )
}
