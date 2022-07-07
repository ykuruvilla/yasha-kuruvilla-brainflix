import React from "react";
import Button from "../../components/Button/Button";
import "./Upload.scss";
import preview from "../../assets/images/upload-video-preview.jpg";

export default function Upload() {
  return (
    <div className="upload__wrapper">
      <h1 className="upload__heading">Upload Video</h1>
      <div className="upload__container">
        <div className="upload__form-container">
          <div className="upload__image-container">
            <h3 className="upload__image-title">VIDEO THUMBNAIL</h3>
            <img
              src={preview}
              alt="Upload image preview"
              className="upload__image-preview"
            />
          </div>
          <form className="upload__form">
            <label className="upload__form-label">
              TITLE YOUR VIDEO
              <input
                className="upload__form-input"
                type="text"
                placeholder="Add a title to your video"
              />
            </label>
            <label className="upload__form-label">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="upload__form-input"
                placeholder="Add a description to your video"
              ></textarea>
            </label>
          </form>
        </div>
        <div className="upload__form-buttons">
          <Button text="PUBLISH" id="button--publish" />
          <Button text="CANCEL" id="button--cancel" />
        </div>
      </div>
    </div>
  );
}
