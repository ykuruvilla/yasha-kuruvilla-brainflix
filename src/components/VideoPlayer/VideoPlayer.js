import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  return (
    <div className="video__player">
      <video
        className="main-video"
        poster={props.currentVideo}
        controls
      ></video>
      ;
    </div>
  );
};

export default VideoPlayer;
