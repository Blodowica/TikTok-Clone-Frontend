import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NavHeader from "../Components/NavHeaderComponent";
import VideoPlayerComponent from "../Components/VideoPlayerComponent";
import SideNavBarComponent from "../Components/SideNavBarComponent";
import { getAllVideos } from "../API/VideoAPI";

function HomePage() {
  const [videos, setVideos] = useState([]);

  const handleLoadVideos = async () => {
    const fetchedVideos = await getAllVideos();
    setVideos(fetchedVideos);
  };

  useEffect(() => {
    handleLoadVideos();
  }, []);

  return (
    <Container fluid>
      <NavHeader />

      <Row>
        <Col
          xl={2}
          style={{
            position: "fixed",
            top: "4.8vh",
            bottom: 0,
            backgroundColor: "#d4d4d4",
            outlineStyle: "dotted",
            outlineColor: "green",
          }}
        >
          <SideNavBarComponent />
        </Col>
        <Col xl={2}></Col>
        {videos.map((video, index) => (
          <Row key={index} className="d-flex justify-content-center mt-4">
            <Col xl={3} style={{ outlineStyle: "dotted", outlineColor: "red" }}>
              <VideoPlayerComponent video={video} />
            </Col>
          </Row>
        ))}
        <Col xl={4}></Col>
      </Row>
    </Container>
  );
}

export default HomePage;
