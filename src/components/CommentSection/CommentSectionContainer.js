import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  let [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState("");

  const submitComment = (e) => {
    e.preventDefault();
    setComments(
      comments = [...comments, {
        username: 'josiah',
        text: newComment
      }]
    );
    setNewComment("");
  }

  const changeComment = (e) => {
    setNewComment(e.target.value);
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment}/>
      })}
      <CommentInput 
        changeComment={changeComment} 
        submitComment={submitComment} 
        newComment={newComment} 
      />
    </div>
  );
};

export default CommentSection;
