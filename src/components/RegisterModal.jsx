import React from "react";
import Loading from "./Loading";

const RegisterModal = ({isLoading, showModal, setShowModal, setIsRegistered}) => {
  return (
    <div
      aria-hidden="true"
      className={`${showModal ? "fixed" : "hidden"} flex bg-black/50 h-full overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full inset-0`}
    >
      <div className="p-4 w-full max-w-md max-h-full">
        <div className=" bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Create Acount
            </h3>
            <button
                onClick={() => setShowModal(false)}
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#">
              
            <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
             
              <button
              disabled={isLoading}
                type="submit"
                className="w-full disabled:bg-amber-700/40 text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isLoading ? <Loading /> : "Create account"}
              </button>
              <div className="text-sm font-medium text-gray-500 ">
                <span>Already have an acount? </span>
                <span
               onClick={() => setIsRegistered(true)}
                  className="cursor-pointer text-blue-500 hover:underline "
                >
                  Login
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
