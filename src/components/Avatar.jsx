import React from "react";

const Avatar = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div className="h-8 w-8 ">
        <img
          className="h-full w-full rounded-full object-cover"
          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
          alt="name"
        />
      </div>
      <h2>Your Name</h2>
    </div>
  );
};

export default Avatar;
