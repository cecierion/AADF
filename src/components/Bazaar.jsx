import React from "react";
import bazaar from "../assets/bazaar.png"
import { BsArrowRight } from 'react-icons/bs';

const Bazaar = () =>{
    return(
        <div className="container mx-auto flex flex-col md:flex-row items-center mt-56">

            <img className="w-96 rounded-full  border-solid border-8 border-[#272A5F]" src={bazaar} alt="bazaar"/>

            <div className="w-96 md:w-7/12  ">

                <h3 className="text-2xl md:mtext-4xl text-center md:text-left pl-10 font-bold text-[#272A5F] mt-12 md:m-0">The AADF is a direct implementation organization focused on the development of a sustainable private sector economy and a democratic society in Albania.</h3>
               <div className="flex items-end justify-center md:justify-start ">
               <a className="pl-10 text-[#2B9BD7] font-bold text-xl mr-3" href="/">Learn who we are  </a>
               <BsArrowRight className="text-[#2B9BD7]" />
               </div>
            </div>

        </div>
    )
};

export default Bazaar;