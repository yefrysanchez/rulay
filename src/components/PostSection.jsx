import React, { useRef, useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import LogOutBtn from "./LogOutBtn";
import Avatar from "./Avatar";
import PostComment from "./PostComment";
import AllComments from "./AllComments";

const PostSection = () => {
  const [isLogged, setIsLogged] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <section className="mt-8 flex flex-col mx-auto md:max-w-[1300px] px-4">
 
      {isRegistered ? (
        <LoginModal
        isLoading={isLoading}
          showModal={showModal}
          setShowModal={setShowModal}
          setIsRegistered={setIsRegistered}
          setIsLoading={setIsLoading}
        />
      ) : (
        <RegisterModal
        setIsLoading={setIsLoading}
        isLoading={isLoading}
          showModal={showModal}
          setShowModal={setShowModal}
          setIsRegistered={setIsRegistered}
        />
      )}{" "}
      <h2 className="font-bold text-center md:text-start text-4xl text-cyan-600">
        Share Your Experiences!
      </h2>
      <div className="mt-8 flex flex-col-reverse md:flex-row items-end gap-4 md:justify-between md:items-center mb-2">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
          Experiences (0) 
        </h2>
        {isLogged ? (
          <div className="flex gap-2 md:gap-4 items-center select-none">
            
            <Avatar />
            <LogOutBtn />
          </div>
        ) : (
          <div
            onClick={() => setShowModal(true)}
            className="py-1 px-2 cursor-pointer text-white bg-cyan-600 rounded-lg focus:ring-1 focus:ring-cyan-200 hover:bg-cyan-700"
          >
            Log In
          </div>
        )}
      </div>
      <PostComment />
      <AllComments />
    </section>
  );
};

export default PostSection;
