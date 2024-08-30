import React, { useState } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { newCommentAdded } from "../store/slices/authSlice";

const PostComment = ({ isLogged, setShowModal }) => {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const url = import.meta.env.VITE_COMMENTS_URL;
  const { src } = useParams();

  // Redux State ///
  const { user } = useSelector((state) => state.auth);
  const { email, name } = user || "";
  const { newComment } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  ///////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogged) {
      setShowModal(true);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment,
          userName: name,
          postId: src,
          email,
        }),
      });
      if (!res.ok) {
        throw new Error("There was an error");
      }

      const data = await res.json();
      dispatch(newCommentAdded(!newComment));
      console.log(data);
    } catch (error) {
      console.error(error.msg);
    } finally {
      setComment("");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
        {isLoading ? (
          <div className="absolute bg-black/30 inset-0 flex items-center">
            <Loading />
          </div>
        ) : (
          ""
        )}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="6"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="block ml-auto py-2.5 px-4 text-xs font-medium text-center text-white bg-cyan-600 rounded-lg focus:ring-1 focus:ring-cyan-200 hover:bg-cyan-700"
      >
        Post comment
      </button>
    </form>
  );
};

export default PostComment;
