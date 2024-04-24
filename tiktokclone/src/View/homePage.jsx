import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getAllVideos } from "../API/VideoAPI";
import NavHeader from "../Components/NavComponent/NavHeaderComponent";
import SideNavBarComponent from "../Components/NavComponent/SideNavBarComponent";
import VideoPlayerComponent from "../Components/VideoPlayerComponent/VideoPlayerComponent";

function HomePage() {
  const [videos, setVideos] = useState([]);
console.log(`${process.env.REACT_APP_VIDEO_SERVICE_API}`);
  const handleLoadVideos = async () => {
    const fetchedVideos = await getAllVideos();
    setVideos(fetchedVideos);
  };

  useEffect(() => {
    handleLoadVideos();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xl={12}>
          <NavHeader />
        </Col>
      </Row>

      <Row>
        {/* Side bar here */}
        <Col
          xl={2}
          style={{
            backgroundColor: "#d4d4d4",
          }}
        >
          <SideNavBarComponent />
        </Col>

        <Col xl={10} style={{ height: "100%", minHeight: "93.9vh" }}>
          {videos.map((video, index) => (
            <Row key={index} className="d-flex justify-content-center mt-4">
              <Col xl={5} style={{}}>
                <VideoPlayerComponent video={video} />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
