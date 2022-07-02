import React from "react";
import avatar from "../../assets/images/mohan-muruge.jpg";
import Button from "../Button/Button";
import "./CommentForm.scss";

export default function CommentForm(props) {
  return (
    <>
      <p className="comments__number">{props.comments.length} comments</p>
      <div className="comment-input-area">
        <div>{/* <img src={avatar} alt="Mohan muruge" /> */}</div>
        <div className=""></div>
        <form className="comment-form">
          <label className="comment-form__label">
            JOIN THE CONVERSATION
            <textarea
              name="comment"
              id="comment"
              placeholder="Add a new comment"
            ></textarea>
          </label>
          <Button text="COMMENT" id="button--comment" />
        </form>
      </div>
    </>
  );
}
