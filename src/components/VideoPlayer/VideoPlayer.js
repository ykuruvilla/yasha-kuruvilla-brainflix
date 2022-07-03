import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  return (
    <div className="video-player__wrapper">
      <div className="video-player__container">
        <video
          className="video-player"
          poster={props.videoLink.image}
          controls
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
