import React from "react";
import VideoComment from "../VideoComment/VideoComment";
import { v4 as uuid } from "uuid";
import "./VideoCommentsList.scss";

export default function VideoCommentsList(props) {
  return (
    <div className="video__comments">
      {props.videoDetails.comments.map((video) => {
        return <VideoComment data={video} key={uuid()} />;
      })}
    </div>
  );
}
