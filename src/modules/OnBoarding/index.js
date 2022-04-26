import React from "react";
import AuthLeft from "./auth.left";
import AuthLogin from "./auth.login";
import "./boarding.css";

const AuthBoarding = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 p-0 d-lg-block d-none">
          <AuthLeft />
        </div>
        <div
          className="col-lg-6 col-12 px-3 px-md-5 py-3"
          style={{ backgroundColor: "#FBFAFC" }}
        >
          <AuthLogin />
        </div>
      </div>
    </div>
  );
};

export default AuthBoarding;
