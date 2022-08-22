import React from "react";

const Partner = (props) => {
  return (
    <div className=" w-[184px] h-[184px] mt-5  flex justify-center items-center rounded-full shadow-2xl">
      <img src={props.img} alt="pros.img" />
    </div>
  );
};

export default Partner;
