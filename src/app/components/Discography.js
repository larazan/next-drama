import React from 'react'
import Link from 'next/link';

const Discography = () => {
    const riwayatData = [
        {
          title: "DDU-DU DDU-DU",
          episode: 16,
          album: "the album",
          year: 2020,
        },
        {
          title: "Forever Young",
          episode: 16,
          album: "the album",
          year: 2020,
        },
        {
          title: "Stay (Remix ver.)",
          episode: 17,
          album: "the album",
          year: 2020,
        },
        {
          title: "Whistle (휘파람)",
          episode: 18,
          album: "the album",
          year: 2020,
        },
        {
          title: "You & I + Only Look At Me (Rosé solo)",
          episode: 1,
          album: "the album",
          year: 2020,
        },
        {
          title: "Solo (Jennie solo)",
          episode: false,
          album: "the album",
          year: 2020,
        },
        {
          title: "Really (Reggae Ver.)",
          episode: 16,
          album: "the album",
          year: 2020,
        },
        {
          title: "See U Later",
          episode: 16,
          album: "the album",
          year: 2020,
        },
        {
          title: "Playing With Fire (불장난)",
          episode: 10,
          album: "the album",
          year: 2020,
        },
        {
          title: "Boombayah (붐바야)",
          episode: false,
          album: "the album",
          year: 2020,
        },
        {
          title: "As If It’s Your Last (마지막처럼)",
          episode: 20,
          album: "the album",
          year: 2020,
        },
      ];
  return (
    <>
      <div className="w-full px-0">
        <div className="bg-white md:shadow-sm md:shadow-gray-500/50">
          <div className="mt-4 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead className="w-full">
                <tr
                  tabindex="0"
                  className="w-full focus:outline-none h-12 border border-[#31373b] bg-[#282d32] rounded-lg"
                >
                  <th className="w-2/12 px-1">
                    <div className="flex justify-center items-center">
                      <p className="text-sm leading-none text-white mr-2">
                        Year
                      </p>
                    </div>
                  </th>
                  <th className="w-7/12 px-1">
                    <div className="flex justify-center2 items-center">
                      <p className="text-sm leading-none text-white">
                        Title
                      </p>
                    </div>
                  </th>
                  <th className="w-3/12 px-1">
                    <div className="flex justify-center2 items-center">
                      <p className="text-sm leading-none text-white">Album</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {riwayatData.map((data, index) => (
                  <tr
                    tabindex="0"
                    className="focus:outline-none h-14 border border-[#31373b] rounded bg-[#282d32] riwayat"
                    key={index}
                  >
                    <td className="">
                      <div className="flex justify-center items-center ">
                        <p className="text-sm leading-none text-white mr-2">
                          {data.year}
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-center2 items-center">
                        <Link href={"/"} className="hover:underline underline-[#0776df] underline-offset-2">
                        <p className="text-sm font-semibold leading-none text-[#0776df] hover:text-white">
                          {data.title}
                        </p>
                        </Link>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex-col">
                        <div className="flex justify-center2 items-center">
                          <p className="text-sm font-semibold leading-none capitalize text-[#0776df]">
                            {data.album}
                          </p>
                        </div>
                        
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Discography