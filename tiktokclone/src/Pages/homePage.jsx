import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function HomePage() {
  return (
    <Container fluid>
      <Row xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
        <Col xl={2}>
          <h1>TokTik</h1>
        </Col>
        <Col xl={7} className="mt-3">
          <Form.Control size="sm" placeholder="Search" />
        </Col>
        <Col xl={3}>
          <Button>+ Upload</Button>
        </Col>
      </Row>
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
