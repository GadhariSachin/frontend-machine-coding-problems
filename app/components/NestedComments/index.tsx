import React from "react";

type Comment = {
  id: string;
  profile_pic: string;
  user: string;
  comment: string;
  replies?: Array<Comment>;
};

interface CommentsProps {
  comments: Array<Comment>;
}

function Comments({ comments = [] }: CommentsProps) {
  return (
    <>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="gap-4 ml-4 border-l-2 border-slate-300"
        >
          <div className="flex gap-4 p-4">
            <img
              src={comment.profile_pic}
              alt={comment.user}
              className="w-[40px] h-[40px] rounded-full"
            />
            <div className="flex flex-col">
              <div>{comment.user}</div>
              <div>{comment.comment}</div>
            </div>
          </div>
          {comment?.replies && <Comments comments={comment?.replies} />}
        </div>
      ))}
    </>
  );
}

export default Comments;
