import React from "react";
import { useSelector } from "react-redux";

const Avatar = () => {

//redux State ///
const {user} = useSelector(state => state.auth)
const {name} = user


  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div className="h-8 w-8 ">
        <img
          className="h-full w-full rounded-full object-cover"
          src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
          alt="profile avatar"
        />
      </div>
      <h2 className="font-bold">{name}</h2>
    </div>
  );
};

export default Avatar;
