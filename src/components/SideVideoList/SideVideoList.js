import React from "react";
import SideVideo from "../SideVideo/SideVideo";
import { v4 as uuid } from "uuid";

export default function SideVideoList(props) {
  const showNewVideoList = props.sideVideoData.filter(
    (obj) => obj.id !== props.activeVideoId
  );

  return (
    <div className="side-videos__container">
      <h3 className="side-videos__title">NEXT VIDOES</h3>
      <div className="side-videos">
        {showNewVideoList.map((video) => {
          return (
            <SideVideo
              clickHandler={props.clickHandler}
              data={video}
              key={uuid()}
            />
          );
        })}
      </div>
    </div>
  );
}
