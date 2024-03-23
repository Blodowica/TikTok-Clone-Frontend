import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { handleUploadVideo } from "../API/VideoAPI";
import { HttpStatusCode } from "axios";
import { useNavigate } from "react-router-dom";

function EditVideoComponent(props) {
  const fileInputRef = props.FileInputRef;
  const handleCancel = props.handleCancel;
  const selectedFile = props.selectedFile;
  const [showModal, setShowModal] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [caption, setCaption] = useState("");
  const [isCommentDisabled, setisCommentDisabled] = useState(false);
  const [audience, setAudience] = useState("1");
  const userId = 4;
  const navigate = useNavigate();

  const redirectToProfilePage = () => {
    navigate("/profile");
  };

  const handleCloseModal = () => {
    setCaption("");
    setisCommentDisabled(false);
    setAudience("");
    setShowModal(false);
    setUploadSuccess(false);
    handleCancel();
  };

  const handleUploadButtonClick = async () => {
    // Call the handleUploadVideo function with form data

    var response = await handleUploadVideo(
      selectedFile,
      caption,
      isCommentDisabled,
      audience,
      userId
    );
    if (response.status === HttpStatusCode.Ok) {
      setShowModal(true);
    }
  };
  return (
    <>
      <Row className="mt-5">
        <Col xl={2}></Col>

        {/* Upload component starts here  */}
        <Col
          className="p-5 rounded"
          xl={8}
          style={{
            backgroundColor: "#d3d3d3",
          }}
        >
          <Row>
            <Col xl={7}>
              <Row className="mt-5">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>caption</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Video caption"
                    onChange={(e) => setCaption(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mt-3">
                <Form>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Disable video comments"
                    onChange={(e) => setisCommentDisabled(e.target.checked)}
                  />
                </Form>
              </Row>
              <Row className="mt-5 p-2">
                <Form.Label>Audience who can see this video</Form.Label>
                <Form.Select
                  required
                  aria-label="Default select example"
                  onChange={(e) => setAudience(e.target.value)}
                >
                  <option value="1">Everyone</option>
                  <option value="2">Only Follower</option>
                  <option value="3">Only Friends</option>
                </Form.Select>
              </Row>
            </Col>
            <Col
              xl={5}
              className="d-flex justify-content-center text-center mt-5"
            >
              <ReactPlayer
                playing={true}
                muted={true}
                loop={true}
                width={"65%"}
                height={"85%"}
                controls
                url={URL.createObjectURL(selectedFile)}
              />
            </Col>
          </Row>

          <Col xl={12} className="mt-5">
            <Row>
              <Col xl={6} className="text-start">
                <Button onClick={() => handleCancel()} size="sm">
                  Cancel
                </Button>
              </Col>
              <Col xl={6} className="text-end">
                <Button
                  variant="danger"
                  onClick={() => handleUploadButtonClick()}
                  className=""
                  size="sm"
                >
                  Upload
                </Button>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
      {/* Modal for upload success */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your video has been successfully uploaded.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Upload Another
          </Button>

          <Button variant="primary" onClick={redirectToProfilePage}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditVideoComponent;
