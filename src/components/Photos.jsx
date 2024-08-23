import React from "react";

const Photos = ({ img1, img2, img3, place }) => {
  return (
    <div className="w-full grid gap-2 max-w-[1300px] px-4 h-[550px] md:h-[600px] mx-auto">
      <div className="w-full h-full rounded-lg overflow-hidden bg-slate-400 md:col-span-2">
        <img className="w-full h-full object-cover" src={img1} alt={place} />
      </div>
      <div className="w-full h-full rounded-lg overflow-hidden bg-slate-400 ">
        <img className="w-full h-full object-cover" src={img2} alt={place} />
      </div>
      <div className="w-full h-full rounded-lg overflow-hidden bg-slate-400 ">
        <img className="w-full h-full object-cover" src={img3} alt={place} />
      </div>
    </div>
  );
};

export default Photos;
