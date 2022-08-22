import React from "react";

const navs = ["Program", "News", "About"];

const Nav = () => {
  const ListNavs = navs.map((nav) => (
    <li className="pl-14 text-xl font-normal  text-[#6B7280] ">{nav}</li>
  ));

  return (
    <div>
      <ul className="hidden md:flex items-center">{ListNavs}</ul>
    </div>
  );
};

export default Nav;
