import { useState } from "react";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { newCommentAdded } from "../store/slices/authSlice";
import toast from "react-hot-toast";

const CommentDelete = ({ setIsDeleteOpen, _id }) => {
  const [isLoading, setIsLoading] = useState(false);
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
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id,
        }),
      });
      if (!res.ok) {
        throw new Error("Error, please try again.");
      }
      const msg = await res.json();
      toast.success(msg.msg)
    } catch (error) {
      console.error(error.msg);
    } finally {
      dispatch(newCommentAdded(!newComment))
      setIsLoading(false);
      setIsDeleteOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-40 bg-black/30 inset-0 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-12 text-center rounded-2xl max-w-[400px] w-full"
      >
        <p className="font-semibold">Are you sure?</p>
        <p className="text-base text-gray-500 mb-4">
          This action cannot be undone.
        </p>
        <div className="flex flex-col w-full gap-4 text-lg">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white w-full"
          >
            {isLoading ? <Loading /> : "Delete comment"}
          </button>
          <button
          disabled={isLoading}
            onClick={() => setIsDeleteOpen(false)}
            className="border py-3 rounded-lg hover:bg-gray-100 "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentDelete;
