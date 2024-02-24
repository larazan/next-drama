import React from 'react'
import Link from 'next/link'


const Riwayat = () => {
  const riwayatData = [
    {
      title: "Queen of Tears",
      episode: 16,
      role: "Hong Hae-in",
      year: 2024,
    },
    {
      title: "My Liberation Notes",
      episode: 16,
      role: "Yeom Mi-jeong",
      year: 2022,
    },
    {
      title: "Lovestruck in the City",
      episode: 17,
      role: "Lee Eun-oh",
      year: 2020,
    },
    {
      title: "Arthdal Chronicles",
      episode: 18,
      role: "Tanya",
      year: 2019,
    },
    {
      title: "Mr. Sunshine",
      episode: 1,
      role: "Ae-Shin's mother",
      year: 2018,
    },
    {
      title: "Detective K: Secret of the Living Dead",
      episode: false,
      role: "Yeo-joo",
      year: 2018,
    },
    {
      title: "Fight For My Way",
      episode: 16,
      role: "Choi Ae-ra",
      year: 2017,
    },
    {
      title: "Descendants of the Sun",
      episode: 16,
      role: "Yoon Myung-joo",
      year: 2016,
    },
    {
      title: "One Sunny Day",
      episode: 10,
      role: "The Girl",
      year: 2014,
    },
    {
      title: "One Sunny Day",
      episode: false,
      role: "Kim Ji Ho",
      year: 2014,
    },
    {
      title: "Gap Dong",
      episode: 20,
      role: "Ma Ji-wool",
      year: 2014,
    },
  ]

  return (
    <>
        <div className="w-full px-0">
            <div className="bg-white md:shadow-sm md:shadow-gray-500/50">
              <div className="mt-4 overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                  <thead>
                    <tr
                      tabindex="0"
                      className="focus:outline-none h-16 border border-gray-100 rounded"
                    >
                      <th className="px-1">
                        <div className="flex justify-center items-center">
                          <p className="text-sm leading-none text-gray-600 mr-2">
                            Year
                          </p>
                        </div>
                      </th>
                      <th className="px-12">
                        <div className="flex justify-center items-center">
                          <p className="text-sm leading-none text-gray-600">
                            Title
                          </p>
                        </div>
                      </th>
                      <th className="px-4">
                        <div className="flex justify-center items-center">
                          <p className="text-sm leading-none text-gray-600">
                            Role
                          </p>
                        </div>
                      </th>
                      <th className="px-4">
                        <div className="flex justify-center items-center">
                          <p className="text-sm leading-none text-gray-600">
                            Rating
                          </p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   
                    <tr
                      tabindex="0"
                      className="focus:outline-none h-16 border border-gray-100 rounded"
                    >
                      <td className="">
                        <div className="flex justify-center items-center ">
                          <p className="text-sm leading-none text-gray-600 mr-2">
                            2019
                          </p>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex justify-center items-center">
                          <p className="text-sm font-semibold leading-none text-[#3b86c4]">
                            Parasite
                          </p>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex-col">
                          <div className="flex justify-center items-center">
                            <p className="text-sm font-semibold leading-none text-[#3b86c4]">
                              Mr. Kim
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <span className="text-sm text-gray-400 capitalize">
                              Main Role
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex-col hidden md:block">
                          <div className="flex justify-center items-center">
                            <span className="text-[#ffd600] text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </span>
                            <span className="text-[#ffd600] text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </span>
                            <span className="text-[#ffd600] text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </span>
                            <span className="text-[#ffd600] text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </span>
                            <span className="text-[#ffd600] text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </span>
                          </div>
                          <div className="flex items-center justify-center ">
                            <span className="text-xs">9.0</span>
                          </div>
                        </div>
                        <div className='flex md:hidden justify-center w-full'>
                        <div className="h-8 w-8 rounded-full bg-[#0e2439]">
                            
                            
                          </div>
                        </div>
                        
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </>
  )
}

export default Riwayat