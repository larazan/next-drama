import React from "react";

import SortSelect from "./SortSelect";
import SortStatus from "./SortStatus";
import SortNation from "./SortNation";
import SortGeneral from "./SortGeneral";
import SortGenre from "./SortGenre";

const FilterMovie = () => {
  return (
    <>
      <div className="py-3 md:py-1 pt-5 md:pb-5 col-span-full col-start-1 flex flex-wrap items-center justify-between gap-2 md:col-start-52 md:flex-nowrap xl:col-start-4 xl:col-end-12 ">
        <div className="flex space-x-2">
            <SortGenre />
            <SortNation />
            <SortStatus />
        </div>

        
        <SortGeneral />
        {/* <span className="text-xs text-gray-500">
          showing 1-20 of 583 results
        </span> */}
      </div>
    </>
  );
};

export default FilterMovie;
