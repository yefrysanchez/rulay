import React from "react";
import DestiCard from "../components/DestiCard";

const Destinations = () => {
  return (
    <div id="destination" className="min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-b from-cyan-500">
      <div className="my-20 px-4">
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-center lg:leading-7 leading-6 mb-12 font-bold">
          <span className="font-MrDafoe text-amber-400 text-7xl lg:text-8xl font-normal">Top</span>
          <br /> destinations
        </h2>
        <p className="max-w-[672px] text-center">
          {" "}
          It's hard enough deciding where to go, you don't have to worry any more. These are some of the most popular and best locations to
          travel in the Dominican Republic based on a number of factors.{" "}
        </p>
      </div>
      <div className="max-w-[1300px] px-4">
        <DestiCard />
      </div>
    </div>
  );
};

export default Destinations;
