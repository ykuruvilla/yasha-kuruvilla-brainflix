import React, { Component } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoCommentsList from "../../components/VideoCommentsList/VideoCommentsList";
import SideVideoList from "../../components/SideVideoList/SideVideoList";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const API_KEY = "ce5a1734-81aa-435f-8993-c52721d056ed";
const API_URL = "http://localhost:5500";

const Home = () => {
  // state = {
  //   videoList: [],
  //   activeVideo: null,
  // };

  const [videoList, setVideoList] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const populateState = async () => {
    try {
      const result = await axios.get(`${API_URL}/videos`);
      const resultTwo = await axios.get(
        `${API_URL}/videos/${result.data[0].id}`
      );
      setVideoList(result.data);
      setActiveVideo(resultTwo.data);
    } catch (error) {
      window.alert(error.message);
    }
  };

  useEffect(() => {
    populateState();
    console.log("hello");
  }, []);

  // componentDidMount() {
  //   this.populateState();
  // }

  // componentDidUpdate(pP) {
  //   if (pP.match.url !== this.props.match.url) {
  //     const newVideoId = this.props.match.params.videoId;

  //     if (!newVideoId) {
  //       this.populateState();
  //       return;
  //     }

  //     axios.get(`${API_URL}/videos/${newVideoId}`).then((response) => {
  //       this.setState({ activeVideo: response.data });
  //     });
  //   }
  // }

  // if (!this.state.activeVideo) {
  //   return <h1>Page Loading...</h1>;
  // }

  // const activeVideoData = this.state.activeVideo;
  if (!activeVideo) {
    return <h1>Page Loading...</h1>;
  } else {
    return (
      <>
        <p>Hello</p>
        <VideoPlayer videoDetails={activeVideo} />
        <section className="page__lower">
          <section className="main-video-content">
            <MainVideoInfo videoDetails={activeVideo} />
            <CommentForm comments={activeVideo.comments} />
            <VideoCommentsList videoDetails={activeVideo} />
          </section>
          <SideVideoList
            activeVideoId={activeVideo.id}
            sideVideoData={videoList}
          />
        </section>
      </>
    );
  }
};

export default Home;
