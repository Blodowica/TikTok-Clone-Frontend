import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiMiniBookmark, HiMiniChatBubbleOvalLeft } from "react-icons/hi2";
import { RiHeartFill } from "react-icons/ri";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { LikeVideoById } from "../../API/VideoAPI";
import { HttpStatusCode } from "axios";


function VideoPlayerComponent({ video }) {
  const navigate = useNavigate();

  const [newlikeCount, setNewLikeCount] = useState(video.likes)

  const openCommentPage = () => {
    // Navigate to the FullVideoPage route and pass the video as state
    navigate(`/fullvideo`, { state: { video: video } });
  };

  const likeVideo = async () =>{
   var response =  await LikeVideoById(video.id);
    if(response === HttpStatusCode.Ok){
      document.getElementById(`like button for video:${video.id}`).style.color = "Red";
      let templikes = newlikeCount + 1;
      setNewLikeCount(templikes);
    }
  }

  return (
    <Container fluid className="rounded border mb-3">
      <Row className="mb-2 mt-1">
        <Col xs={8} md={3} xl={4} sm={4}>
          <h5>testingusername</h5>
        </Col>
        <Col
          xs={4}
          md={4}
          xl={4}
          sm={4}
          className="d-flex align-items-center justify-content-md-beginning"
        >
          <p className="m-0">{new Date(video.createdAt).toDateString()}</p>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <p className="m-0">{video.caption}</p>
        </Col>
      </Row>

      <Row>
        <Col sm={9} md={9} xs={10} className="mb-3 mb-md-0 border">
          <ReactPlayer
            className="d-flex justify-content-md-end "
            url={video.videoURL}
            loop
            controls
            width="100%"
            height="60%"
            style={{ minHeight: "80vh", minWidth: "22vw", maxHeight: "80vh" }}
          />
        </Col>
        <Col
          className="d-flex flex-column align-items-left justify-content-end mb-5 "
          xs={2}
        >
          <Row>
            <Col
              xl={12}
              sm={5}
              className="d-flex flex-column align-items-left justify-content-end mb-1 "
            >
              <Col xl={5}>
                <RiHeartFill
                id={`like button for video:${video.id}`}
                  className="mb-1"
                  style={{ width: "100%", height: "100%" }}
                  onClick={likeVideo}
                />
              </Col>
              <Col className="d-flex justify-content-center" xl={5}>
                {newlikeCount}
              </Col>
            </Col>
          </Row>
          <Row>
            <Col
              xl={12}
              sm={5}
              className="d-flex flex-column align-items-left justify-content-end mb-1 "
            >
              <Col xl={5}>
                <HiMiniChatBubbleOvalLeft
                  className="mb-1"
                  style={{ width: "100%", height: "100%" }}
                  onClick={openCommentPage}
                />
              </Col>
              <Col className="d-flex justify-content-center" xl={5}>
                0
              </Col>
            </Col>
          </Row>
          <Row>
            <Col
              xl={12}
              sm={5}
              className="d-flex flex-column align-items-left justify-content-end mb-1 "
            >
              <Col xl={5}>
                <HiMiniBookmark
                  className="mb-1"
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
              <Col className="d-flex justify-content-center" xl={5}>
                0
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default VideoPlayerComponent;
