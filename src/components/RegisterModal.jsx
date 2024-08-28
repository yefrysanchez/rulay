import { useState } from "react";
import Loading from "./Loading";
import toast from 'react-hot-toast';

const RegisterModal = ({
  setIsLoading,
  isLoading,
  showModal,
  setShowModal,
  setIsRegistered,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const url = import.meta.env.VITE_REGISTER_URL;

  const handleModal = () => {
    setIsRegistered(true);
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         name,
         email,
         password,
        }),
      });

      if (!res.ok) {
        setIsLoading(false);
        const err = await res.json()
        throw new Error(err.msg)
      }

      const data = await res.json()
      setIsLoading(false);
      toast.success(data.msg);
      setIsRegistered(true)
  
    } catch (err) {
      setIsLoading(false);
      setError(err.message); // Set error message
    }
  };

  return (
    <div
      aria-hidden="true"
      className={`${
        showModal ? "fixed" : "hidden"
      } flex bg-black/50 h-full overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full inset-0`}
    >

      <div className="p-4 w-full max-w-md max-h-full">
        <div className=" bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Create Acount
            </h3>
            <button
              onClick={handleModal}
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
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  value={password}
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
