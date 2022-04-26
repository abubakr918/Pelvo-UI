import React from "react";
import { Container, Row } from "react-bootstrap";
import LeftContainer from "../component/LeftContainer";
import BankSignup from '../component/BankSignup'
import BankLeft from '../assets/bank-left.png'
const SingupBank = () => {
  return (
    <Container className="main-container" fluid>
      <Row className="main-row">
      <LeftContainer image={BankLeft} />
        <BankSignup />
      </Row>
    </Container>
  );
};

export default SingupBank;
