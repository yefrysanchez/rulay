import React from "react";
import DestiCard from "../components/DestiCard";

const Destinations = () => {
  return (
    <div id="destination" className="min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-b from-cyan-500">
      <div className="my-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center lg:leading-7 leading-6 mb-12 font-bold">
          <span className="font-MrDafoe text-amber-400 text-7xl lg:text-8xl font-normal">Top</span>
          <br /> destinations
        </h1>
        <p className="max-w-[672px] text-center">
          {" "}
          It’s hard enough deciding to move, you don’t have to worry about where
          to move to. These are some of the most popular and best locations to
          move to based on a number of factors.{" "}
        </p>
      </div>
      <div className="max-w-[1300px]">
        <DestiCard />
      </div>
    </div>
  );
};

export default Destinations;
