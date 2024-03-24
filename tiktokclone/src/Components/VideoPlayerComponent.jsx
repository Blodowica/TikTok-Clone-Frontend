import ReactPlayer from "react-player";

function VideoPlayerComponent({ video }) {
  console.log(video);
  return (
    <>
      <ReactPlayer
        url={video.videoURL}
        loop
        height={"60vh"}
        width={"15vw"}
        controls
      />
    </>
  );
}

export default VideoPlayerComponent;
