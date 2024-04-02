import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavHeader from "../Components/NavHeaderComponent";
import SideNavBarComponent from "../Components/SideNavBarComponent";
import ProfilePageComponent from "../Components/ProfilePageComponent";

function ProfilePage() {
  return (
    <>
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
              outlineStyle: "dotted",
              outlineColor: "green",
            }}
          >
            <SideNavBarComponent />
          </Col>

          <Col xl={10} style={{ backgroundColor: "green" }}>
            <Container fluid>
              <Row>
                <Col xl={3}>
                  <p>image</p>
                </Col>
                <Col xl={9}>
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
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
