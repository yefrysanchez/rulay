const CommentDelete = ({ setIsDeleteOpen }) => {
  return (
    <div className="fixed top-0 left-0 z-40 bg-black/30 inset-0 flex justify-center items-center">
      <form className="bg-white p-12 text-center rounded-2xl max-w-[400px] w-full">
        <p className="font-semibold">Are you sure?</p>
        <p className="text-base text-gray-500 mb-4">
          This action cannot be undone.
        </p>
        <div className="flex flex-col w-full gap-4 text-lg">
          <button type="submit" className="bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white w-full">
            Delete comment
          </button>
          <button
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
