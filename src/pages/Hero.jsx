import React from "react";

const Hero = () => {
  return (
    <header id="home" className="relative h-screen w-full">
      <div className=" absolute w-full h-full bg-black opacity-50"></div>
      <video src="../../src/assets/home-video.mp4" autoPlay loop muted className="h-full w-full object-cover"/>
      <div className="absolute select-none inset-0 flex justify-center items-center">
        <h1 className="text-[10vw] text-amber-400 font-MrDafoe lin drop-shadow-2xl leading-tight">Make the right <br /><span className="font-poppins font-bold text-white text-[15vw] ">move.</span></h1>
      </div>
    </header>
  );
};

export default Hero;
