import React from "react";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";

export default function MainVideoInfo(props) {
  return (
    <div className="video-details">
      <h1 className="video__title">{props.videoDetails.title}</h1>
      <div className="video">
        <p>By {props.videoDetails.channel}</p>
        <p>{props.videoDetails.views}</p>
      </div>
      <div className="video__metrics">
        <div className="video__views">
          <img className="video__views-icon" src={viewsIcon} alt="Views icon" />
          <p className="video__views-number">{props.videoDetails.views}</p>
        </div>
        <div className="video__likes">
          <img className="video__likes-icon" src={likesIcon} alt="Like icon" />
          <p className="video__likes-number">{props.videoDetails.likes}</p>
        </div>
        <div className="video__description">
          <p className="video__description-text">
            {props.videoDetails.description}
          </p>
        </div>
      </div>
    </div>
  );
}
