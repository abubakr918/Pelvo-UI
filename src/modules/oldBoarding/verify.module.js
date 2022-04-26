import React from "react";
import { Container, Row } from "react-bootstrap";
import LeftContainer from "../component/LeftContainer";
import VerifyCode from '../component/Verify'
import VerifyImage from '../assets/verify-left.png'

const Verify = () => {
  return (
    <Container className="main-container" fluid>
      <Row className="main-row">
      <LeftContainer image={VerifyImage} />
        <VerifyCode />
      </Row>
    </Container>
  );
};

export default Verify;
