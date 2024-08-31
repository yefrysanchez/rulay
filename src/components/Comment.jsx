import React, { useState } from "react";
import timeStamp from "../services/timeStamp.service";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CommentDelete from "./CommentDelete";
import CommentEdit from "./CommentEdit";
import { useSelector } from "react-redux";

const Comment = ({ name, comment, createdAt, email }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Redux State ///
  const { user } = useSelector((state) => state.auth);
  ///////////////////

  return (
    <div className="max-w-5xl mx-auto border px-6 py-4 rounded-lg">
      <div className="mb-6 flex justify-between">
        <div>
          <div className="text-lg font-bold text-gray-800">{name}</div>
          <div className="text-gray-500">{timeStamp(createdAt)}</div>
        </div>
        {user?.email === email && (
          <div className="flex gap-4 text-2xl text-gray-700">
            <FaRegEdit
              comment={comment}
              onClick={() => setIsEditOpen(true)}
              className="lg:hover:text-cyan-400 cursor-pointer"
            />
            <MdDelete
              onClick={() => setIsDeleteOpen(true)}
              className="lg:hover:text-red-400 cursor-pointer"
            />
            {isDeleteOpen && (
              <CommentDelete setIsDeleteOpen={setIsDeleteOpen} />
            )}
            {isEditOpen && <CommentEdit setIsEditOpen={setIsEditOpen} />}
          </div>
        )}
      </div>
      <p className="text-lg leading-relaxed mb-6">{comment}</p>
    </div>
  );
};

export default Comment;
