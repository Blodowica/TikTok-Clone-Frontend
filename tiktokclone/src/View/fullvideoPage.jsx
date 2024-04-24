import React from "react";
import { useMemo } from "react";
import { CloseButton, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavHeader from "../Components/NavComponent/NavHeaderComponent";
import CommentesComponent from "../Components/CommentsComponent";
import FullVideoPlayerComponent from "../Components/fullvideoPlayerComponent";

function FullVideoPage() {
  console.log("FullVideoPage rendered");

  const location = useLocation();
  const video = useMemo(
    () => location.state?.video || null,
    [location.state?.video]
  );
  return (
    <Container fluid>
      <Row>
        <Col xl={12}>
          <NavHeader />
        </Col>
      </Row>
      <Col className="mt-1 mb-1 d-flex justify-content-start m-4 mb-0" xl={6}>
        <CloseButton />
      </Col>
      <Row>
        <Col xl={8} style={{ backgroundColor: "black" }}>
          <FullVideoPlayerComponent video={video} />
        </Col>
        <Col xl={4} className="position-relative">
          <CommentesComponent video={video} />
        </Col>
      </Row>
    </Container>
  );
}

export default FullVideoPage;
