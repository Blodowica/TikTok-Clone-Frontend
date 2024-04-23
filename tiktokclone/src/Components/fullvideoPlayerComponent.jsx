import React from "react";
import { Col } from "react-bootstrap";
import ReactPlayer from "react-player";
function FullVideoPlayerComponent(props) {
  return (
    <Col className="d-flex justify-content-center" style={{ height: "75vh" }}>
      {props.video && (
        <ReactPlayer
          className=""
          url={props.video.videoURL}
          loop
          controls
          width="50%"
          height="100%"
          style={{
            minHeight: "80vh",
          }}
        />
      )}
    </Col>
  );
}

export default FullVideoPlayerComponent;
