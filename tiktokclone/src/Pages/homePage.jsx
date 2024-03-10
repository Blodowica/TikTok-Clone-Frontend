import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NavBar from "../Models/NavBar";

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
        <Col className="text-center mt-4" xl={7}>
          Video player here
        </Col>
        <Col xl={3}></Col>
      </Row>
    </Container>
  );
}

export default HomePage;
