import "./SideVideo.scss";

const SideVideo = (props) => {
  // console.log(props);
  return (
    <>
      <div className="side-video__item">
        <div className="side-video__image-container">
          <a href="#">
            <img
              onClick={(e) => {
                props.clickHandler(e);
              }}
              id={props.data.id}
              className="side-video__image"
              src={props.data.image}
              alt={props.data.title}
            />
          </a>
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
