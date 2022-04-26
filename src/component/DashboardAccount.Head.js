import React from "react";
import Search from "../assets/icons/search.svg";
import CustomButton from "./Button";
import { Col } from "react-bootstrap";

const DashboardAccountHaead = () => {
  return (
    <div className="row justify-content-between">
      <Col
        lg="5"
        md="6"
        className=" d-flex justify-content-center justify-content-md-start"
      >
        <h4>Accounts</h4>
      </Col>
      <Col lg="6" md="12" className=" d-flex justify-content-end">
        <div className="mr-3 account-search-container">
          <img src={Search} alt="Search" />
        </div>
        <div className="mr-3">
          <CustomButton type="dashboard-account">+ Make payment</CustomButton>
        </div>
        <div className="mr-3">
          <CustomButton type="dashboard-account">
            + Add Bank Account
          </CustomButton>
        </div>
      </Col>
    </div>
  );
};

export default DashboardAccountHaead;
