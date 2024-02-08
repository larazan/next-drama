import React from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import NewsFeed from "../components/NewsFeed";

export default function Login() {
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

      <div className="flex h-max py-8 md:py-20 bg-[#0a1016] ">
        <div className="flex  w-full2">
          <div className="max-w-full xl:max-w-[1800px] mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row w-full space-y-3 md:divide-x-2 px-10 md:space-y-0 max-w-full">
              <div className="flex justify-center flex-col md:flex-row">
                <div className="md:pr-[72px] md:max-w-[50%] md:w-[50%] pb-[48px] md:pb-0 ">
                  <div>
                    <div>
                      <h2 className="text-2xl md:text-4xl text-white font-bold">
                        Have a Polaroid account?
                      </h2>
                    </div>
                    <div className="mt-5 lg:mt-6">
                      <div className="text-md lg:text-h5 text-white font-sans leading-5 lg:leading-7">
                        <div>
                          <div>
                            <p className="font-sans">
                              Access it now to save time when you shop.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-5 lg:pt-7">
                      <form>
                        <div className="mt-4 lg:mt-5">
                          <div className="pl-4">
                            <label
                              className="text-h6-mobile text-storm font-sans text-white"
                              for="login-email"
                            >
                              Email
                            </label>
                          </div>
                          <div className="mt-2">
                            <input
                              type="text"
                              id="login-email"
                              className="rounded-full border-neutral bg-transparent border-2 w-full h-[48px] px-7 text-body-md text-white font-sans leading-4 placeholder:text-white"
                              placeholder="Email"
                              name="email"
                              
                            />
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-5">
                          <div className="pl-4">
                            <label
                              className="text-h6-mobile text-storm font-sans text-white"
                              for="login-password"
                            >
                              Password
                            </label>
                          </div>
                          <div className="mt-2">
                            <input
                              type="password"
                              id="login-password"
                              className="rounded-full border-neutral bg-transparent border-2 w-full h-[48px] px-7 text-body-md text-white font-sans leading-4 placeholder:text-white"
                              placeholder="Password"
                              name="password"
                              
                            />
                          </div>
                        </div>
                        <div className="pt-6">
                          <button
                            type="submit"
                            className="text-md font-bold rounded-full transition-[all] duration-300 ease-out cursor-pointer bg-[#00dc89] text-black border-2 border-black hover:bg-white hover:text-black hover:border-solid py-3 px-7 w-full"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                      <div className="flex justify-center pt-9">
                        <Link
                          href="/forgot"
                          className="text-body-md text-white font-bold animated-underline after:bg-[#000] before:bg-[#fff] pb-[2px]"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] w-auto md:w-[1px] md:h-auto bg-slate-400/50"></div>

                <div className="md:max-w-[50%] md:w-[50%] md:pl-[72px] pt-[48px] md:pt-0 ">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white font-headings">
                      Don’t have an account?
                    </h2>
                  </div>
                  <div className="mt-5 md:mt-6">
                    <div className="text-md md:text-lg text-white font-semibold leading-5 md:leading-6">
                      <div>
                        <div>
                          <p className="font-sans">
                            Create your own Polaroid account today. It makes
                            shopping smoother and faster, while also earning you
                            reward points on every purchase.
                          </p>
                          <p className="font-sans"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-9">
                    <Link
                      href="/register"
                      className="inline-flex items-center justify-center bg-[#00dc89] text-md text-black border-2 border-black border-solid font-bold rounded-full text-center h-[48px] px-7 w-full md:w-auto hover:bg-white hover:text-black transition-[all] duration-300 ease-out"
                    >
                      Create your account
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}
