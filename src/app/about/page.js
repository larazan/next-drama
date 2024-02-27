import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GoTop from "@/app/components/GoTop";
import NewsFeed from "../components/NewsFeed";
import SubscribeForm from "../components/SubscribeForm";

import bg from "@/assets/img/about.png";

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />

      <div className="flex h-12 md:h-20 bg-black w-full max-w-screen-xl"></div>
      <div className="relative md:relative w-full flex flex-col justify-center md:h-[480px] mx-auto h-[420px] xs:items-end xs:justify-end md:items-start md:justify-center text-white ">
        <div className="absolute z-10 top-0 h-36 w-full bg-gradient-to-t from-transparent to-black"></div>
        <div className="absolute z-10 bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-[#0a1016]"></div>
        <div className="absolute w-full h-full">
          <div className="w-full h-full">
            <div
              className="bg-mask flex h-full md:block md:w-full md:h-full relative transition duration-300 ease-out "
              style={{
                background:
                  "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 15%)",
              }}
            >
              <Image src={bg} alt="" className="object-cover h-full w-full" />
            </div>
          </div>
        </div>
        {/* <div className="md:relative md:mt-12 md:pb-20 bottom-0 z-10 h-full flex flex-col rounded justify-center  items-center text-center  xs:my-[12px] md:my-[48px] px-[12px] md:px-[30px] mx-auto md:w-full  xs:items-center xs:text-center xs:justify-center md:items-start md:text-left md:justify-center">
          <div className="flex-row md:flex px-4 md:px-6 md:space-x-7 w-full justify-between">
            <div className="flex-col mx-auto2 w-full md:w-2/3 justify-center ">
              <div className="flex flex-col space-y-0 items-center2">
                <div className="flex justify-center md:justify-start">
                  <div>
                    <div className="flex items-center text-white ">
                      <div className="">
                        <span className="text-3xl md:text-4xl font-bold">
                          About
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3"></div>
        </div> */}
      </div>

      <section className="relative bg-[#0a1016] mx-auto  w-full flex  flex-col py-0">
        <div className="flex h-full w-full items-end !bg-[length:auto_833px] !bg-top min-[1129px]:!bg-[length:100%_auto]">
          <div className="to-1-black via-1-black w-full bg-gradient-to-b from-transparent via-40% py-12 pt-14 xl:pb-[104px]">
          <div className="grid mx-auto w-full max-w-[50rem] gap-4 px-0 pt-2 py-10 text-left">
          <h1 className="px-4 text-3xl text-white mx-auto w-full font-semibold lg:w-auto">
                About us
              </h1>
              <p className="mx-auto px-4 text-lg font-normal text-white">
              MyDramaList.com was first launched in April 2011 after several years of development and beta testing. Despite still being in Beta mode, the site has a wide database of Asian dramas, movies, and actors/actresses, thanks to the contributions of our users. We value your feedback and opinions, so please don't hesitate to share them with us at support@mydramalist.com.
              </p>
            </div>
            <div className="grid mx-auto w-full max-w-[50rem] gap-4 px-0 pt-2 py-10 text-left">
              <h1 className="px-4 text-3xl text-white mx-auto w-full font-semibold lg:w-auto">
                Our Goal
              </h1>
              <p className="mx-auto px-4 text-lg font-normal text-white">
              MyDramaList.com is a community-driven platform where Asian drama and movie fans can create their own lists, discuss their favorite shows and movies, discover new content, and make friends. Our goal is to provide a fun and engaging space for fans to connect and share their passion for Asian dramas and movies.
              </p>
            </div>
            
            <div className="relative mx-auto grid w-fit gap-12 px-5 md:grid-cols-2 xl:grid-cols-3 text-white">
              <div className="w-full md:max-w-[355px]">
                <p className="mb-2 text-xl font-medium">100% Wander operated</p>
                <p className="text-w-3005">
                  We’ll never pass you off to a stranger. All of the locations
                  on our platform are operated by us and managed to the highest
                  possible standards to create an experience guests love.
                </p>
              </div>
              <div className="w-full md:max-w-[355px]">
                <p className="mb-2 text-xl font-medium">Hand-picked quality</p>
                <p className="text-w-3005">
                  We’ll never not look like the pictures. We select homes in the
                  most beautiful destinations and pour our hearts into making
                  them magical so you can leave your stress at the door.
                </p>
              </div>
              <div className="w-full md:max-w-[355px]">
                <p className="mb-2 text-xl font-medium">
                  Hotel-grade amenities
                </p>
                <p className="text-w-3005">
                  We’ll never leave you with nothing to do. From workstations
                  with super fast WiFi to fitness centers, pools, and saunas,
                  every Wander is set up for you to effortlessly blend work and
                  play.
                </p>
              </div>
              <div className="w-full md:max-w-[355px]">
                <p className="mb-2 text-xl font-medium">
                  Smart home experience
                </p>
                <p className="text-w-3005">
                  We’ll never let you feel disconnected. From opening the door
                  to adjusting the lights to turning on the fireplace, total
                  home control is at your fingertips through the Wander app.
                </p>
              </div>
              <div className="w-full md:max-w-[355px]">
                <p className="mb-2 text-xl font-medium">Top-tier cleaning</p>
                <p className="text-w-3005">
                  We’ll never leave you with a dirty house or a to-do list. Our
                  cleaning teams are meticulous about quality and we won’t give
                  you a list of chores when you check out.
                </p>
              </div>
              <div className="w-full md:max-w-[355px]">
                <p className="mb-2 text-xl font-medium">
                  24/7 Wander Concierge
                </p>
                <p className="text-w-3005">
                  We’ll never leave you on read. Our text-based concierge is
                  always available to make your trip special – from activity
                  recommendations to restaurant reservations and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubscribeForm />
      <Footer />
    </>
  );
}
