import React from "react";

export default function VideoComment(props) {
  console.log("videoComments", props.data);

  return (
    <div>
      <p>{props.name}</p>;
    </div>
  );
}
