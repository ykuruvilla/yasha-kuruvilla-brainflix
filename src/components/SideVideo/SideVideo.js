import "./SideVideo.scss";
import { Link } from "react-router-dom";

const SideVideo = (props) => {
  return (
    <>
      <div className="side-video__item">
        <div className="side-video__image-container">
          <Link to={`/video/${props.data.id}`}>
            <img
              className="side-video__image"
              src={props.data.image}
              alt={props.data.title}
            />
          </Link>
        </div>
        <div className="side-video__text-container">
          <h3 className="side-video__title">{props.data.title}</h3>
          <p className="side-video__channel">{props.data.channel}</p>
        </div>
      </div>
    </>
  );
};

export default SideVideo;
