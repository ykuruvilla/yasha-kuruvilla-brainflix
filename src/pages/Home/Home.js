import React, { Component } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoCommentsList from "../../components/VideoCommentsList/VideoCommentsList";
import SideVideoList from "../../components/SideVideoList/SideVideoList";
import axios from "axios";

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "ce5a1734-81aa-435f-8993-c52721d056ed";

export default class Home extends Component {
  state = {
    videoList: [],
    activeVideo: null,
  };

  populateState = async () => {
    try {
      const result = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
      const result2 = await axios.get(
        `${API_URL}/videos/${result.data[0].id}?api_key=${API_KEY}`
      );
      this.setState({
        videoList: result.data,
        activeVideo: result2.data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };

  componentDidMount() {
    this.populateState();
    // axios
    //   .get(`${API_URL}/videos?api_key=${API_KEY}`)
    //   .then((response) => {
    //     this.setState({
    //       videoList: response.data,
    //     });
    //     const activeVideoId = response.data[0].id;
    //     axios
    //       .get(`${API_URL}/videos/${activeVideoId}?api_key=${API_KEY}`)
    //       .then((response) => {
    //         this.setState({ activeVideo: response.data });
    //       });
    //   })
    //   .catch((error) => {
    //     window.alert(error.message);
    //   });
  }

  componentDidUpdate(pP, pS) {
    if (pP.match.url !== this.props.match.url) {
      const newVideoId = this.props.match.params.videoId;

      if (!newVideoId) {
        this.populateState();
        return;
      }

      axios
        .get(`${API_URL}/videos/${newVideoId}?api_key=${API_KEY}`)
        .then((response) => {
          this.setState({ activeVideo: response.data });
        });
    }
  }

  render() {
    if (!this.state.activeVideo) {
      return <h1>Page Loading...</h1>;
    }

    return (
      <>
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
      </>
    );
  }
}