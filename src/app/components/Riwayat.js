import React from "react";
import Link from "next/link";

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
                      <p className="text-sm leading-none text-white">Role</p>
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
                          <p className="text-sm font-semibold leading-none text-[#0776df]">
                            {data.role}
                          </p>
                        </div>
                        <div className="flex justify-center2 items-center">
                          <span className="text-sm text-gray-400 capitalize2">
                            {data.episode} episode
                          </span>
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
  );
};

export default Riwayat;
