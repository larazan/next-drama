import React from "react";
import Link from "next/link";
import Image from "next/image";

import DropMenu from "./DropMenu";

import logo from "@/assets/img/download.svg";

const Footer = () => {
  return (
    <>
      {/* <footer
        aria-label="Site Footer"
        className="bg-[#313131] lg:grid lg:grid-cols-5"
      >
        <div className=" mx-auto md:w-11/12 px-4  sm:px-6  py-7 text-white md:px-3 md:py-14 lg:px-0">
          <nav className="grid-container md:flex md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-10">
            <div className=" mb-7 flex flex-col items-center justify-center md:mb-0 md:w-full md:flex-row md:justify-start lg:w-auto lg:flex-col xl:w-full xl:flex-row 3xl:w-auto 3xl:flex-col ">
              <Image src={logo} alt="" className="w-40" />
              
            </div>
            <div className="hidden flex-none flex-col justify-start gap-3 px-3 md:flex md:px-0">
              <span className="font-bold">Shop</span>
              <ul className="space-y-1">
                <li>
                  <Link className="md:hover:underline" href="/shop">
                    Bestseller
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:hover:underline"
                    href="/collection"
                  >
                    Hair Care
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:hover:underline"
                    href="/collection"
                  >
                    Body Care
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:hover:underline"
                    href="/collection"
                  >
                    Skincare
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:hover:underline"
                    href="/collection"
                  >
                    Gifts
                  </Link>
                </li>
              </ul>
              <span className="mt-4 font-bold">My account</span>
              <ul>
                <li>
                  <Link className="md:hover:underline" href="/login">
                    Log in
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden flex-none flex-col justify-start gap-3 px-3 md:flex md:px-0">
              <span className="font-bold">Customer service</span>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/faqs"
                    className="md:hover:underline"
                    rel="noreferrer noopener"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="md:hover:underline"
                    rel="noreferrer noopener"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    className="md:hover:underline"
                    rel="noreferrer noopener"
                  >
                    Payments
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="md:hover:underline"
                    rel="noreferrer noopener"
                  >
                    Transport and delivery
                  </a>
                </li>
                <li>
                  <Link className="md:hover:underline" href="/">
                    Guarantee
                  </Link>
                </li>
                <li>
                  <Link
                    href="/return"
                    className="md:hover:underline"
                    rel="noreferrer noopener"
                  >
                    Return policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden flex-none flex-col justify-start gap-3 px-3 md:flex md:px-0">
              <span className="font-bold">About </span>
              <ul className="space-y-1">
                <li>
                  <a className="md:hover:underline" href="/">
                    Giftcard
                  </a>
                </li>
                <li>
                  <Link className="md:hover:underline" href="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <a
                    className="md:hover:underline"
                    href="/"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:underline"
                    href="/"
                  >
                    Meet the creators
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/">
                    B2b
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:underline"
                    href="/"
                  >
                    Collaborations{" "}
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/">
                    Press
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/">
                    Job opportunities
                  </a>
                </li>
              </ul>
            </div>

            <Link
              className=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden "
              href="/collection"
            >
              All houseplants
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
            <Link
              className=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden "
              href="/collection"
            >
              All Baby houseplants
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
            <div className="md:hidden" data-headlessui-state="">
              <DropMenu title="Customer service" bg="000000">
                <div className="overflow-hidden pb-0">
                  <div className="duration-300 px-0 pb-2">
                    <ul className="flex flex-col flex-nowrap justify-start gap-2 px-6 py-3 text-white">
                      <li>
                        <Link
                          href="/faqs"
                          className="md:hover:underline"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Frequently asked questions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="md:hover:underline"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="md:hover:underline"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Payments
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="md:hover:underline"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Transport and delivery
                        </a>
                      </li>
                      <li>
                        <a className="md:hover:underline" href="/">
                          Guarantee
                        </a>
                      </li>
                      <li>
                        <Link
                          href="/return"
                          className="md:hover:underline"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Return policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </DropMenu>
            </div>
            <div className="md:hidden" data-headlessui-state="">
              <DropMenu title="About Autocar" bg="000000">
                <div className="overflow-hidden pb-0">
                  <div className="duration-300 px-0 pb-3">
                    <ul className="flex flex-col flex-nowrap justify-start gap-2 px-6 py-3 text-white">
                      <li>
                        <a
                          className="md:hover:underline text-white"
                          href="/"
                        >
                          Giftcard
                        </a>
                      </li>
                      <li>
                        <Link className="md:hover:underline" href="/about">
                          About us
                        </Link>
                      </li>
                      <li>
                        <a
                          className="md:hover:underline"
                          href="/"
                        >
                          Sustainability
                        </a>
                      </li>
                      <li>
                        <a
                          className="md:hover:underline"
                          href="/"
                        >
                          Meet the creators
                        </a>
                      </li>
                      <li>
                        <a className="md:hover:underline" href="/">
                          B2b
                        </a>
                      </li>
                      <li>
                        <a
                          className="md:hover:underline"
                          href="/"
                        >
                          Collaborations{" "}
                        </a>
                      </li>
                      <li>
                        <a className="md:hover:underline" href="/">
                          Press
                        </a>
                      </li>
                      <li>
                        <a className="md:hover:underline" href="/">
                          Job opportunities
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </DropMenu>
            </div>
            <Link
              className="flex w-full flex-row items-center justify-between border-b border-t border-black/30 px-3 py-2 md:hidden md:hover:underline"
              href="/login"
            >
              Log in
            </Link>
            <div className="flex flex-none flex-col justify-start gap-2 px-3 md:px-0">
              <div className="mt-4 flex flex-row justify-between gap-4 md:mt-0 md:flex-col">
                <div className="flex flex-col justify-start gap-1 md:gap-4">
                  <span className="order-2 font-bold md:order-1">SOSMED</span>
                </div>
                <ul className="flex flex-row flex-wrap justify-end gap-4 md:flex-nowrap md:justify-start">
                  <li>
                    <a
                      href="https://www.facebook.com/PLNTScom"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="follow PLNTS.com on facebook"
                    >
                      <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white text-black">
                        <svg
                          className="w-[20px] fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path d="M23.738.214v4.714h-2.804c-1.023 0-1.714.214-2.071.643s-.536 1.071-.536 1.929v3.375h5.232l-.696 5.286h-4.536v13.554h-5.464V16.161H8.309v-5.286h4.554V6.982c0-2.214.62-3.932 1.857-5.152S17.607 0 19.666 0c1.75 0 3.107.071 4.071.214z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/plnts_com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="follow PLNTS.com on pinterest"
                    >
                      <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-brand-instagram"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                          <path d="M16.5 7.5l0 .01" />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/@plnts_com"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="follow PLNTS.com on YouTube"
                    >
                      <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-brand-twitter-filled w-[20px]"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                            strokeWidth="0"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@plnts.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="follow PLNTS.com on TikTok"
                    >
                      <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white text-black">
                        <svg
                          className="w-[20px] fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path d="M30,13.119C27.249,13.126 24.564,12.268 22.327,10.666L22.327,21.836C22.325,27.408 17.739,31.992 12.168,31.992C6.594,31.992 2.008,27.406 2.008,21.833C2.008,16.259 6.594,11.673 12.168,11.673C12.634,11.673 13.1,11.705 13.563,11.769L13.563,17.388C13.11,17.245 12.638,17.173 12.163,17.173C9.605,17.173 7.499,19.278 7.499,21.836C7.499,24.395 9.605,26.5 12.163,26.5C14.722,26.5 16.827,24.395 16.827,21.836C16.827,21.836 16.827,21.836 16.827,21.836L16.827,0L22.327,0C22.323,0.464 22.362,0.928 22.443,1.386C22.829,3.448 24.049,5.263 25.813,6.399C27.054,7.221 28.511,7.658 30,7.658L30,13.119Z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="mb-3 flex flex-row flex-wrap justify-between gap-2 border-b border-primary pb-4 md:mb-0 md:flex-col md:justify-start md:gap-1 md:border-none md:pb-0">
                <li>
                  <a
                    className="font-bold text-primary md:hover:underline"
                    href="https://www.instagram.com/explore/tags/plnts/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="find all #PLNTS messages on instagram"
                  >
                    #AUTOCAR
                  </a>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>
      </footer> */}

      <section className="relative isolate bg-[#0a1016] mx-auto min-h-fit w-full py-12 grid max-w-screen-xl grid-cols-2 gap-10 px-8 pb-12 pt-20 text-lg lg:grid-flow-col lg:grid-cols-none">
        <div className="order-1 flex flex-col items-end justify-end text-right lg:order-none lg:col-span-3 lg:items-start lg:justify-start lg:text-left">
          <Image
            src={logo}
            className="transition-[filter] duration-300"
            alt="Wander"
            width="128"
            height="29.05"
          />
          <p className="mt-2 whitespace-nowrap text-sm text-white">
            Find your happy place™
          </p>
          <p className="text-4-light-grey mt-4 whitespace-nowrap text-sm text-white">
            © 2024 Wander.com, Inc.
          </p>
          <div className="flex gap-6 -order-1 mb-10 mt-24 lg:order-none items-center">
            <a
              className="text-3xl hover:underline text-white"
              href="https://x.com/wander"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            </a>
            <a
            className="text-3xl hover:underline text-white"
              href="https://www.instagram.com/wander"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
            </a>
            <a
            className="text-3xl hover:underline text-white"
              href="https://www.tiktok.com/@wander"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tiktok"
            >
              <svg
                        aria-hidden="true"
                        focusable="false"
                        className="icon icon-tiktok w-5 h-5"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                        ></path>
                      </svg>
            </a>
            <a
            className="text-3xl hover:underline text-white"
              href="https://www.youtube.com/c/WanderHQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" /></svg>
            </a>
            <a
            className="text-3xl hover:underline text-white"
              href="https://www.linkedin.com/company/wandercom/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                        aria-hidden="true"
                        focusable="false"
                        className="icon icon-facebook w-5 h-5"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                      </svg>
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm mb-4 text-white/60">FOR GUESTS</div>
          <ul className="space-y-6 text-base text-white">
            <li>
              <a href="/blog" target="_self">
                Blog
              </a>
            </li>
            <li>
              <a href="https://www.wander.com/local" target="_blank">
                Local
              </a>
            </li>
            <li>
              <a href="/help" target="_self">
                FAQs
              </a>
            </li>
            <li>
              <a href="/terms" target="_self">
                Terms
              </a>
            </li>
            <li>
              <a href="mailto:hello@wander.com" target="_blank">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm mb-4 text-white/60">FOR PARTNERS</div>
          <ul className="space-y-6 text-base text-white">
            <li>
              <a href="/operated" target="_self">
                Wander Operated
              </a>
            </li>
            <li>
              <a href="/own" target="_self">
                Own With Wander
              </a>
            </li>
            <li>
              <a href="/events" target="_self">
                Wander Events
              </a>
            </li>
            <li>
              <a href="/ambassadors" target="_self">
                Ambassadors
              </a>
            </li>
            <li>
              <a href="owner-faq" target="_self">
                Owner FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm mb-4 text-white/60">FOR EVERYONE</div>
          <ul className="space-y-6 text-base text-white">
            <li>
              <a href="/about" target="_self">
                About
              </a>
            </li>
            <li>
              <a href="/careers" target="_self">
                Careers
              </a>
            </li>
            <li>
              <a href="/press" target="_self">
                In the press
              </a>
            </li>
            <li>
              <a href="/privacy" target="_self">
                Privacy
              </a>
            </li>
          </ul>
          <button
            className="mt-6 text-base"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:Rv9mla:"
            data-state="closed"
          >
            See more
          </button>
        </div>
      </section>
    </>
  );
};

export default Footer;
