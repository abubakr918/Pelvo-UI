import React from "react";
import { Container, Row } from "react-bootstrap";
import LeftContainer from "../../component/LeftContainer";
import CreateAccount from "../../component/AccountCreate";
import AccountLeft from "../assets/account-left.svg";
const AccountCreate = () => {
  return (
    <Container className="main-container" fluid>
      <Row className="main-row">
        <LeftContainer image={AccountLeft} />
        <CreateAccount />
      </Row>
    </Container>
  );
};

export default AccountCreate;
