import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import GoTop from "@/app/components/GoTop";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import bg from "@/assets/img/blog.jpg";
import RelatedArticle from "@/app/components/RelatedArticle";
import Help from "@/app/components/Help";
import Tags from "@/app/components/Tags";
import ShareIt from "@/app/components/ShareIt";
import Author from "@/app/components/Author";
import BreadcrumbArticle from "@/app/components/BreadcrumbArticle";
import AuthorBubble from "@/app/components/AuthorBubble";

import img from "@/assets/details/taxi.png";
import ava from "@/assets/img/ava1.svg";
import NewsFeed from "@/app/components/NewsFeed";

export default function Detail() {
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
      
      

      {/* <div className="flex flex-col bg-white min-h-screen ">
        <div className="flex flex-col space-y-1 py-2 md:py-4 mx-auto w-11/12">
          <BreadcrumbArticle />
          <h1 className="text-4xl font-bold md:leading-9 text-black">
          2024 Ford Mustang Mach-E GT Joins The Bronze Age
          </h1>
          <div className="flex flex-col space-y-1">
           
            <AuthorBubble />
            <span className="text-xs text-gray-900">January 6, 2024</span>
          </div>
        </div>
        <div className="relative2 z-0 mx-auto w-11/12 overflow-hidden bg-grayish h-[230px] md:h-[363px]">
          <Image src={bg} alt="" className=" object-cover h-full" />
        </div>

        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center relative">
            <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
              <section className="w-full mx-auto  mt-0 md:mt-0 px-5 markdown-blog">
                <article>
                  <p>
                    Peace lilies are a highly popular houseplant, both for their
                    foliage and flowers.
                  </p>
                  <p>
                    These plants don’t require a huge amount of maintenance and
                    are relatively resistant to pests and disease when properly
                    tended to.
                  </p>
                  <p>
                    However, they’re prone to illness and infestations when
                    improperly watered.
                  </p>
                  <p>
                    As overwatering is perhaps the single biggest mistake plant
                    lovers make regularly, it’s essential to know the signs of
                    overwatering, address them, and what to do in severe cases.
                  </p>
                  <h2>6 Signs Of Overwatered Peace Lily</h2>
                  <p>
                    The following symptoms don’t always equate to overwatering
                    but are a good indicator. Try to eliminate other possible
                    causes of these signs and follow the remedies we’ve included
                    to solve each symptom.
                  </p>
                  <h3>Soggy Soil</h3>
                  <p>
                    Perhaps the single most obvious sign of overwatering is the
                    soil itself. You should never see puddles forming, nor
                    should the soil feel squishy to the touch.
                  </p>
                  <p>
                    Additionally, many factors affect how much and how often
                    your plant will drink, so watering on a schedule is one of
                    the worst things you can do. The soak-and-dry method is
                    perhaps the most effective way to water plants, with few
                    exceptions.
                  </p>
                  <p>Follow these steps:</p>
                  <ol className="list-disc">
                    <li>
                      Simply stick your finger in the soil to judge how far down
                      it feels dry.
                    </li>
                    <li>
                      Water for peace lilies when it feels dry 2″ inches down.
                    </li>
                    <li>
                      Always water slowly, working your way around the pot and
                      doing your best not to get the leaves wet.
                    </li>
                    <li>
                      Stop watering when you see moisture seeping from the
                      drainage holes, or the surface can no longer absorb at the
                      same speed you’re pouring.
                    </li>
                  </ol>
                  <h3>Yellowing Leaves</h3>
                  <p>
                    In the language of plants, this sign is the equivalent of a
                    human saying, “I don’t feel so well.” However, it’s not
                    difficult to verify this is being caused by overwatering by
                    checking the soil when you see yellowing leaves.
                  </p>
                  <p>
                    Some other common causes of yellow leaves include the
                    following:
                  </p>

                  <ol className="list-disc">
                    <li>Sunburn</li>
                    <li>Infestations</li>
                    <li>Root rot</li>
                  </ol>
                  <p>
                    Follow the soil care guide below once you confirm the
                    problem is being caused by overwatering. Chances are, many
                    of the leaves will regain their color, but some may be too
                    far gone and will need to be pruned away.
                  </p>
                  <h3>Blisters</h3>
                  <p>
                    When you spend too long in a tub or pool, your skin will
                    become so saturated that it wrinkles. Plants suffer a
                    similar condition called edema, in which the roots are
                    drawing more water than the plant can use.
                  </p>
                  <p>
                    As a result, the excess water fills leaf cells until they
                    burst, causing blister-like abscesses that can be found
                    mainly on the undersides of the leaves.
                  </p>
                  <p>
                    This is one of those conditions where you will likely need
                    to repot the plant. The blisters can eventually burst, and
                    you may find it necessary to prune away the worst leaves.
                  </p>

                  <h3>Brown Or Black Leaf Tips</h3>
                  <p>
                    Commonly associated with chemical burns from fertilizers or
                    sunburn, brown to black lea tips may also be related to
                    overwatering.
                  </p>
                  <p>
                    Unfortunately, this damage cannot be reversed. Some
                    yellowing and black means that part of the plant has turned
                    necrotic. The only treatment for this symptom is to remove
                    the damaged leaves.
                  </p>
                  <h3>Fungus Gnats Or Oddly-Tinted Soil</h3>
                  <p>
                    Fungus gnats are tiny insects that serve as pollinators for
                    some plants but are largely pests. These little guys can be
                    a sign of overwatering, as the larvae feed on soil-based
                    fungi.
                  </p>
                  <p>
                    Depending on the fungus, you might not be able to see it, or
                    you might see a greenish tint or gray to white cottony film
                    on the surface.
                  </p>
                  <p>
                    These problems can often be solved using a neem soil soak
                    and possibly also fungicide (although neem oil will kill
                    some forms of fungus).
                  </p>
                  <h3>Root Rot</h3>
                  <p>
                    Root rot is the worst-case scenario, and it can kill your
                    plant if left untreated. In addition to yellowed, droopy
                    leaves, you’ll likely smell a foul odor coming from the
                    soil. Either bacteria or fungus may cause root rot, so you
                    can’t rely on fungicides to treat it.
                  </p>
                  <p>
                    You’ll have to dig up the plant, remove the damaged roots,
                    sterilize the surviving roots, and plant it in a fresh pot
                    with fresh soil to treat root rot.
                  </p>
                  <p>
                    Note that neem soil soaks have been known to help fight off
                    both bacterial and fungal root rot in its early stages but
                    will not be able to save a plant once the condition begins
                    to worsen.
                  </p>

                  <h2>How To Treat Severe Overwatering?</h2>
                  <p>
                    In most of the above cases, you can stop watering to allow
                    the soil to dry out, but what happens when the damage is a
                    bit more severe, or the plant has been overwatered
                    repeatedly?
                  </p>
                  <p>
                    Treating severe overwatering means acting fast and
                    completely repotting the plant.
                  </p>

                  <h3>Step 1: Remove The Wet Soil</h3>
                  <p>
                    Tip the pot over and slide the plant out, gently removing as
                    much dirt from the roots as possible. Now is a good time to
                    check for root rot and treat it, if necessary. It’s often
                    good to let the plant dry out a little for 8 hours (or
                    overnight) in a warm, dry spot.
                  </p>
                  <h3>Step 2: Prepare A New Container</h3>
                  <p>
                    If your old pot has adequate drainage holes, you can soak it
                    in a solution of 1 part bleach to 9 parts water for 30
                    minutes and allow it to dry.
                  </p>
                  <p>
                    Otherwise, you’ll want to get a new container, making sure
                    the drainage holes are large enough and that the pot isn’t
                    too big or small for your plant.
                  </p>
                  <p>
                    To help ensure the best drainage, ad a ½ to 1” inch layer of
                    gravel or aquarium stones to the bottom of the pot.
                  </p>
                  <h3>Step 3: Prepare The Soil</h3>
                  <p>Here are the steps to prepare the soil:</p>

                  <ol className="list-disc">
                    <li>
                      Now you’ll want to add some fresh soil to the container.
                      Don’t use the old soil, as it’s likely contaminated.
                    </li>
                    <li>
                      Mix some perlite or coarse sand into the soil to help
                      ensure it remains loose, as compacted soil can contribute
                      to overwatering issues.
                    </li>
                    <li>
                      Add the soil to the container and give it a light
                      watering.
                    </li>
                  </ol>
                  <p>
                    You only need enough to get the soil slightly damp to help
                    things settle.
                  </p>

                  <h3>Step 4: Replant Your Peace Lily</h3>
                  <p>
                    Once the pot and soil are ready, you can replant your lily.
                    Ensure it’s planted at the same depth as before and give it
                    another light watering.
                  </p>
                  <p>
                    Note that the plant needs LESS water if you group it with
                    other plants, as over 97% percent of the water it absorbs is
                    used in transpiration (essentially sweating to improve local
                    humidity levels).
                  </p>
                  <p>
                    Grouped plants share the benefits of transpiration, reducing
                    the amount of water they need.
                  </p>
                  <p>
                    As long as you use the soak-and-dry method to water your
                    peace lily, overwatering should become a thing of the past.
                  </p>
                </article>
              </section>

              <Help />

              
              <div className="px-6 md:px-4 pt-4">
                <span className=" text-sm italic text-gray-900">
                  A version of this article was originally written by Clare
                  McHugh and first appeared on Health.com.
                </span>
              </div>
              <div className="md:text-sm text-gray-500 px-6 md:px-4 pb-3 font-mabry">
                Source:{" "}
                <a
                  href="https://mydramalist.com/article/an-ultra-fan-guide-to-lee-elijah"
                  className="italic underline font-mabryitalic"
                >
                  https://mydramalist.com/article/an-ultra-fan-guide-to-lee-elijah
                </a>
              </div>

              <Author />
              
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-1 w-full items-center justify-center relative">
            <div className="flex flex-1 pb-18 max-w-sm md:max-w-2xl ">
              <RelatedArticle />
            </div>
          </div>
        </div>
      </div> */}

      <main>
        <section className="bg-[#f5f6ff] pt-6 min-h-screen text-black">
          <section>
            <div className="container mx-auto px-7 md:max-w-3xl md:px-0">
            <BreadcrumbArticle />
              <slot>
                <div className="relative mx-auto h-full max-w-3xl">
                  <div className="flex h-full flex-col">
                    <div className="flex flex-wrap justify-start gap-3">
                      <slot>
                        <slot>
                          <a href="/blog/help-center">
                            <div className="jutify-center flex h-[25px] w-full items-center rounded-full bg-pink-300 px-3.5 py-2 transition duration-300 ease-in-out hover:bg-pink-400">
                              <span className="w-full text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70">
                                Help Center
                              </span>
                            </div>
                          </a>
                        </slot>
                      </slot>
                    </div>
                    <h1 className="mb-3 mt-5 font-display text-3xl text-black md:mb-8 md:text-6xl">
                      Why We Don’t Offer Early Check-in or Late Check-Out (Yet)
                    </h1>
                    <p className="mb-5 text-sm leading-6 text-gr-300 opacity-80 md:text-lg md:leading-7">
                      Why we cannot offer early check-in or late check-out (we
                      can always find you restaurants and sometimes offer trip
                      extensions though)
                    </p>
                    <div className="grid grid-flow-col items-center justify-between gap-4">
                      <div className="flex">
                        <div className="relative h-8 w-8 flex-shrink-0 md:h-9 md:w-9">
                          <Image
                            src={ava}
                            alt=""
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-2 flex flex-col md:ml-4">
                          <a
                            href="#"
                            className="cursor-default text-sm font-medium"
                          >
                            Rachel{" "}
                          </a>
                          <span className="hidden text-sm md:inline">
                            December 18, 2023
                          </span>
                          <span className="text-sm md:hidden">
                            follow us @wander on socials
                          </span>
                        </div>
                      </div>
                      <slot>
                        <slot>
                          <div className="grid grid-flow-col items-center gap-3">
                            <a
                              className="rounded-full bg-black p-2"
                              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.wander.com%2Farticle%2Fcheck-in-check-out-questions"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Share on Facebook"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                className="text-white md:text-lg"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                              </svg>
                            </a>
                            <a
                              className="rounded-full bg-black p-2"
                              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.wander.com%2Farticle%2Fcheck-in-check-out-questions&amp;title=Why%20We%20Don%E2%80%99t%20Offer%20Early%20Check-in%20or%20Late%20Check-Out%20(Yet)&amp;summary=Why%20we%20cannot%20offer%20early%20check-in%20or%20late%20check-out%20(we%20can%20always%20find%20you%20restaurants%20and%20sometimes%20offer%20trip%20extensions%20though)%20"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Share on LinkedIn"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                className="text-white md:text-lg"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                              </svg>
                            </a>
                            <a
                              className="rounded-full bg-black p-2"
                              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.wander.com%2Farticle%2Fcheck-in-check-out-questions&amp;text=Why%20We%20Don%E2%80%99t%20Offer%20Early%20Check-in%20or%20Late%20Check-Out%20(Yet)&amp;via=wander"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Share on Twitter"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                className="text-white md:text-lg"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                              </svg>
                            </a>
                            <a
                              className="rounded-full bg-black p-2"
                              href="mailto:?subject=Why%20We%20Don%E2%80%99t%20Offer%20Early%20Check-in%20or%20Late%20Check-Out%20(Yet)&amp;body=https%3A%2F%2Fwww.wander.com%2Farticle%2Fcheck-in-check-out-questions"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Share over email"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                className="text-white md:text-lg"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
                              </svg>
                            </a>
                          </div>
                        </slot>
                      </slot>
                    </div>
                    <div className="relative mt-10">
                      <Image
                        src={img}
                        alt=""
                        className="h-60 w-full rounded-sm object-cover md:h-40vh"
                      />
                    </div>
                  </div>
                </div>
              </slot>
              <div className="pt-5 md:pt-10 Article_content__D_prW markdown-blog">
                <p>
                  A behind the scenes into the logistics of making your stay,
                  and the next Wanderer’s stay as pleasant as
                  possible.&nbsp;&nbsp;
                </p>
                <p>
                  We know exactly what it&lsquo;s like. You arrive in an incredible
                  new town, and you’re excited to see the house! Or maybe you’re
                  cozied up in your warm bed, and never want to leave. Trust us,
                  we’ve been there, but in order to provide the best guest
                  experience, late check in, or checkout, isn’t something we
                  support (yet).&nbsp; So here’s a quick breakdown of why;
                  spoiler alert, it all has to do with creating the best guest
                  experience ever.&nbsp;
                </p>
                <p>
                  In order to ensure everything is spotless and organized,
                  our&nbsp; incredible local cleaning&nbsp; crews spend every
                  second of the 10am-4pm to clean the home, hang the robes, and
                  more.&nbsp; Unfortunately, if cleaning starts late, no one can
                  check in at 4pm that evening. Meaning that the entire night
                  would need to be taken to accommodate a late check-out. In
                  addition, all cleaning schedules are automatically booked the
                  moment you book your stay! As long as you’ve been planning
                  your trip, we’ve been planning to try and make it
                  perfect.&nbsp;
                </p>
                <p>
                  Cleaning is just the start. Things you love, like our&nbsp;
                  kitchens, pools, and more that aren&lsquo;t available in hotel
                  rooms, need specialized care to be scheduled. The maintenance
                  workers are local contractors who have their own schedules
                  with other clients, so if maintenance is scheduled in a gap,
                  often they cannot move last minute. There are also property
                  inspectors, landscapers, and countless others that are
                  coordinated harmoniously to try and make your trip
                  wonderful.&nbsp;
                </p>
                <p>
                  What we can offer: The concierge can always find activities or
                  restaurants to kill time before check-in or after check-out.
                  If you need access to the home later or earlier, if available,
                  we can extend your trip a day early or later depending on the
                  scheduling. Our goal is to give you your perfect trip, and
                  we’ll always do everything in our power to do so.&nbsp;
                </p>
                <p>24/7 Concierge: text: +1-737-377-3205</p>
                <p>
                  <br />
                  <br />
                </p>
              </div>
              <div>
                <div className="grid grid-flow-col gap-4"></div>
                <div className="mb-5 flex w-full items-center justify-between md:mb-0 md:justify-end">
                  <h3 className="mr-4 text-base font-extrabold md:hidden">
                    Share article
                  </h3>
                  <div className="grid grid-flow-col items-center gap-3">
                    <a
                      className="rounded-full bg-black p-2"
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.wander.com%2Farticle%2Fcheck-in-check-out-questions"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        className="text-white md:text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </a>
                    <a
                      className="rounded-full bg-black p-2"
                      href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.wander.com%2Farticle%2Fcheck-in-check-out-questions&amp;title=Why%20We%20Don%E2%80%99t%20Offer%20Early%20Check-in%20or%20Late%20Check-Out%20(Yet)&amp;summary=Why%20we%20cannot%20offer%20early%20check-in%20or%20late%20check-out%20(we%20can%20always%20find%20you%20restaurants%20and%20sometimes%20offer%20trip%20extensions%20though)%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="text-white md:text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                    <a
                      className="rounded-full bg-black p-2"
                      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.wander.com%2Farticle%2Fcheck-in-check-out-questions&amp;text=Why%20We%20Don%E2%80%99t%20Offer%20Early%20Check-in%20or%20Late%20Check-Out%20(Yet)&amp;via=wander"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-white md:text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </a>
                    <a
                      className="rounded-full bg-black p-2"
                      href="mailto:?subject=Why%20We%20Don%E2%80%99t%20Offer%20Early%20Check-in%20or%20Late%20Check-Out%20(Yet)&amp;body=https%3A%2F%2Fwww.wander.com%2Farticle%2Fcheck-in-check-out-questions"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share over email"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-white md:text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <RelatedArticle />
              <div className="pb-14 grid grid-cols-1 gap-16  md:grid-cols-2"></div>
            </div>
          </section>
        </section>
      </main>


      <Footer />
    </>
  );
}
