import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  MdHomeFilled,
  MdTimeline,
  MdPeople,
  MdPerson,
  MdPersonAdd,
} from "react-icons/md";

function SideNavBarComponent() {
  return (
    <div
      style={{
        position: "fixed",
        top: "7vh", // Adjust this value based on your header height
        zIndex: 1000, // Ensure it's above other content
        height: "100vh",
        overflowY: "auto",
        maxWidth: "33vh", // Adjust the width of the sidebar
        width: "100%",
      }}
    >
      <div
        className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
        style={{
          position: "sticky",
          left: "0",
          height: "100%",
        }}
      >
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
          style={{ width: "100%" }}
        >
          <li>
            <a
              href="#submenu1"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <MdHomeFilled className="fs-4 me-2" />
              <span className="ms-1 d-none d-sm-inline">For You</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu1"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <MdPersonAdd className="fs-4 me-2" />
              <span className="ms-1 d-none d-sm-inline">Following</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle "
            >
              <MdPeople className="fs-4 me-2" />
              <span className="ms-1 d-none d-sm-inline">Friends</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <MdPerson className="fs-4 me-2" />
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
