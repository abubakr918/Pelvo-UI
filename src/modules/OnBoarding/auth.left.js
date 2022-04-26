import React from "react";
import Icon from "../../assets/onBoard/pelvo-icon.svg";
import Circle from "../../assets/onBoard/33.png";
import Background from "../../assets/onBoard/BG.jpg";

const AuthLeft = () => {
  return (
    <div
      className="main-left d-lg-flex d-none"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="auth-left-header d-flex justify-content-center">
        <img src={Icon} alt="" />
      </div>
      <div className="auth-left-content d-flex justify-content-around">
        <div className="d-flex justify-content-around">
          <img src={Circle} alt="" />
        </div>
        <div className="d-flex flex-column-reverse">
          <img src={Circle} alt="" />
        </div>
      </div>
      <div className="auth-left-footer d-flex justify-content-around">
        <p>Privacy Policy </p>
        <p>Term of Use </p>
        <p>Manage Cookies </p>
        <p>API </p>
        <p>2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default AuthLeft;
