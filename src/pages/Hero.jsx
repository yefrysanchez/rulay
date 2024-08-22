import React from "react";
import videoHero from "../../src/assets/home-video.mp4";
import { CiCircleChevDown } from "react-icons/ci";

const Hero = () => {
  return (
    <header id="home" className="relative h-screen w-full">
      <div className="absolute w-full flex justify-center left-0 bottom-8 z-40 text-6xl text-white animate-bounce">
        <a href="#destination">
          <CiCircleChevDown />
        </a>
      </div>
      <div className=" absolute w-full h-full bg-black opacity-50"></div>
      <video
        src={videoHero}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
      <div className="absolute select-none text-center inset-0 flex justify-center items-center">
        <h1 className="text-[15vw] lg:text-[12vw] text-amber-400 font-MrDafoe lin drop-shadow-2xl leading-tight">
          Make the right <br />
          <span className="font-poppins font-bold text-white text-[20vw] lg:text-[15vw]">
            move.
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Hero;
