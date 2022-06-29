import { Component } from "react";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import SideVideoList from "./components/SideVideoList/SideVideoList";
import VideoData from "../src/data/videos.json";
import VideoCommentsList from "./components/VideoCommentsList/VideoCommentsList";
import VideoDetails from "../src/data/video-details.json";
import MainVideoInfo from "./components/MainVideoInfo/MainVideoInfo";

class App extends Component {
  state = {
    videoList: VideoData,
    videoDetails: VideoDetails,
  };

  videoClickHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <VideoPlayer videoLink={this.state.videoDetails[0]} />
        <MainVideoInfo videoDetails={this.state.videoDetails[0]} />
        <VideoCommentsList videoDetails={this.state.videoDetails[0]} />
        <SideVideoList sideVideoData={this.state.videoList} />
      </div>
    );
  }
}

export default App;
