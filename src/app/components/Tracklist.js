import React from "react";

const Tracklist = () => {
  const trackData = [
    {
      no: 1,
      title: "Respect",
    },
    {
      no: 2,
      title: "Drown In My Own Tears",
    },
    {
      no: 3,
      title: "I Never Loved A Man (The Way I Love You)",
    },
    {
      no: 4,
      title: "Soul Serenade",
    },
    {
      no: 5,
      title: "Don't Let Me Lose This Dream",
    },
    {
      no: 6,
      title: "Baby",
    },
  ];

  return (
    <>
      <div className="flex w-full py-5 pb-8  bg-[#0a1016]">
        <div className="container w-11/12 md:w-full mx-auto">
          <div className="row">
            <div className="w-full">
              <div className="flex items-center justify-between mt-5 mb-1 pb-2 border-b-2 border-[#31373b]">
                <h3 className="flex text-lg md:text-2xl text-white font-bold my-0">
                  Tracklist
                </h3>
              </div>
              <div className="pt-2 w-full h-full">
                <table className="table-tracklist w-full">
                  <tbody>
                    {trackData.map((data, index) => (
                      <tr key={index} className="border border-[#31373b] riwayat">
                        <td className="flex items-center justify-between px-3 h-11">
                          <div className="flex items-center">
                          <div className="flex feature-circle">
                            <div className="circle flex items-center justify-center">
                              <span className="circle-text font-bold text-black">
                                {data.no}
                              </span>
                            </div>
                          </div>
                          <span className="font-semibold text-white">
                            {data.title}
                          </span>
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-white">4:55</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracklist;
