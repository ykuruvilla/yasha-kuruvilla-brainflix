import "./VideoPlayer.scss";

const VideoPlayer = ({ videoDetails }) => {
  return (
    <div className="video-player__wrapper">
      <div className="video-player__container">
        <video
          className="video-player"
          poster={videoDetails.image}
          controls
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
