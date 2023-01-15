import React from "react";

const DestiCard = () => {
  return (
    <div className="relative h-[553px] max-w-[410px] rounded-xl overflow-hidden shadow-xl">
      <div className=" absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        alt=""
      />
      <h2 className="absolute left-1/2 translate-x-[-50%] bottom-1/3 text-3xl text-white font-bold  z-50">
        Destination
      </h2>
      <p className="absolute left-1/2 translate-x-[-50%] bottom-1/4 text-sm text-white z-50">
        Province
      </p>
    </div>
  );
};

export default DestiCard;
