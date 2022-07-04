import { Component } from "react";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import SideVideoList from "./components/SideVideoList/SideVideoList";
import VideoData from "../src/data/videos.json";
import VideoCommentsList from "./components/VideoCommentsList/VideoCommentsList";
import VideoDetails from "../src/data/video-details.json";
import MainVideoInfo from "./components/MainVideoInfo/MainVideoInfo";
import CommentForm from "./components/CommentForm/CommentForm";
import "./App.scss";
import axios from "axios";

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "ce5a1734-81aa-435f-8993-c52721d056ed";

// console.log(VideoDetails[0]);
class App extends Component {
  state = {
    videoList: [],
    videoDetails: VideoDetails,
    activeVideo: null,
  };

  sideVideoClickHandler = (e) => {
    let newVideoId = e.target.id;
    const showNewVideo = this.state.videoDetails.find(
      (obj) => obj.id === newVideoId
    );

    this.setState({ activeVideo: showNewVideo });
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/videos?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({
          videoList: response.data,
        });
        const activeVideoId = response.data[0].id;
        axios
          .get(`${API_URL}/videos/${activeVideoId}?api_key=${API_KEY}`)
          .then((response) => {
            console.log(response.data);
            this.setState({ activeVideo: response.data });
          });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  render() {
    if (!this.state.activeVideo) {
      return <h1>Page Loading...</h1>;
    }

    return (
      <div className="App">
        <Header />
        <VideoPlayer videoLink={this.state.activeVideo} />
        <section className="page__lower">
          <section className="main-video-content">
            <MainVideoInfo videoDetails={this.state.activeVideo} />
            <CommentForm comments={this.state.activeVideo.comments} />
            <VideoCommentsList videoDetails={this.state.activeVideo} />
          </section>
          <SideVideoList
            activeVideoId={this.state.activeVideo.id}
            clickHandler={this.sideVideoClickHandler}
            sideVideoData={this.state.videoList}
          />
        </section>
      </div>
    );
  }
}

export default App;
