import React from "react";
import timeStamp from "../services/timeStamp.service";

const Comment = ({ name, comment, createdAt }) => {
  return (
    <div className="max-w-5xl mx-auto border px-6 py-4 rounded-lg">
      <div className="mb-6">
        <div>
          <div className="text-lg font-bold text-gray-800">{name}</div>
          <div className="text-gray-500">{timeStamp(createdAt)}</div>
        </div>
      </div>
      <p className="text-lg leading-relaxed mb-6">{comment}</p>
    </div>
  );
};

export default Comment;
