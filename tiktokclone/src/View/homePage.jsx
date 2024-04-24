import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getAllVideos } from "../API/VideoAPI";
import NavHeader from "../Components/NavComponent/NavHeaderComponent";
import SideNavBarComponent from "../Components/NavComponent/SideNavBarComponent";
import VideoPlayerComponent from "../Components/VideoPlayerComponent/VideoPlayerComponent";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [connection, setConnection] = useState(null);

  const handleLoadVideos = async () => {
    const fetchedVideos = await getAllVideos();
    setVideos(fetchedVideos);
  };

  useEffect(() => {
    handleLoadVideos();
    return () => {
      if (connection) {
        connection.stop().then(() => {
          console.log("SignalR connection stopped");
        });
      }
    };
  }, [connection]);

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
          lg={3}
          md={2}
          sm={3}
          style={{
            // position: "sticky",
            // top: "5vh", // Adjust this value based on your header height
            // // Maximum height for responsiveness
            // overflowY: "auto",
            // zIndex: 1000, // Ensure it's above other conten
            backgroundColor: "#d4d4d4",
          }}
        >
          <SideNavBarComponent />
        </Col>

        <Col
          xl={10}
          lg={9}
          md={8}
          sm={9}
          style={{ marginTop: "10vh", height: "100%", minHeight: "93.9vh" }}
        >
          {videos.map((video, index) => (
            <Row key={index} className="d-flex justify-content-center ">
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
