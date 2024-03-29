import React from "react";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import CreateDate from "../../utilities/CreateDate";
import "./MainVideoInfo.scss";

export default function MainVideoInfo({ videoDetails }) {
  return (
    <div className="video-details__wrapper">
      <h1 className="video__title">{videoDetails.title}</h1>
      <div className="video-details__container">
        <div className="video__info">
          <p className="video__channel">By {videoDetails.channel}</p>
          <p className="video__date">{CreateDate(videoDetails.timestamp)}</p>
        </div>
        <div className="video__metrics">
          <div className="video__views">
            <img
              className="video__views-icon"
              src={viewsIcon}
              alt="Views icon"
            />
            <p className="video__views-number">{videoDetails.views}</p>
          </div>
          <div className="video__likes">
            <img
              className="video__likes-icon"
              src={likesIcon}
              alt="Like icon"
            />
            <p className="video__likes-number">{videoDetails.likes}</p>
          </div>
        </div>
      </div>
      <div className="video__description">
        <p className="video__description-text">{videoDetails.description}</p>
      </div>
    </div>
  );
}
