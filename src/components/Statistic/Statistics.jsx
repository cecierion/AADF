import React from "react";
import { StatisticData } from "../../utils/dummyData";

const Statistics = () => {
  const Statistic = StatisticData.map((data) => (
    <div className="pt-5 ">
      <h2 className="text-[#1D61A1] text-center text-7xl font-bold px-auto">
        {data.number}
      </h2>
      <p className="text-[#2B9BD7] text-center pt-5 text-sm font-light">
        {data.descripton}
      </p>
    </div>
  ));
  return (
    <div className="container  mx-auto flex flex-col md:flex-row md:h-36 justify-between  items-center mt-5 md:mt-36">
      {Statistic}
    </div>
  );
};

export default Statistics;
