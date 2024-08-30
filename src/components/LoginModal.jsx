import React, { useState } from "react";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";

const LoginModal = ({
  setIsLoading,
  isLoading,
  showModal,
  setShowModal,
  setIsRegistered,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = import.meta.env.VITE_LOGIN_URL;
  const [error, setError] = useState(null);

  // Redux State////
  const dispatch = useDispatch();
  ///////////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(null);
    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!res.ok) {
        setIsLoading(false);
        throw new Error("Check credentials");
      }
      const { user, token } = await res.json();
      dispatch(login({ user, token }));
      setIsLoading(false);
      setShowModal(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message); // Set error message
    }
  };

  const handleCloseModal = () => {
    setEmail("");
    setPassword("");
    setError(null);
    setShowModal(false);
  };

  return (
    <div
      className={`${
        showModal ? "fixed" : "hidden"
      } flex bg-black/50 h-full overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full inset-0`}
    >
      <div className="p-4 w-full max-w-md max-h-full">
        <div className=" bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Login in to Rulay
            </h3>
            <button
              onClick={handleCloseModal}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 md:p-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  value={email}
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  value={password}
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                disabled={isLoading}
                type="submit"
                className="w-full text-white disabled:bg-amber-700/40 bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isLoading ? <Loading /> : "Login to your account"}
              </button>
              <div className="text-sm font-medium text-gray-500 ">
                <span>Not registered? </span>
                <span
                  onClick={() => setIsRegistered(false)}
                  className="cursor-pointer hover:underline text-blue-500"
                >
                  Create account
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
