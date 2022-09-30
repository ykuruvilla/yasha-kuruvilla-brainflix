import React from "react";
import SideVideo from "../SideVideo/SideVideo";
import { v4 as uuid } from "uuid";
import "./SideVideoList.scss";

export default function SideVideoList(props) {
  if (!props.sideVideoData) {
    return <p>OPage Loading...</p>;
  }

  const showNewVideoList = props.sideVideoData.filter(
    (obj) => obj.id !== props.activeVideoId
  );

  return (
    <section className="side-videos__container">
      <h3 className="side-videos__title">NEXT VIDOES</h3>
      <div className="side-videos">
        {showNewVideoList.map((video) => {
          return <SideVideo sideVideoData={video} key={uuid()} />;
        })}
      </div>
    </section>
  );
}
