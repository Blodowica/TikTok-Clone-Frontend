import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NavHeader from "../Components/NavHeaderComponent";
import VideoPlayerComponent from "../Components/VideoPlayerComponent";
import SideNavBarComponent from "../Components/SideNavBarComponent";

function HomePage() {
  return (
    <Container fluid>
      <NavHeader />

      <Row>
        <Col xl={2} style={{ backgroundColor: "#d4d4d4" }}>
          <SideNavBarComponent />
        </Col>
        <Col xl={2}></Col>
        <Col className="d-flex justify-content-center mt-4" xl={3} fluid>
          <VideoPlayerComponent />
        </Col>
        <Col xl={4}></Col>
      </Row>
    </Container>
  );
}

export default HomePage;
