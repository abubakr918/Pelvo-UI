import React from "react";
import { Container, Row } from "react-bootstrap";
import LeftContainer from "../component/LeftContainer";
import SignInAuth from "../component/SignIn";
import BankLeft from "../assets/bank-left.png";
const Signin = () => {
  return (
    <Container className="main-container" fluid>
      <Row className="main-row">
        <LeftContainer image={BankLeft} />
        <SignInAuth />
      </Row>
    </Container>
  );
};

export default Signin;
