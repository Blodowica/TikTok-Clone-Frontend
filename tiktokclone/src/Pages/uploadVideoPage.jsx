import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavHeader from "../Components/NavHeaderComponent";
import SideNavBarComponent from "../Components/SideNavBarComponent";
import UploadVideoComponent from "../Components/UploadVideoComponent";
// import UploadVideoComponent from "../Components/UploadVideoComponent"; // Importing the UploadVideoComponent

function UploadVideoPage() {
  return (
    <>
      <Container fluid>
        <Row>
          <NavHeader />
        </Row>

        <Row xl={12}>
          {/* Side bar here */}
          <Col xl={2} lg={2} style={{ backgroundColor: "#d4d4d4" }}>
            <SideNavBarComponent />
          </Col>

          {/* upload video funct start here */}
          <Col xl={10}>
            <UploadVideoComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UploadVideoPage;
