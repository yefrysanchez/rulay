import React, { useRef, useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const PostSection = () => {
  const [isLogged, setIsLogged] = useState(false);
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
        />
      ) : (
        <RegisterModal
        isLoading={isLoading}
          showModal={showModal}
          setShowModal={setShowModal}
          setIsRegistered={setIsRegistered}
        />
      )}{" "}
      <h2 className="font-bold text-4xl text-cyan-600">
        Share Your Experiences!
      </h2>
      <div className="mt-8 flex justify-between items-center mb-2">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
          Experiences (0) 
        </h2>
        {isLogged ? (
          <div className="flex gap-2 items-center select-none">
            <div className="h-8 w-8 ">
              <img
                className="h-full w-full rounded-full object-cover"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="name"
              />
            </div>
            <h2>Your Name</h2>
            <div className="py-1 px-2 cursor-pointer text-white bg-red-600 rounded-lg focus:ring-1 focus:ring-red-200 hover:bg-red-700">
              Log out
            </div>
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
      <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="6"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-cyan-600 rounded-lg focus:ring-1 focus:ring-cyan-200 hover:bg-cyan-700"
        >
          Post comment
        </button>
      </form>
    </section>
  );
};

export default PostSection;
