import React from "react";
import headerImg from "../assets/destination-header.png";

const DestiHeader = ({place, src}) => {
  return (
    <header className="relative pt-12 md:pt-0 flex flex-col items-center overflow-hidden justify-center">
      <div className=" relative text-white w-[90%] top-0 max-w-[1300px] h-[200px] md:h-[500px] z-40 bg-slate-400 overflow-hidden rounded-lg">
        <h1 className="absolute z-50 text-3xl md:text-7xl font-bold top-1/3 left-1/2 translate-x-[-50%] drop-shadow-2xl">
          {place}
        </h1>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          className="w-full h-full object-cover object-center"
          src={src}
          alt=""
        />
      </div>
      <div className="w-full ">
        <div className="absolute top-0 z-20 w-full h-[100px] md:h-[200px] bg-gradient-to-b from-cyan-400"></div>
        <div className="absolute bottom-0 z-20 w-full h-[100px] md:h-[200px] bg-gradient-to-t from-white"></div>
        <img
          className="absolute top-0 z-10 w-full"
          src={headerImg}
          alt="background"
        />
      </div>
    </header>
  );
};

export default DestiHeader;
