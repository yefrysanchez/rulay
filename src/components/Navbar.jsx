import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // !nav? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'
  };

  return (
    <nav className="text-gray-200 w-full py-1  flex justify-between items-center fixed top-0 z-50 px-8">
      <a href="#" className=" z-20">
        <h1 className="font-MrDafoe text-5xl bg-cyan-600/30 text-white border px-4 py-2 rounded-lg">
          Rulay
        </h1>
      </a>
      <HiMenuAlt2
        onClick={handleNav}
        size={35}
        className=" lg:hidden inline-block cursor-pointer md:hover:text-cyan-500 transition-colors duration-200 z-20"
      />
      <div
        className={`${
          nav
            ? "opacity-100 transition-opacity duration-300"
            : "transition-opacity duration-300 opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100 "
        } fixed lg:static left-0 top-0 w-full lg:h-fit lg:f h-screen bg-black/70 lg:bg-transparent z-10 flex justify-end`}
      >
        <ul className="flex  flex-col lg:flex-row lg:static fixed lg:w-fit lg:h-fit w-full h-full items-center justify-evenly py-24 lg:py-0 font-bold text-4xl lg:text-base gap-4  p-8 ">
          <li onClick={()=> setNav(false)} className="md:hover:text-cyan-500 transition-colors duration-200 ">
            <a href="#home">Home</a>
          </li>
          <li onClick={()=> setNav(false)} className="md:hover:text-cyan-500 transition-colors duration-200">
            <a href="#destination">Destination</a>
          </li>
          <li onClick={()=> setNav(false)} className="md:hover:text-cyan-500 transition-colors duration-200">
            <a href="#food">Food</a>
          </li>
          <li onClick={()=> setNav(false)} className="md:hover:text-cyan-500 transition-colors duration-200">
            <a target="_blank" href="https://www.linkedin.com/in/yefrysanchez/">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
