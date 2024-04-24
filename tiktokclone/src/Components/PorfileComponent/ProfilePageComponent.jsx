import React from "react";
import { Col, Row } from "react-bootstrap";

function ProfilePageComponent() {
  return (
    <>
      <Row>
        <Col xl={3}>
          <p>image</p>
        </Col>
        <Col xl={6}>
          <Row>
            <Col>
              <p>username</p>
            </Col>
            <Col>
              <button>Edit profile</button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <p>204 following</p>
        </Col>
        <Col xl={4}>
          <p>32 followers</p>
        </Col>
        <Col xl={4}>
          <p>0 likes</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Description</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Upload your first video</p>
        </Col>
      </Row>
    </>
  );
}

export default ProfilePageComponent;
