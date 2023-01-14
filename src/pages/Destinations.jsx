import React from "react";
import DestiCard from "../components/DestiCard";

const Destinations = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-b from-cyan-500">
      <div className="my-20">
        <h1 className="text-4xl md:text-6xl text-center leading-8 mb-12 font-bold">
          <span className="font-MrDafoe text-amber-400 text-7xl font-normal">Top</span>
          <br /> destinations
        </h1>
        <p className="max-w-[672px] text-center">
          {" "}
          It’s hard enough deciding to move, you don’t have to worry about where
          to move to. These are some of the most popular and best locations to
          move to based on a number of factors.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mx-2 grid-cols-1">
        <DestiCard />
        <DestiCard />
        <DestiCard />
        <DestiCard />
      </div>
    </div>
  );
};

export default Destinations;
