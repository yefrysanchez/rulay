import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newCommentAdded } from "../store/slices/authSlice";
import Loading from "./Loading";
import toast from "react-hot-toast";

const CommentEdit = ({ setIsEditOpen, comment, _id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [editComment, setEditComment] = useState(comment);
  const url = import.meta.env.VITE_COMMENTS_URL;

  // Redux State ////
  const { newComment } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  /////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id,
          comment: editComment,
        }),
      });
      if (!res.ok) {
        throw new Error("There was an Error, please try again");
      }
      const msg = await res.json();
      toast.success(msg.msg)
    } catch (error) {
      toast.error(error.msg)
      console.error(error.msg);
    } finally {
      dispatch(newCommentAdded(!newComment));
      setIsLoading(true);
      setIsEditOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-40 bg-black/30 inset-0 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden bg-white p-8 rounded-2xl max-w-[400px] w-full"
      >
        {isLoading && (
          <div className="absolute animate-pulse scale-150 bg-black/20 top-0 left-0 inset-0 flex items-center justify-center">
            <Loading />
          </div>
        )}
        <p className="font-semibold">Edit Comment</p>
        <textarea
          value={editComment}
          onChange={(e) => setEditComment(e.target.value)}
          required
          rows={5}
          className="border p-2 my-4 w-full rounded-lg resize-none text-base"
          name="comment"
        ></textarea>
        <div className="flex gap-4  text-lg justify-end">
          <button
            disabled={isLoading}
            onClick={() => setIsEditOpen(false)}
            className="border p-2 rounded-lg hover:bg-gray-100  disabled:bg-gray-100"
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 p-2 rounded-lg text-white disabled:bg-cyan-700"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentEdit;
