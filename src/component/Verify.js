import React, { useState } from "react";

import { Col } from "react-bootstrap";
import Header from "../component/Header";
import CustomButton from "../component/Button";
import ReactCodeInput from "react-code-input";
import { useHistory } from "react-router-dom";

const VerifyCode = () => {
  const [code, setCode] = useState({});
  const history = useHistory();
  const handleInputChange = (code) => {
    console.log(code);
  };

  const handleContinue = () => {
    history.push("/signup");
  };
  return (
    <Col className="justify-content-center d-flex">
      <div className="main-register">
        <Header />
        <div className="register-container d-flex justify-content-center align-items-center">
          <div>
            <h4>Verify your code</h4>
            <div className="already-account">
              <p>
                Enter the 6 digit code we sent to the phone number ending in -27
              </p>
            </div>
            <div className="inputVerifyCode">
              <ReactCodeInput
                type="text"
                value={code}
                fields={6}
                onChange={handleInputChange}
              />
            </div>
            <div className="resend-code-text">
              <p>
                Didn’t receive your code? please allow 30 seconds for the
                message to arrive before requesting another code. Get help
              </p>
              <h6>Resend code</h6>
            </div>
            <CustomButton type="continue" handleClick={handleContinue}>
              Continue
            </CustomButton>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default VerifyCode;
