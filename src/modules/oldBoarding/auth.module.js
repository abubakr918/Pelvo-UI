import React from "react";
import { Container, Row } from "react-bootstrap";
import LeftContainer from "../component/LeftContainer";
import Register from "../component/Regitser";
import left from "../assets/left.png";

const Auth = () => {
  return (
    <Container className="main-container" fluid>
      <Row className="main-row">
        <LeftContainer image={left} />
        <Register />
      </Row>
    </Container>
  );
};

export default Auth;
