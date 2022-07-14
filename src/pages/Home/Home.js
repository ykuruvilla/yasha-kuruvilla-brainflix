import React, { Component } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoCommentsList from "../../components/VideoCommentsList/VideoCommentsList";
import SideVideoList from "../../components/SideVideoList/SideVideoList";
import axios from "axios";

const API_URL = "http://localhost:5050";
const API_KEY = "ce5a1734-81aa-435f-8993-c52721d056ed";

export default class Home extends Component {
  state = {
    videoList: [],
    activeVideo: null,
  };

  populateState = async () => {
    try {
      const result = await axios.get(`${API_URL}/videos`);
      const resultTwo = await axios.get(
        `${API_URL}/videos/${result.data[0].id}`
      );

      this.setState({
        videoList: result.data,
        activeVideo: resultTwo.data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };

  componentDidMount() {
    this.populateState();
  }

  componentDidUpdate(pP) {
    if (pP.match.url !== this.props.match.url) {
      const newVideoId = this.props.match.params.videoId;

      if (!newVideoId) {
        this.populateState();
        return;
      }

      axios.get(`${API_URL}/videos/${newVideoId}`).then((response) => {
        this.setState({ activeVideo: response.data });
      });
    }
  }

  render() {
    if (!this.state.activeVideo) {
      return <h1>Page Loading...</h1>;
    }

    const activeVideoData = this.state.activeVideo;

    return (
      <>
        <VideoPlayer videoDetails={activeVideoData} />
        <section className="page__lower">
          <section className="main-video-content">
            <MainVideoInfo videoDetails={activeVideoData} />
            <CommentForm comments={activeVideoData.comments} />
            <VideoCommentsList videoDetails={activeVideoData} />
          </section>
          <SideVideoList
            activeVideoId={activeVideoData.id}
            sideVideoData={this.state.videoList}
          />
        </section>
      </>
    );
  }
}
