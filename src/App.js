import { Component } from "react";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import SideVideoData from "../src/data/videos.json";
import SideVideoList from "./components/SideVideoList/SideVideoList";

class App extends Component {
  state = {
    sideVideoList: SideVideoData,
  };

  videoClickHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <VideoPlayer />
        <SideVideoList SideVideoData={this.state.sideVideoList} />
      </div>
    );
  }
}

export default App;
