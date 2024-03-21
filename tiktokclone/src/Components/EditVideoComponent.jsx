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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>caption</Form.Label>
                <Form.Control type="text" placeholder="Video caption" />
              </Form.Group>
            </Col>
            <Col xl={5}>
              <ReactPlayer
                className="d-flex justify-content-end mt-5"
                loop={true}
                style={{ justifyContent: "end" }}
                width={"90%"}
                height={"100%"}
                controls
                url={URL.createObjectURL(selectedFile)}
              />
            </Col>
          </Row>
          <Col className="p-4 mt-4 mb-4 rounded">
            <Col className="p-2 mt-3 mb-5"></Col>
          </Col>

          <Col xl={12}>
            <Row>
              <Col xl={6}>
                <Button
                  onClick={() => handleCancel()}
                  className="d-flex justify-content-start"
                  size="sm"
                >
                  Cancel
                </Button>
              </Col>
              <Col xl={6} className="text-end">
                <Button variant="danger" className="mt-3" size="sm">
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
