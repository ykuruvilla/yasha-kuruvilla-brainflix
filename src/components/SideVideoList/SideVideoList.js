import React from "react";
import SideVideo from "../SideVideo/SideVideo";
import { v4 as uuidv4 } from "uuid";

export default function SideVideoList(props) {
  // array of side videos below
  //   console.log(props.SideVideoData);

  return (
    <div>
      {props.SideVideoData.map((video) => {
        return <SideVideo data={video} key={uuidv4()} />;
      })}
    </div>
  );
}
