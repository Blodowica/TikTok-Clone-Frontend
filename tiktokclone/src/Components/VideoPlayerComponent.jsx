import { Col, Container, Row, Button } from "react-bootstrap";
import ReactPlayer from "react-player";

function VideoPlayerComponent({ video }) {
  return (
    <Container fluid className="rounded border mb-3">
      <Row className="mb-2 mt-1">
        <Col xs={8} md={3} xl={4}>
          <h5>testingusername</h5>
        </Col>
        <Col
          xs={4}
          md={3}
          xl={4}
          className="d-flex align-items-center justify-content-md-beginning"
        >
          <p className="m-0">{new Date(video.createdAt).toLocaleString()}</p>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <p className="m-0">{video.caption}</p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={4} md={9} className="mb-3 mb-md-0 border">
          <ReactPlayer
            className="d-flex justify-content-md-end "
            url={video.videoURL}
            loop
            controls
            width="100%"
            height="60%"
            style={{ minHeight: "80vh", minWidth: "22vw" }}
          />
        </Col>
        <Col
          xs={8}
          sm={6}
          md={3}
          className="d-flex flex-column align-items-left justify-content-end mb-5 "
        >
          <Button
            className="mb-1"
            style={{ width: "5vw", height: "3vh", fontSize: "80%" }}
          >
            Like {video.likes}
          </Button>
          <Button
            className="mb-1"
            style={{ width: "5vw", height: "3vh", fontSize: "80%" }}
          >
            Comment
          </Button>

          <Button
            className="mb-1"
            style={{ width: "5vw", height: "3vh", fontSize: "80%" }}
          >
            Save
          </Button>
          <Button style={{ width: "5vw", height: "3vh", fontSize: "80%" }}>
            Download
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default VideoPlayerComponent;
