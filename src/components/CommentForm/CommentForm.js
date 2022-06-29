import React from "react";
import avatar from "../../assets/images/mohan-muruge.jpg";

export default function CommentForm(props) {
  return (
    <>
      <p>{props.comments.length} comments</p>
      <div className="comment-input-area">
        <div>
          <img src={avatar} alt="Mohan muruge" />
        </div>
        <form className="comment-form">
          <label className="comment-form__label">
            JOIN THE CONVERSATION
            <input
              className="comment-form__label"
              name="comment"
              id="comment"
              placeholder="Add a new comment"
              type="text"
            />
          </label>
        </form>
      </div>
    </>
  );
}
