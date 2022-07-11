import "./VideoPlayer.scss";

const VideoPlayer = ({ videoDetails }) => {
  return (
    <section className="video-player__wrapper">
      <div className="video-player__container">
        <video
          className="video-player"
          poster={videoDetails.image}
          controls
        ></video>
      </div>
    </section>
  );
};

export default VideoPlayer;
