import React from "react";

const CommentEdit = ({ setIsEditOpen, comment }) => {
  return (
    <div className="fixed top-0 left-0 z-40 bg-black/30 inset-0 flex justify-center items-center">
      <form className="bg-white p-8 rounded-2xl max-w-[400px] w-full">
        <p className="font-semibold">Edit Comment</p>
        <textarea
        required
        rows={5}
          className="border my-4 w-full rounded-lg resize-none text-base"
          name="comment"
        >{comment}</textarea>
        <div className="flex gap-4  text-lg justify-end">
          <button
            onClick={() => setIsEditOpen(false)}
            className="border p-2 rounded-lg hover:bg-gray-100 "
          >
            Cancel
          </button>
          <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 p-2 rounded-lg text-white">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentEdit;
