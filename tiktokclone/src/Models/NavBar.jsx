import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "react-bootstrap/Image";

function NavBar() {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  return (
    <Row xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
      <Col xl={3}>
        <h1>TokTik</h1>
      </Col>
      <Col xl={6} className="mt-2">
        <Form.Control size="sm" placeholder="Search" />
      </Col>
      <Col xl={3}>
        <Button className="mt-1" size="sm">
          + Upload
        </Button>
        {console.log(user)}
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
              style={{ backgroundColor: "red" }}
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

export default NavBar;
