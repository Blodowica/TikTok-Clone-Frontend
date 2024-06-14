import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import SideNavBarComponent from "../Components/NavComponent/SideNavBarComponent";
import NavHeader from "../Components/NavComponent/NavHeaderComponent";
import { useAuth0 } from "@auth0/auth0-react";
import ReactPlayer from "react-player";

function ProfilePage() {
  const { user } = useAuth0();
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    picture: user?.picture || "",
    nickname: user?.nickname || "",
    description: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const likedVideos = [
    "https://www.youtube.com/shorts/lVgjUWFSR6w?feature=share",
    "https://www.youtube.com/shorts/lVgjUWFSR6w?feature=share",
    "https://www.youtube.com/shorts/lVgjUWFSR6w?feature=share",
    "https://www.youtube.com/shorts/lVgjUWFSR6w?feature=share",
    "https://www.youtube.com/shorts/lVgjUWFSR6w?feature=share",
  ];

  const handleEditProfileClick = () => setShowEditModal(true);
  const handleCloseModal = () => setShowEditModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, picture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile data:", formData);
    handleCloseModal();
  };

  return (
    <>
      <Container fluid style={{ minHeight: "100vh" }}>
        <Row>
          <Col xl={12} lg={3} md={3} sm={3} xs={3}>
            <NavHeader />
          </Col>
        </Row>

        <Row>
          <Col
            xl={2}
            lg={3}
            md={2}
            sm={3}
            style={{
              backgroundColor: "#d4d4d4",
              minHeight: "100vh",
            }}
          >
            <SideNavBarComponent />
          </Col>

          <Col
            lg={9}
            md={10}
            sm={9}
            xl={10}
            style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
          >
            <Row className="align-items-start mt-5 pt-3">
              <Col
                xl={2}
                className="d-flex justify-content-center align-items-center"
              >
                <Image
                  src={formData.picture}
                  roundedCircle
                  width={"80px"}
                  height={"80px"}
                />
              </Col>

              <Col
                xl={10}
                className="d-flex flex-column justify-content-center"
              >
                <Row>
                  <Col>
                    <h3 className="m-0">{user?.nickname}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={handleEditProfileClick}
                    >
                      Edit profile
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className=" mt-5 ">
              <Col xl={2} className="text-center p-0">
                204 following
              </Col>
              <Col xl={2} className="text-center p-0">
                32 followers
              </Col>
              <Col xl={2} className="text-center p-0">
                0 likes
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xl={12}>
                <p>Description</p>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xl={12}>
                <Tabs
                  defaultActiveKey="Videos"
                  id="profile-tabs"
                  className="mb-3"
                  justify
                >
                  <Tab eventKey="Videos" title="Videos">
                    {/* Insert uploaded videos here */}
                  </Tab>
                  <Tab eventKey="Favorites" title="Favorites">
                    {/* Show favorited videos */}
                  </Tab>
                  <Tab eventKey="Liked" title="Liked">
                    <Container fluid>
                      <Row>
                        {likedVideos.map((video, index) => (
                          <Col
                            key={index}
                            xl={2}
                            md={3}
                            sm={4}
                            xs={6}
                            className="mb-4"
                          >
                            <ReactPlayer
                              url={video}
                              width="100%"
                              height="100%"
                              controls
                              style={{ maxHeight: "300px", objectFit: "cover" }}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xl={12} className="text-center"></Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Edit Profile Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProfileImage">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                type="file"
                name="picture"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleInputChange}
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                placeholder="Enter description"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProfilePage;
