import React from "react";
import { Programs } from "../../utils/dummyData";

const ProgramTypes = () => (
  <div className="container mx-auto flex flex-col md:flex-row justify-center items-center my-36">
    {Programs.map((program) => (
      <div className="mt-7 md:mt-0 md:w-1/4 md:px-5">
        <h3 className="text-4xl text-wrap text-center text-[#1D61A1] font-normal">
          {program.title}
        </h3>
        <p className="text-center text-lg font-light  text-[#2B9BD7] mt-7">
          {program.description}
        </p>
      </div>
    ))}
  </div>
);

export default ProgramTypes;
