import React, { useState } from "react";

import { Col } from "react-bootstrap";
import Header from "./Header";
import CustomButton from "./Button";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const BankSignup = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const handleContinue = () => {
    history.push("/create");
  };
  return (
    <Col className="justify-content-center d-flex">
      <div className="main-register">
        <Header />
        <div className="register-container d-flex justify-content-center align-items-center">
          <div>
            <h4>Sign up with BankID</h4>
            <div className="already-account">
              <p>Mobil bankID is supported to sign up with your account.</p>
            </div>
            <div className="form-group receive-box mt_60 mb_120">
              <div className="password-info d-flex justify-content-center align-items-center">
                <div className="personal-right d-flex justify-content-center align-items-center pr-3 h-100">
                  <span>Personal number</span>
                </div>
                <input
                  className="w-100 h-100"
                  type="text"
                  maxLength={10}
                  placeholder=""
                  {...register("phone", {
                    required: true,
                  })}
                />
              </div>
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

export default BankSignup;
