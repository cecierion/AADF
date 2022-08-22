import React from "react";
import Partner from "./Partner";
import USAID from "../../assets/Partners/USAID.png";
import AAEF from "../../assets/Partners/AAEF.png";
import JA from "../../assets/Partners/JA1.png";
import LEAD from "../../assets/Partners/LEAD.png";
import protik from "../../assets/Partners/protik.png";
import AlbPrime from "../../assets/Partners/AlbPrime.png";

const PartnerSection = () => {
  return (
    <div className=" container mx-auto flex flex-col justify-center  mt-48 ">
      <div className="flex flex-col  justify-center items-center mx-auto max-w-2xl mb-36 ">
        <h2 className="text-[#662773] text-4xl font-bold">Partners</h2>
        <p className="text-center mt-5	text-lg font-normal text-[#272A5F]">
          The AADF is a direct implementation organization focused on the
          development of a sustainable private sector economy and a democratic
          society in Albania.
        </p>
      </div>
      <div className="flex flex-wrap justify-around items-center w-[1430]">
        <Partner img={USAID} />
        <Partner img={protik} />
        <Partner img={AAEF} />
        <Partner img={AlbPrime} />
        <Partner img={LEAD} />
        <Partner img={JA} />
      </div>
    </div>
  );
};

export default PartnerSection;
