import { Component } from "react";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import SideVideoList from "./components/SideVideoList/SideVideoList";
import VideoData from "../src/data/videos.json";
import VideoCommentsList from "./components/VideoCommentsList/VideoCommentsList";
import VideoDetails from "../src/data/video-details.json";
import MainVideoInfo from "./components/MainVideoInfo/MainVideoInfo";
import CommentForm from "./components/CommentForm/CommentForm";

class App extends Component {
  state = {
    videoList: VideoData,
    videoDetails: VideoDetails,
    activeVideo: VideoDetails[0],
  };

  sideVideoClickHandler = (e) => {
    let newVideoId = e.target.id;
    const showNewVideo = this.state.videoDetails.find(
      (obj) => obj.id === newVideoId
    );

    this.setState({ activeVideo: showNewVideo });
    console.log(this.state.activeVideo);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <VideoPlayer videoLink={this.state.activeVideo} />
        <MainVideoInfo videoDetails={this.state.activeVideo} />
        <CommentForm comments={this.state.activeVideo.comments} />
        <VideoCommentsList videoDetails={this.state.activeVideo} />
        <SideVideoList
          activeVideoId={this.state.activeVideo.id}
          clickHandler={this.sideVideoClickHandler}
          sideVideoData={this.state.videoList}
        />
      </div>
    );
  }
}

export default App;
