import React from "react";
import { Col } from "react-bootstrap";
function SideNavBarComponent() {
  return (
    <>
      <Col
        style={{
          position: "fixed",
          top: "4.8vh",
          bottom: 0,
        }}
      >
        <p>for you</p>
        <p>Following</p>
        <p>profile</p>
        <br />
        <br />
        <p>Following accounts</p>
        <hr />
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
      </Col>
    </>
  );
}

export default SideNavBarComponent;
