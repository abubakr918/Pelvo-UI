import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ReactSelect from "../libraray/select";
import { useForm } from "react-hook-form";

import Header from "../component/Header";
import CustomButton from "../component/Button";
import { useHistory } from "react-router-dom";

const countries = [
  {
    countryName: "Germany",
    countryCode: "DE",
    countryCallingCode: "49",
    localCurrency: "EUR",
    defaultCurrencies: ["USD", "EURO", "GBP", "AED"],
  },
  {
    countryName: "Sweden",
    countryCode: "SE",
    countryCallingCode: "46",
    localCurrency: "SEK",
    defaultCurrencies: ["USD", "EURO", "GBP", "AED"],
  },
  {
    countryName: "Afghanistan",
    countryCode: "AF",
    countryCallingCode: "93",
    localCurrency: "AFN",
    defaultCurrencies: ["USD", "EURO", "GBP", "AED"],
  },
];

const Register = () => {
  const currencies = countries?.map((c) => ({
    country: c.countryName,
    flag: `currency-flag-${c.localCurrency.toLowerCase()}`,
    short: c.localCurrency,
    long: c.countryName,
    countryCode: c.countryCode,
    countryCallingCode: c.countryCallingCode,
  }));
  const [country, setCountry] = useState(currencies?.[0] || {});
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const handleContinue = () => {
    history.push("verify");
  };

  useEffect(() => {});

  return (
    <Col className="justify-content-center d-flex">
      <div className="main-register">
        <Header />
        <div className="register-container d-flex justify-content-center align-items-center">
          <div>
            <h4>Create an account</h4>
            <div className="already-account">
              <p>Already have an account?</p>
              <a href="*">Sign in</a>
            </div>

            <form className="form-group">
              <div className="form-group country-box mt_25">
                <label htmlFor="youSend">Country</label>
                <div className="input-group position-relative">
                  <ReactSelect
                    dropdownClassName="w-100"
                    btnClass="select-button"
                    target={(p) => (
                      <div
                        {...p}
                        className="input-group-append country-input-group"
                      >
                        <div className="w-100">
                          <span className="input-group-text custom-select form-select p-0">
                            <span className="px-2 py-1 d-block w-100 h-100">
                              <span className="text-secondary d-flex h-100 w-100 align-items-center">
                                <span
                                  className={`currency-flag ${country.flag} mr-1`}
                                />
                                &nbsp; &nbsp;
                                {country.country}
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    )}
                    options={currencies}
                    placeholder="Select Currency"
                    onChange={setCountry}
                    value={country}
                    type="other"
                    field={(o) => o["country"]}
                  />
                </div>
                <p className="register-text">
                  I do attest the company has a registration number and operates
                  as a legal entity
                </p>
              </div>
              <div className="form-group receive-box mt_20">
                <label htmlFor="inputCountry">Mobile number</label>
                <div className="input-info d-flex justify-content-center align-items-center">
                  <div className="number-input border-right d-flex justify-content-center align-items-center pr-3 h-100">
                    <span className={`currency-flag ${country.flag} mr-1`} />
                    <spna>+{country.countryCallingCode}</spna>
                  </div>
                  <input
                    className="w-100 h-100 input-info"
                    type="text"
                    maxLength={10}
                    onKeyDown={(e) =>
                      [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "0",
                        "Backspace",
                        "ArrowLeft",
                        "ArrowRight",
                        "ArrowUp",
                        "ArrowDown",
                        " ",
                      ].indexOf(e.key) === -1 && e.preventDefault()
                    }
                    placeholder=""
                    {...register("phone", {
                      required: true,
                    })}
                  />
                </div>
                <p className="register-text">
                  {" "}
                  Standard call, messaging or data rates may apply.
                </p>
              </div>
              <div className="form-group receive-box mt_20">
                <label htmlFor="inputCountry">Email</label>
                <div className="email-input">
                  <input
                    className="input-info"
                    type="text"
                    placeholder="youremail@pelvo.io"
                    {...register("email", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div className="form-group receive-box mt_20 d-flex">
                <div>
                  <input
                    type="checkbox"
                    className="custom-checkbox mr-0"
                    name="terms"
                    id="terms"
                    required
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="w-auto font-weight-normal pl-3"
                >
                  By creating an account means you agree to the{" "}
                  <b>Terms and Conditions</b>, and our <b>Privacy Policy</b>.
                </label>
              </div>
              <CustomButton type="continue" handleClick={handleContinue}>
                Continue
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Register;
