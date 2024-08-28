import React from "react";

const Comment = ({ name, comment, createdAt }) => {
  return (
    <div className="max-w-5xl mx-auto border px-6 py-4 rounded-lg">
      <div className="mb-6">
        <div>
          <div className="text-lg font-bold text-gray-800">John Doe</div>
          <div className="text-gray-500">2 hours ago</div>
        </div>
      </div>
      <p className="text-lg leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        lorem nulla. Donec consequat urna a tortor sagittis lobortis.
      </p>
    </div>
  );
};

export default Comment;
