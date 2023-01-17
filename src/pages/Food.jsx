import React from "react";
import DestiCard from "../components/DestiCard";

const Food = () => {
  return (
    <div
      id="food"
      className="min-h-screen mt-20 flex flex-col justify-center items-center"
    >
      <div className="mb-20 md:mt-0">
        <h1 className="text-6xl text-center leading-3 mb-12 font-bold">
          <span className="font-MrDafoe text-amber-400 text-7xl font-normal">
            Traditional
          </span>
          <br /> food
        </h1>
        <p className="max-w-[672px] text-center">
          "What are the most important Dominican foods?" I should start by
          saying that "important" might not be the right word. Perhaps
          "popular," or "common" might be better. I hope that this introduction
          to Dominican cuisine will satisfy your curiosity and stir your
          appetite.
        </p>
      </div>
      <div className="max-h-[710px] max-w-[1300px] grid lg:grid-cols-3 lg:grid-rows-2 gap-4 mx-2">
        <div className="row-span-2 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://mydominicankitchen.com/wp-content/uploads/2021/11/Pollo-Guisado-Smart-Little-Cookie-3-800x1148.jpg"
            alt=""
          />
        </div>
        <div className="col-span-1 rounded-md overflow-hidden ">
          <img
            className="h-full w-full object-cover"
            src="https://micocinadominicana.com/wp-content/uploads/2021/09/Sancocho-My-Dominican-Kitchen-4.jpg"
            alt=""
          />
        </div>
        <div className="col-span-1 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://puertoviejony.com/2/wp-content/uploads/2019/02/los-3-golpes.jpg"
            alt=""
          />
        </div>
        <div className="col-span-2 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2019/10/SaborDominicano.jpg"
            alt=""
          />
        </div>
      </div>
      <a
        className="bg-transparent transition-colors duration-200 hover:bg-amber-400 text-black font-semibold hover:text-white py-2 px-4 border border-amber-400 hover:border-transparent rounded my-8"
        href="#"
      >
        Learn more
      </a>
    </div>
  );
};

export default Food;
