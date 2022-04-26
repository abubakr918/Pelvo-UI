import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import Header from "./Header";

import CustomButton from "./Button";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CreateInput from "./CreateInput";

const AccountForm = () => {
  const [inputValue, setInputValue] = useState({ name: "", price: "" });
  const { name, price } = inputValue;
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const handleContinue = () => {
    history.push("/create");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };
  return (
    <div className="account-form-container">
      <div className="d-flex justify-content-center align-items-center">
        <Header setting={"header-set-account"} />
      </div>
      <div className="register-container d-flex justify-content-center align-items-center">
        <div className="w-90">
          <h4>Create an account</h4>
          <div className="already-account">
            <p>Already have an account?</p>
            <a href="*">Sign in</a>
          </div>
          <Row className="mb-3 pt-3">
            <Col>
              <CreateInput
                type="text"
                value="Johanna Stevens"
                placeholder="Product Name"
                label="Full name"
                name="name"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <CreateInput
                type="text"
                value="Johanna Stevens"
                placeholder="Product Name"
                label="Last name"
                name="name"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <CreateInput
                type="text"
                value="Johanna Stevens"
                placeholder="Product Name"
                label="Birthday"
                name="name"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <CreateInput
                type="text"
                value="Johanna Stevens"
                placeholder="Product Name"
                label="Address"
                name="name"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <CreateInput
                type="text"
                value="Johanna Stevens"
                placeholder="Product Name"
                label="Postal code"
                name="name"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <CreateInput
                type="text"
                value="Johanna Stevens"
                placeholder="Product Name"
                label="City"
                name="name"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <CreateInput
                type="text"
                value="Johanna Stevens"
                placeholder="Product Name"
                label="Country"
                name="name"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <CreateInput
                type="text"
                value="Johanna Stevens"
                placeholder="Product Name"
                label="Email"
                name="name"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <CreateInput
                type="text"
                value="Johanna Stevens"
                placeholder="Product Name"
                label="Full name"
                name="name"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <CreateInput
                type="text"
                value="Johanna Stevens"
                placeholder="Product Name"
                label="Citizenship"
                name="name"
                onChange={handleChange}
              />
            </Col>
          </Row>

          <CustomButton type="continue" handleClick={handleContinue}>
            Continue
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
