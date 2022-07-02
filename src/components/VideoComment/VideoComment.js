import React from "react";
import "./VideoComment.scss";

export default function VideoComment(props) {
  // console.log(props.data);

  let commentDate = new Date(props.data.timestamp);
  let date = commentDate.toLocaleDateString();
  return (
    <div className="comment__item">
      <div className="comment__avatar-container">
        <div className="comment__avatar"></div>
      </div>
      <div className="comment__text-container">
        <div className="comment__text-container--upper">
          <p className="comment__text comment__text--name">{props.data.name}</p>
          <p className="comment__text comment__text--date">{date}</p>
        </div>
        <div className="comment__text-container--lower">
          <p className="comment__text">{props.data.comment}</p>
        </div>
      </div>
    </div>
  );
}
