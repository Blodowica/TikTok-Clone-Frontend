import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import SideNavBarComponent from "../Components/NavComponent/SideNavBarComponent";
import NavHeader from "../Components/NavComponent/NavHeaderComponent";
import UploadVideoComponent from "../Components/UploadVideoComponent/UploadVideoComponent";


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
            }}
          >
            <SideNavBarComponent />
          </Col>

          <Col xl={10} style={{ backgroundColor: "green" }}>
            <Row>
              <Col
                xl={2}
                className=" d-flex justify-content-center align-items-center"
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&s"
                  roundedCircle
                  width={"60%"}
                  height={"60%"}
                />
              </Col>

              <Col xl={10} className="mt-4">
                <Row>
                  <Col className="text-center justify-content-center">
                    <h3>SaltyHooman</h3>
                  </Col>
                  <Col>
                    <button>Edit profile</button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xl={2}>204 following</Col>
              <Col xl={2}>32 followers</Col>
              <Col xl={2}>0 likes</Col>
            </Row>
            <Row>
              <Col xl={2}>
                <p>Description</p>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                {/* <Nav justify variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link}>
                      Videos
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Favorites</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Liked</Nav.Link>
                  </Nav.Item>
                </Nav> */}
                <Tabs
                  defaultActiveKey="Videos"
                  id="justify-tab-example"
                  className="mb-3"
                  justify
                >
                  <Tab eventKey="Videos" title="Videos">
                    <UploadVideoComponent />
                  </Tab>
                  <Tab eventKey="Favorites" title="Favorites">
                    <UploadVideoComponent />
                  </Tab>
                  <Tab eventKey="Liked" title="Liked">
                    <UploadVideoComponent />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xl={12} className="text-center">
                losnlndlnlnelsnslnslsnlsn
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;
