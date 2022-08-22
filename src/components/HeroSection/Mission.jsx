import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Mission = () => {
  return (
    <div className="container mx-auto flex flex-col md:justify-start md:items-start justify-center items-center md:-mt-40">
      <h3 className="text-4xl font-bold text-center md:text-left text-[#662773]">
        Our Mission
      </h3>
      <p className="md:w-1/2 text-[#272A5F font-normal py-5 text-lg] text-center md:text-left">
        The AADF mission is to assist the development of a sustainable private
        sector economy and democracy in Albania. AADF operates in four broad
        sectors where sustainable change can be created by the introduction of
        the new models, innovative ideas with maximum transparency and
        first-class professionalism.
      </p>
      <div>
        <a href="/" class="pr-2  inline-block text-[#D72655] text-sm font-bold">
          See all projects
        </a>
        <BsArrowRight className="inline-block text-sm font-bold" />
      </div>
    </div>
  );
};

export default Mission;
