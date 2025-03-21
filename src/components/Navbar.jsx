import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Destinations",
      link: "",
    },
    {
      title: "Things To Do",
      link: "",
    },
  ];

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // !nav? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'
  };

  const handleClick = (link) => {
    if(link === "Destinations" || link === "Things To Do") {
      toast.error("This feature is coming soon!", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <nav className="text-gray-200 w-full py-1 backdrop-blur-sm lg:backdrop-blur-none flex justify-between items-center fixed top-0 z-50 px-8">
        <a href="#" className=" z-20">
          <h1 className="font-MrDafoe text-5xl backdrop-blur-sm bg-cyan-600/30 text-white border px-4 py-2 rounded-lg">
            Rulay
          </h1>
        </a>
        <HiMenuAlt2
          onClick={handleNav}
          size={35}
          className=" lg:hidden text-amber-300 inline-block cursor-pointer md:hover:text-cyan-500 transition-colors duration-200 z-20"
        />
        <div
          className={`${
            nav
              ? "opacity-100 transition-opacity duration-300"
              : "transition-opacity duration-300 opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100 "
          }  fixed lg:static left-0 top-0 w-full lg:h-fit lg:f h-screen bg-black/80 backdrop-blur-sm lg:bg-gray-300/20 lg:w-fit lg:py-4 lg:rounded-xl z-10 flex justify-end`}
        >
          <ul className="flex  flex-col lg:flex-row lg:static fixed lg:w-fit lg:h-fit w-full h-full items-center justify-evenly py-24 lg:py-0 font-bold text-4xl lg:text-base gap-4  p-8 ">
            {navLinks.map((link) => (
              <li
                key={link.title}
                onClick={() => setNav(false)}
                className="text-gray-300 md:border-b-2 border-transparent hover:border-amber-300 transition-colors duration-200"
              >
                <NavLink
                  to={link.link}
                  aria-label={`go to ${link.title}`}
                  onClick={() => handleClick(link.title)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-300 md:border-b-2 border-cyan-500"
                      : "text-gray-300/70"
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}

            <li
              onClick={() => setNav(false)}
              className="text-gray-300/70 md:hover:text-cyan-500 md:border-b-2  hover:border-amber-300 transition-colors duration-200"
            >
              <a
                aria-label="go to contact"
                target="_blank"
                href="https://www.linkedin.com/in/yefrysanchez/"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
