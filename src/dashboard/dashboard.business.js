import React from "react";
import DashboardHeader from "../modules/dashboard.header.module";
import { Row, Col } from "react-bootstrap";
import SideBar from "../modules/sideBar.modules";
import DashboardAccountHaead from "../component/DashboardAccount.Head";
import AccountTable from "../component/AccountTable";
import CustomerTable from "../component/CustomerTable";
import "./dashboard.css";

const DashboardBusiness = () => {
  return (
    <div>
      <DashboardHeader />
      <Row>
        <Col lg="2">
          <SideBar />
        </Col>
        <Col lg="10" className="dashboard-business-container">
          <DashboardAccountHaead />
          <AccountTable />
          <CustomerTable />
          <div className="dashboard-account-button d-flex justify-content-center align-items-center">
            <p>Apply for a credit</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardBusiness;
