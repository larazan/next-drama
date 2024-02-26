import React from "react";

import SortNation from "./SortNation";
import SortGeneral from "./SortGeneral";

import SortIndividu from "./SortIndividu";

const FilterPerson = () => {
  return (
    <>
      <div className="py-3 md:py-1 pt-5 md:pb-5 col-span-full col-start-1 flex flex-col  gap-4 md:col-start-52 md:flex-nowrap xl:col-start-4 xl:col-end-12 ">
        <div className="flex flex-col space-y-2"> 
          <div className="text-white font-bold text-lg">Full List of All TV Shows Available Streaming</div>
          <span className="text-md text-[#aaaaaa] font-semibold leading-tight">Wondering where you can watch that TV show streaming online? Below is every TV show available to stream online. By default, the list is ranked by popularity, but you can filter by Reelgood score, IMDB rating, release year, or streaming service to find what to watch faster.</span>
        </div>
        <div className="py-3 md:py-1 pt-5 md:pb-5 col-span-full col-start-1 flex flex-wrap items-center justify-between gap-2 md:col-start-52 md:flex-nowrap xl:col-start-4 xl:col-end-12">
        <div className="flex space-x-2">
      
            <SortIndividu />
            <SortNation />
        </div>
        
        <SortGeneral />
        {/* <span className="text-xs text-gray-500">
          showing 1-20 of 583 results
        </span> */}
      </div>
      </div>
    </>
  );
};

export default FilterPerson;
