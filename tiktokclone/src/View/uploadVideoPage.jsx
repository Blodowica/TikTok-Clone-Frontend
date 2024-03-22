import React, { useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavHeader from "../Components/NavHeaderComponent";
import SideNavBarComponent from "../Components/SideNavBarComponent";
import UploadVideoComponent from "../Components/UploadVideoComponent";
import EditVideoComponent from "../Components/EditVideoComponent";
// import UploadVideoComponent from "../Components/UploadVideoComponent"; // Importing the UploadVideoComponent

function UploadVideoPage() {
  const [showEditVideo, setShowEditVideo] = useState(false); // State to manage EditVideoComponent rendering
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNext = () => {
    if (selectedFile != null) {
      setShowEditVideo(true);
      console.log(selectedFile);
      console.log(URL.createObjectURL(selectedFile));
    }
  };

  const handleCancel = () => {
    setShowEditVideo(false);
    setSelectedFile(null);
  };

  const handleFileSelected = (file) => {
    setSelectedFile(file);
  };

  return (
    <>
      <Container fluid>
        <NavHeader />

        <Row xl={12}>
          {/* Side bar here */}
          <Col xl={2} lg={2} style={{ backgroundColor: "#d4d4d4" }}>
            <SideNavBarComponent />
          </Col>

          {/* upload video funct start here */}
          {showEditVideo ? (
            <Col xl={10}>
              <EditVideoComponent
                fileInputRef={fileInputRef}
                handleCancel={handleCancel}
                selectedFile={selectedFile}
              />
            </Col>
          ) : (
            <Col xl={10}>
              <UploadVideoComponent
                fileInputRef={fileInputRef}
                handleNext={handleNext}
                onFileSelected={handleFileSelected}
              />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default UploadVideoPage;
