import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

function VideoPlayer() {
  const [currentUrl, setCurrentUrl] = useState(videoUrls[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videoUrls.length);
    setCurrentUrl(videoUrls[randomIndex]);
  }, []);

  return (
    <VideoCont>
      <div>
        <ReactPlayer
          className="react-player"
          url={currentUrl}
          playing={true}
          muted={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
      <OverlayVideo />
    </VideoCont>
  );
}

const videoUrls = [
  "https://youtu.be/gCpt-eiYoDM",
  "https://youtu.be/TQzv00NjFJg",
];

const OverlayVideo = styled.div`
  position: absolute;
  bottom: 0;
  top: -90px;
  left: 0;
  width: 100%;
  /* height: 100px; */
  height: 0px;
  background-color: black;
`;

const VideoCont = styled.div`
  object-fit: cover;
  width: 100%;
  height: 0;

  > div {
    position: relative;
    padding-top: 56.25%; /* 비디오 가로세로 비율 */
  }

  > div > .react-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default VideoPlayer;
