import React from "react";
import VideoComment from "../VideoComment/VideoComment";
import { v4 as uuid } from "uuid";

export default function VideoCommentsList(props) {
  console.log("comments", props.videoDetails.comments);
  return (
    <div>
      {props.videoDetails.comments.map((video) => {
        return <VideoComment data={video} key={uuid()} />;
      })}
    </div>
  );
}
