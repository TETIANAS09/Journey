import React from "react";
import { TbWorldSearch } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="container flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold relative z-20 text-xs sm:text-sm md:text-lg"
      >
        <a href="#about">About</a>
        <a href="#explore">Explore</a>
        <div className="text-stone-200">
          <TbWorldSearch size={35} />
        </div>
        <a href="#journal">Journal</a>
        <a href="#search">Search</a>
      </nav>
    </>
  );
};

export default Navbar;
