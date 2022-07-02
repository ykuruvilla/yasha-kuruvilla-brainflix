import React from "react";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "./MainVideoInfo.scss";

export default function MainVideoInfo(props) {
  let commentDate = new Date(props.videoDetails.timestamp);
  let date = commentDate.toLocaleDateString();
  return (
    <div className="video-details__wrapper">
      <h1 className="video__title">{props.videoDetails.title}</h1>
      <div className="video-details__container">
        <div className="video__info">
          <p className="video__channel">By {props.videoDetails.channel}</p>
          <p className="video__date">{date}</p>
        </div>
        <div className="video__metrics">
          <div className="video__views">
            <img
              className="video__views-icon"
              src={viewsIcon}
              alt="Views icon"
            />
            <p className="video__views-number">{props.videoDetails.views}</p>
          </div>
          <div className="video__likes">
            <img
              className="video__likes-icon"
              src={likesIcon}
              alt="Like icon"
            />
            <p className="video__likes-number">{props.videoDetails.likes}</p>
          </div>
        </div>
      </div>
      <div className="video__description">
        <p className="video__description-text">
          {props.videoDetails.description}
        </p>
      </div>
    </div>
  );
}
