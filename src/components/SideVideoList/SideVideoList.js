import React from "react";
import SideVideo from "../SideVideo/SideVideo";
import { v4 as uuid } from "uuid";

export default function SideVideoList(props) {
  return (
    <div className="side-videos">
      {props.sideVideoData.map((video) => {
        return <SideVideo data={video} key={uuid()} />;
      })}
    </div>
  );
}
