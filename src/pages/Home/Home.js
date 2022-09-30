import React from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoCommentsList from "../../components/VideoCommentsList/VideoCommentsList";
import SideVideoList from "../../components/SideVideoList/SideVideoList";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// const API_KEY = "ce5a1734-81aa-435f-8993-c52721d056ed";
const API_URL = "http://localhost:5500";

const Home = (props) => {
  const params = useParams();
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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const newVideo = await axios.get(`${API_URL}/videos/${params.videoId}`);
      setActiveVideo(newVideo.data);
    };
    if (params.videoId) {
      fetchData();
    }
  }, [params.videoId]);

  if (!activeVideo) {
    return <h1>Page Loading...</h1>;
  }

  return (
    <>
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
};

export default Home;
