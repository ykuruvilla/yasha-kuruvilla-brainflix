import { Component } from "react";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import SideVideoList from "./components/SideVideoList/SideVideoList";
import SideVideoData from "../src/data/videos.json";
import VideoCommentsList from "./components/VideoCommentsList/VideoCommentsList";
import VideoDetails from "../src/data/video-details.json";

class App extends Component {
  state = {
    sideVideoList: SideVideoData,
    videoDetails: VideoDetails,
    currentVideo: "84e96018-4022-434e-80bf-000ce4cd12b8",
  };

  videoClickHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <VideoPlayer />
        <VideoCommentsList videoDetails={this.state.videoDetails[0]} />
        <SideVideoList sideVideoData={this.state.sideVideoList} />
      </div>
    );
  }
}

export default App;
