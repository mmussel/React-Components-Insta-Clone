// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
import React from "react";

const LikeSection = ({postlikes, setPostLikes}) => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" 
        onClick={() => setPostLikes(postlikes + 1)}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">{postlikes} likes</p>
</div>
  )
};

export default LikeSection;
