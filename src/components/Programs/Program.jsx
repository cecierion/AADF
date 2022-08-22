import React from "react";
import { BsArrowRight } from 'react-icons/bs';

const Program = () => {
    return (
        <div className="flex flex-col justify-center items-center w-11/12 md:w-7/12  mx-auto mt-48 ">
            <h2 className="text-[#662773] text-3xl font-bold mb-5">Our programs</h2>
            <p className="text-center text-xl font-normal">The AADF mission is to assist the development of a sustainable private sector economy and
                democracy in Albania. AADF operates in four broad sectors where sustainable change can be created
                by the introduction of the new models, innovative ideas with maximum transparency and first-class professionalism.</p>
            <div className="flex items-end justify-center md:justify-start mt-5">
                <a className="pl-10 text-[#D72655] font-bold text-xl     mr-3" href="/">See all programs </a>
                <BsArrowRight className="text-[#D72655]" />
            </div>
        </div>
    )
};

export default Program;