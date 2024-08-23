import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dest } from "../info/placeAbout";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const DestiCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dest.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dest.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl h-[70vh]">
      <button
        className="text-5xl bg-gray-600/30 hover:bg-gray-600/50 duration-200 hover:text-amber-400 absolute top-1/2 left-0 transform -translate-y-1/2 z-30 text-white rounded-full p-2"
        onClick={prevSlide}
      >
        <BsArrowLeft />
      </button>
      <button
        className="text-5xl bg-gray-600/30 hover:bg-gray-600/50 duration-200 hover:text-amber-400 absolute top-1/2 right-0 transform -translate-y-1/2 z-30 text-white rounded-full p-2"
        onClick={nextSlide}
      >
        <BsArrowRight />
      </button>

      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {dest.map((e, i) => (
          <div className="flex-shrink-0 w-full h-full" key={i}>
            <Link to={`/${e.src}`}>
              <div className="relative  overflow-hidden h-full">
                <div className="z-20 absolute text-center w-full h-full flex flex-col justify-center items-center">
                  <h3 className="tracking-tighter font-bold  text-4xl md:text-6xl 2xl:text-9xl text-white">
                    {e.place}
                  </h3>
                  <p className="tracking-tighter font-light text-xl md:text-2xl 2xl:text-5xl text-white">
                    {e.province}
                  </p>
                </div>
                <div className="bg-black/40 absolute z-10 inset-0"></div>
                <img
                  className="h-full w-full object-cover"
                  src={e.img}
                  alt={e.place}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestiCard;
