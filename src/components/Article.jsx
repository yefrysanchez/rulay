import React from "react";

const Article = () => {
  return (
    <div className="relative h-[202px] max-w-[194px] rounded-xl overflow-hidden ">
      <div className=" absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        alt=""
      />
      <h2 className="absolute left-2 bottom-4 text-sm text-white font-bold z-50">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
    </div>
  );
};

export default Article;
