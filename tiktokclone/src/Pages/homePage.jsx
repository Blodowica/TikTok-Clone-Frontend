import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import VideoPlayerComponent from "../Components/VideoPlayerComponent";

function HomePage() {
  return (
    <Container fluid>
      <NavBar />
      <hr />
      <Row>
        <Col xl={2}>
          <p>for you</p>
          <p>Following</p>
          <p>profile</p>
          <br />
          <br />
          <p>Following accounts</p>
          <hr />
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
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
