import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import NoComments from "./NoComments";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AllComments = () => {
  const [AllComments, setAllComments] = useState([]);
  const url = import.meta.env.VITE_COMMENTS_URL;
  const { src } = useParams();

  //Redux State///
const {newComment} = useSelector(state => state.auth)
  /////////////////

  const getComments = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("There was an error loading comments");
      }

      const comments = await res.json();
      const filteredComment = comments.filter(
        (comment) => comment.postId === src
      );
      setAllComments(filteredComment.reverse());
    } catch (error) {
      console.error(error.msg);
    }
  };

  useEffect(() => {
    getComments();
  }, [src, newComment]);

  return (
    <article className="relative grid gap-4 max-h-[450px] overflow-y-scroll ">
      {AllComments.length > 0 ? (
        AllComments.map((comment) => (
          <div key={comment._id}>
            <Comment
              name={comment.userName}
              createdAt={comment.createdAt}
              comment={comment.comment}
            />
          </div>
        ))
      ) : (
        <NoComments />
      )}

      <div className="sticky left-0 bottom-0 w-full h-14 bg-gradient-to-t from-white to-transparent"></div>
    </article>
  );
};

export default AllComments;
