import React from "react";
import { Dropdown } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import PersonImage from "../assets/icons/person-icon.svg";
import Arrow from "../assets/icons/arrow-down.svg";
import Logo from "../assets/icons/logo.svg";
import Search from "../assets/icons/search.svg";
import Mail from "../assets/icons/mail.svg";
import Notify from "../assets/icons/notify.svg";
import Person1 from "../assets/icons/person1.svg";
import Person2 from "../assets/icons/person2.svg";
import Person3 from "../assets/icons/person3.svg";

const DashboardHeader = () => {
  const toggleOffcanvas = () => {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  };
  const toggleRightSidebar = () => {
    document.querySelector(".right-sidebar").classList.toggle("open");
  };
  return (
    <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <ul className="navbar-nav navbar-nav-left header-links align-self-center">
          <li className="nav-item font-weight-semibold d-md-flex">
            <img src={Logo} alt="Logo" />
          </li>
        </ul>

        <ul className="navbar-nav navbar-nav-right pr-1">
          <li className="nav-item  nav-profile border-0 pl-4">
            <img src={Search} alt="Search" />
          </li>
          <li className="nav-item  nav-profile border-0 pl-4">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                <i>
                  <img className="iconshow" src={Notify} alt="Notify" />
                </i>
                <span className="count bg-success">4</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown preview-list">
                <Dropdown.Item
                  className="dropdown-item py-3 d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <p className="mb-0 font-weight-medium float-left">
                    You have 4 new notifications
                  </p>
                  <span className="badge badge-pill badge-primary float-right">
                    View all
                  </span>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-alert m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      Application Error
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      Just now
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-settings m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      Settings
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      {" "}
                      Private message
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-airballoon m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      New user registration
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      2 days ago
                    </p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item  nav-profile border-0 pl-4">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                <i>
                  <img className="iconshow" src={Mail} alt="Mail" />
                </i>

                <span className="count">7</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown preview-list">
                <Dropdown.Item
                  className="dropdown-item  d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <p className="mb-0 font-weight-medium float-left">
                    You have 7 unread mails
                  </p>
                  <span className="badge badge-pill badge-primary">
                    View all
                  </span>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <img
                      src={Person2}
                      alt="profile"
                      className="img-sm profile-pic"
                    />{" "}
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Marian Garner
                    </p>
                    <p className="font-weight-light small-text">
                      {" "}
                      The meeting is cancelled
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <img
                      src={Person1}
                      alt="profile"
                      className="img-sm profile-pic"
                    />{" "}
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      David Grey
                    </p>
                    <p className="font-weight-light small-text">
                      {" "}
                      The meeting is cancelled
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <img
                      src={Person3}
                      alt="profile"
                      className="img-sm profile-pic"
                    />{" "}
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Travis Jenkins
                    </p>
                    <p className="font-weight-light small-text">
                      {" "}
                      The meeting is cancelled
                    </p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="nav-item  nav-profile border-0 d-lg-flex d-none pl-4">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator bg-transparent d-flex">
                <div className="nav-admin-profile d-flex justify-content-center alignt-items-center">
                  <img
                    className="img-xs rounded-circle"
                    src={PersonImage}
                    alt="Profile"
                  />
                  <div className="text-left px-3">
                    <h6>Maxbert</h6>
                    <p>Admin - Designspace</p>
                  </div>
                  <img className="img-xs " src={Arrow} alt="Arrow" />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                <Dropdown.Item
                  className="dropdown-item p-0 preview-item d-flex align-items-center border-bottom"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="d-flex">
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                      <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                    </div>
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                      <i className="mdi mdi-account-outline mr-0"></i>
                    </div>
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                      <i className="mdi mdi-alarm-check mr-0"></i>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center border-0 mt-2"
                  onClick={(evt) => evt.preventDefault()}
                >
                  Manage Accounts
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center border-0"
                  onClick={(evt) => evt.preventDefault()}
                >
                  Change Password
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center border-0"
                  onClick={(evt) => evt.preventDefault()}
                >
                  Check Inbox
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center border-0"
                  onClick={(evt) => evt.preventDefault()}
                >
                  Sign Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          onClick={toggleOffcanvas}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default DashboardHeader;
