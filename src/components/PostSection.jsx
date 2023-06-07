import React, { useRef, useState } from "react";

const PostSection = () => {
  const [isLogged, setIsLogged] = useState(false);

  //Development purposes
const name = 'Michael Freeman'
const commentRef = useRef()
const onDelete = () => {
  commentRef.current.remove()
}
  //Development purposes

  return (
    <section className="mt-8 flex flex-col mx-auto md:max-w-[1300px] px-4">
      <h2 className="font-bold text-4xl text-cyan-600">
        Share Your Experiences!
      </h2>
      <div className="mt-8 flex justify-between items-center mb-2">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
         Experiences (2)
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
            <h2>{name}</h2>
            <div onClick={() => setIsLogged(!isLogged)} className="py-1 px-2 cursor-pointer text-white bg-red-600 rounded-lg focus:ring-1 focus:ring-red-200 hover:bg-red-700">
              Log out
            </div>
          </div>
        ) : (
          <div onClick={() => setIsLogged(!isLogged)} className="py-1 px-2 cursor-pointer text-white bg-cyan-600 rounded-lg focus:ring-1 focus:ring-cyan-200 hover:bg-cyan-700">
            Log In
          </div>
        )}
      </div>
      <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="6"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
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
      <article ref={commentRef} className="p-6 mb-6 text-base bg-cyan-600/10 rounded-lg dark:bg-gray-900">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough"
            />
            Michael Freeman
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime="2023-02-08" title="February 8th, 2022">
              Feb. 8, 2023
            </time>
          </p>
          {
            isLogged ? <button
            onClick={onDelete}
            className="inline-flex ml-auto p-2 hover:bg-red-400 hover:text-white duration-150 font-medium text-center text-gray-400 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            Delete
          </button> : ""
          }
        </div>
        <p className="mt-4 text-gray-700 dark:text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          enim voluptate. Omnis dolorum nemo eius accusamus sint reprehenderit
          dignissimos aspernatur obcaecati nostrum molestiae in dicta minus,
          necessitatibus ipsum molestias cumque?
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
          >
            <svg
              aria-hidden="true"
              className="mr-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            Edit
          </button>
        </div>
      </article>
      <article className="p-6 mb-6 text-base bg-cyan-600/10 rounded-lg dark:bg-gray-900">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              alt="Mary Jane"
            />
            Mary Jane
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime="2023-15-08" title="February 15th, 2023">
              Feb. 15, 2023
            </time>
          </p>
          <button
            className="inline-flex ml-auto p-2 font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
        </div>
        <p className="mt-4 text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea
          illum accusamus eius perspiciatis fuga, placeat esse sint fugiat.
          Voluptatibus, suscipit omnis fuga debitis rerum, tempora deserunt quae
          quisquam velit quos animi quod corporis quis voluptatum inventore
          magni molestiae tempore.
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
          >
            <svg
              aria-hidden="true"
              className="mr-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            Edit
          </button>
        </div>
      </article>
    </section>
  );
};

export default PostSection;
