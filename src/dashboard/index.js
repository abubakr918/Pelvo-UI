import React from "react";
import DashboardHeader from "../modules/dashboard.header.module";
import SideBar from "../modules/sideBar.modules";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <SideBar />
    </div>
  );
};

export default Dashboard;
