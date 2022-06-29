import "./SideVideo.scss";

const SideVideo = (props) => {
  console.log(props);
  return (
    <>
      <div className="side-video__item">
        <img
          className="side-video__image"
          src={props.data.image}
          alt={props.data.title}
        />
      </div>
      <div>
        <h3 className="side-video__title">{props.data.title}</h3>
        <p className="side-video__channel">{props.data.channel}</p>
      </div>
    </>
  );
};

export default SideVideo;
