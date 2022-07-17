import React from "react";
import Button from "../../components/Button/Button";
import "./Upload.scss";
import videoPreview from "../../assets/images/upload-video-preview.jpg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Upload = () => {
  const history = useHistory();
  const [formValues, setFormValues] = React.useState({});

  const handleSubmit = (event) => {
    const title = event.target.title.value;
    const description = event.target.description.value;
    if (!title || !description) {
      event.preventDefault();
      window.alert("Please enter a title and description.");
      return;
    }
    const API_URL = "http://localhost:5500";
    event.preventDefault();
    history.push("/");
    axios
      .post(`${API_URL}/videos`, { title: title, description: description })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCancel = () => {
    history.push("/");
  };

  return (
    <div className="upload__wrapper">
      <h1 className="upload__heading">Upload Video</h1>
      <div className="upload__container">
        <div className="upload__form-container">
          <div className="upload__image-container">
            <h3 className="upload__image-title">VIDEO THUMBNAIL</h3>
            <img
              src={videoPreview}
              alt="Upload image preview"
              className="upload__image-preview"
            />
          </div>
          <form onSubmit={handleSubmit} className="upload__form">
            <div className="upload__form-inputs">
              <label className="upload__form-label">
                TITLE YOUR VIDEO
                <input
                  className="upload__form-input"
                  type="text"
                  name="title"
                  placeholder="Add a title to your video"
                />
              </label>
              <label className="upload__form-label">
                ADD A VIDEO DESCRIPTION
                <textarea
                  name="description"
                  className="upload__form-input"
                  placeholder="Add a description to your video"
                ></textarea>
              </label>
            </div>
            <div className="upload__form-buttons">
              <button className="upload__form-upload-button" type="submit">
                PUBLISH
              </button>
              <button
                className="upload__form-cancel-button"
                onClick={handleCancel}
                type="button"
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
