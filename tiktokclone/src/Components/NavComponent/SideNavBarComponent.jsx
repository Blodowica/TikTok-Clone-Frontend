import React from "react";

function SideNavBarComponent() {
  return (
    <div
      style={{
        position: "fixed",
        top: "5vh", // Adjust this value based on your header height
        zIndex: 1000, // Ensure it's above other content
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <div
        className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
        style={{
          position: "sticky",
          left: "0",
          maxWidth: "280px", // Adjust the width of the sidebar
          height: "100%",
        }}
      >
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
          style={{ width: "100%" }}
        >
          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0">
              <i className="fs-4 bi-house"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">For You</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu1"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <i className="fs-4 bi-speedometer2"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Following</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle "
            >
              <i className="fs-4 bi-bootstrap"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Friends</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <i className="fs-4 bi-grid"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Profile</span>
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <div className="dropdown"></div>
    </div>
  );
}

export default SideNavBarComponent;
