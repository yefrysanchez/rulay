import React from "react";

const Navbar = () => {
  return (
    <nav className=" mx-auto md:backdrop-blur-sm fixed top-0 left-0 w-full flex items-center justify-between px-8 py-2 z-50">
        <a href="#">
          <h1 className="font-MrDafoe text-5xl text-cyan-500 bg-white px-4 py-2 rounded-lg">Rulay</h1>
        </a>
        <ul className="md:flex md:gap-4 text-white">
            <li className="md:hover:text-cyan-500">Home</li>
            <li className="md:hover:text-cyan-500">Destinations</li>
            <li className="md:hover:text-cyan-500">Food</li>
            <li className="md:hover:text-cyan-500">Contact</li>
        </ul>
    </nav>
  );
};

export default Navbar;
