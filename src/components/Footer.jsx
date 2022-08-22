import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container mx-auto border-solid border-[#9CA3AF] border-t-2 mt-48 py-8  flex flex-col md:flex-row justify-between items-center">
      <div className="flex justify-around items-center flex-col md:flex-row">
        <div className="flex items center">
          <TiSocialFacebook className="mr-4 text-xl text-[#6B7280]" />
          <AiOutlineInstagram className="mr-4 text-xl text-[#6B7280]" />
          <TiSocialLinkedin className="mr-4 text-xl text-[#6B7280]" />
          <TiSocialTwitter className="mr-4 text-xl text-[#6B7280]" />
          <TiSocialYoutube className="mr-4 text-xl text-[#6B7280]" />
        </div>
        <p
          className="text-[
#6B7280] text-sm font-normal text-center py-5 md:py-0"
        >
          Rr. Ibrahim Rugova "Green Park" Complex Tower 2, 12th Floor Tirana,
          Albania
        </p>
      </div>
      <p
        className="text-[
#6B7280] text-sm font-normal"
      >
        © 2020 Albanian-American Development Foundation
      </p>
    </div>
  );
};

export default Footer;
