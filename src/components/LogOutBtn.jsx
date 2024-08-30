import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";

const LogOutBtn = () => {

//Redux State /////
const dispatch = useDispatch()



  return (
 
      <button
      onClick={() => dispatch(logout())}
        className="py-1 px-2 cursor-pointer text-white bg-red-600 rounded-lg focus:ring-1 focus:ring-red-200 hover:bg-red-700"
      >
        log out
      </button>

  );
};

export default LogOutBtn;
