import React from "react";
import logo from "../../assets/logo.png";

import Nav from "./Nav";
import IconList from "./Icon/IconList";

const Navbar = () => {
  return (
    <nav className="container relative mx-auto md:absolute  left-0 right-0 flex justify-between md:justify-start md:space-x-1.5 items-center h-16 ">
      <img src={logo} alt="logo" />
      <Nav />
      <IconList />
    </nav>
  );
};

export default Navbar;
