import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function NavHeader() {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  return (
    <Row
      xxl={12}
      xl={12}
      lg={12}
      md={12}
      sm={12}
      xs={12}
      style={{
        backgroundColor: "#f542c8",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <Col xs={3} xl={3}>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <h1>Viral-Loop</h1>
        </Link>
      </Col>
      <Col xs={1} xl={6} className="mt-2"></Col>
      <Col xs={7} xl={3}>
        <Link to={"/upload"}>
          <Button className="mt-1" size="sm">
            + Upload
          </Button>
        </Link>

        {!isAuthenticated ? (
          <Button
            className=" mt-1 ms-1"
            size="sm"
            style={{ backgroundColor: "orange" }}
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        ) : (
          <>
            <Button
              className="ms-1 mt-1"
              variant="danger"
              size="sm"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </Button>

            <Image
              className=" mt-1 ms-5"
              sizes="sm"
              src={user.picture}
              roundedCircle
              width={"45vw"}
              // style={{ alignContent: "center" }}
            />
          </>
        )}
      </Col>
    </Row>
  );
}

export default NavHeader;
