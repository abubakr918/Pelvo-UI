import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BrandMark from "../assets/icons/brandmark-design.svg";
import Arrow from "../assets/icons/arrow-down.svg";
import DashboardIcon from "../assets/icons/dashboard.svg";
import BusinessIcon from "../assets/icons/business-icon.svg";
import TransactionIcons from "../assets/icons/transactions-icon.svg";
import BusinessIntelligenceIcon from "../assets/icons/intelligence.svg";
import SalesIcon from "../assets/icons/sales-icon.svg";
import PaymentIcons from "../assets/icons/payments-icon.svg";

import { refType } from "@mui/utils";

const SideBar = (props) => {
  const location = useLocation();
  const [active, setActive] = useState({});
  useEffect(() => {
    onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log({ location });

  const isPathActive = (path) => {
    if (path === location.pathname) {
      return true;
    } else {
      return false;
    }
  };
  const onRouteChanged = () => {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(active).forEach((i) => {
      setActive({ ...active, [i]: false });
    });

    const dropdownPaths = [
      { path: "/dashboard/business", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (isPathActive(obj.path)) {
        setActive({ ...active, [obj.state]: true });
      }
    });
  };
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile not-navigation-link">
          <div className=" sidebar-usershow-logo d-flex justify-content-between align-items-start">
            <div className=" justify-content-between d-flex align-items-center">
              <div className="d-flex align-items-center">
                <img
                  className="img-xs rounded-circle"
                  src={BrandMark}
                  alt="profile"
                />
                <h6>Pelvo AB</h6>
              </div>
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
        </li>
        <li
          className={
            isPathActive("/dashboard") ? "nav-item active-select" : "nav-item"
          }
        >
          <Link className="nav-link" to="/dashboard">
            <img className="sidebar-icons" src={DashboardIcon} alt="" />
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li
          className={
            isPathActive("/dashboard/business")
              ? "nav-item active-select"
              : "nav-item"
          }
        >
          <Link className="nav-link" to="/dashboard/business">
            <img className="sidebar-icons" src={BusinessIcon} alt="" />
            <span className="menu-title">Business Accounts</span>
          </Link>
        </li>
        <li
          className={
            isPathActive("/dashboard/transaction")
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link className="nav-link" to="/dashboard/transaction">
            <img className="sidebar-icons" src={TransactionIcons} alt="" />
            <span className="menu-title">Transactions</span>
          </Link>
        </li>
        <li className={isPathActive("/") ? "nav-item active" : "nav-item"}>
          <Link className="nav-link" to="/dashboard">
            <img
              className="sidebar-icons"
              src={BusinessIntelligenceIcon}
              alt=""
            />
            <span className="menu-title">Business Intelligence</span>
          </Link>
        </li>
        <li className={isPathActive("/") ? "nav-item active" : "nav-item"}>
          <Link className="nav-link" to="/dashboard">
            <img className="sidebar-icons" src={SalesIcon} alt="" />
            <span className="menu-title">Sales</span>
          </Link>
        </li>
        <li className={isPathActive("/") ? "nav-item active" : "nav-item"}>
          <Link className="nav-link" to="/dashboard">
            <img className="sidebar-icons" src={PaymentIcons} alt="" />
            <span className="menu-title">Payments</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
