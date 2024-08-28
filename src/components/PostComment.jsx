import React from 'react'

const PostComment = () => {
  return (
    <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
          <textarea
            id="comment"
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
  )
}

export default PostComment