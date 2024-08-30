import React from "react";
import { useNavigate } from "react-router-dom";

export const BackNav = () => {

    const navigate = useNavigate();

  return (
    <nav className="flex w-full over justify-between items-center max-w-[1300px] fixed top-0 left-1/2 px-1 h-44 z-50 translate-x-[-50%] ">
      <div className="bg-cyan-600/30 rounded-lg" >
        <h1 className="font-MrDafoe text-5xl text-white border px-4 py-2 rounded-lg">
          Rulay
        </h1>
      </div>
      <button aria-label="navigate to the previuos page" onClick={() => navigate(-1)}
        className="transition-colors duration-200 bg-amber-400 text-black font-semibold hover:text-white py-2 px-4 border rounded my-8"
   
      >
        Go Back
      </button>
    </nav>
  );
};
