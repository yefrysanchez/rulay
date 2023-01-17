import React from "react";
import videoHero from '../../src/assets/home-video.mp4'

const Hero = () => {
  return (
    <header id="home" className="relative h-screen w-full">
      <div className=" absolute w-full h-full bg-black opacity-50"></div>
      <video src={videoHero} autoPlay loop muted playsInline className="h-full w-full object-cover"/>
      <div className="absolute select-none inset-0 flex justify-center items-center">
        <h1 className="text-[10vw] text-amber-400 font-MrDafoe lin drop-shadow-2xl leading-tight">Make the right <br /><span className="font-poppins font-bold text-white text-[15vw] ">move.</span></h1>
      </div>
    </header>
  );
};

export default Hero;
