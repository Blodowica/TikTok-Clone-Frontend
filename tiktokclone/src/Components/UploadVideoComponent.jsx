import React, { useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

function UploadVideoComponent(props) {
  const fileInputRef = props.fileInputRef;
  const [selectedFileName, setSelectedFileName] = useState("");
  const handleNext = props.handleNext;

  function handleFileSubmit() {
    fileInputRef.current.click();
    console.log("handleFileSubmit test");
  }

  function handleFileChange(event) {
    const file = event.target.files[0];

    setSelectedFileName(file.name);

    // Handle the file here

    props.onFileSelected(file);
  }

  return (
    <>
      <Row className="mt-5 d-flex align-items-center justify-content-center">
        <Col xl={2}></Col>

        {/* Upload component starts here  */}
        <Col
          className="p-5 rounded"
          xl={8}
          style={{
            backgroundColor: "#d3d3d3",
            // outlineStyle: "dotted",
            // outlineColor: "black",
          }}
        >
          <Col
            className="p-4 mt-4 mb-4 rounded"
            style={{
              backgroundColor: "#d3d3d3",
              outlineStyle: "dotted",
              outlineColor: "black",
            }}
          >
            <Col className="p-2 mt-3 mb-5">
              <>
                <p className="text-center">" ..........insert Icon......"</p>
                <h4 className="text-center">Select video to upload</h4>
                <p className="text-center">or drag and drop a file</p>
                <p className="mt-1 text-center">MP4 or WebM</p>
                <p className="text-center">Up to 1 minute</p>

                <Col className="d-flex justify-content-center mt-3">
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <Button
                    onClick={handleFileSubmit}
                    variant="primary"
                    className="btn btn-danger w-50"
                  >
                    Select File
                  </Button>
                </Col>
                <p style={{ fontSize: "70%" }} className="mt-2 text-center">
                  {selectedFileName}
                </p>
                <p className="text-center mt-5">
                  Please don't post inappropriate content, and be respectful
                </p>
              </>
            </Col>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              onClick={() => handleNext(fileInputRef)}
              variant="danger"
              className="d-flex justify-content-end mt-3 "
              size="sm"
            >
              Next
            </Button>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default UploadVideoComponent;
