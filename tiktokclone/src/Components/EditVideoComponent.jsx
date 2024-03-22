import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

function EditVideoComponent(props) {
  const fileInputRef = props.FileInputRef;
  const handleCancel = props.handleCancel;
  const selectedFile = props.selectedFile;
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
                  <Form.Control type="text" placeholder="Video caption" />
                </Form.Group>
              </Row>
              <Row className="mt-3">
                <Form>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Disable video comments"
                  />
                </Form>
              </Row>
              <Row className="mt-5 p-2">
                <Form.Label>Audience who can see this video</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="1">Everyone</option>
                  <option value="2">Only Follower</option>
                  <option value="3">Only Friends</option>
                </Form.Select>
              </Row>
            </Col>
            <Col xl={5}>
              <ReactPlayer
                className="d-flex justify-content-center text-center mt-5"
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
                <Button variant="danger" className="" size="sm">
                  Upload
                </Button>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default EditVideoComponent;
