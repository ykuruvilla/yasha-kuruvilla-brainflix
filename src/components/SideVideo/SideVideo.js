import "./SideVideo.scss";
import { Link } from "react-router-dom";

const SideVideo = ({ sideVideoData }) => {
  return (
    <>
      <div className="side-video__item">
        <div className="side-video__image-container">
          <Link to={`/video/${sideVideoData.id}`}>
            <img
              className="side-video__image"
              src={sideVideoData.image}
              alt={sideVideoData.title}
            />
          </Link>
        </div>
        <div className="side-video__text-container">
          <h3 className="side-video__title">{sideVideoData.title}</h3>
          <p className="side-video__channel">{sideVideoData.channel}</p>
        </div>
      </div>
    </>
  );
};

export default SideVideo;
