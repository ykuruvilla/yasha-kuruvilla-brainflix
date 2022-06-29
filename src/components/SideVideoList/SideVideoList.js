import React from "react";
import SideVideo from "../SideVideo/SideVideo";
import { v4 as uuid } from "uuid";

export default function SideVideoList(props) {
  // array of side videos below
  //   console.log(props.SideVideoData);

  return (
    <div>
      {props.sideVideoData.map((video) => {
        return <SideVideo data={video} key={uuid()} />;
      })}
    </div>
  );
}
