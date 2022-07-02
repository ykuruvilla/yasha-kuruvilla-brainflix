import React from "react";
import avatar from "../../assets/images/mohan-muruge.jpg";
import Button from "../Button/Button";
import "./CommentForm.scss";

export default function CommentForm(props) {
  return (
    <>
      <p className="comments__number">{props.comments.length} comments</p>
      <div className="comment-input-area">
        <div className="comment__avatar-container">
          <img className="comment__avatar" src={avatar} alt="Mohan muruge" />
        </div>
        <div className="comment-form__container">
          <form className="comment-form">
            <label className="comment-form__label">
              JOIN THE CONVERSATION
              <textarea
                className="comment-form__input"
                name="comment"
                id="comment"
                placeholder="Add a new comment"
                rows={1}
              ></textarea>
            </label>
            <Button text="COMMENT" id="button--comment" />
          </form>
        </div>
      </div>
    </>
  );
}
