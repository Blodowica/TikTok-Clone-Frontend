import React from "react";
import ReactPlayer from "react-player";

function VideoPlayerComponent() {
  return (
    <>
      <ReactPlayer
        url={"https://www.youtube.com/shorts/c9JN02-A3Es?feature=share"}
        loop
        height={"80vh"}
        // width={"25vw"}
      />
    </>
  );
}

export default VideoPlayerComponent;
