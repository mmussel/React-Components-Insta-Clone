//Complete the necessary code in this file


// pass the data from App.js down as props then map through the data
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = ({data}) => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {data.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default PostsPage;

