import React, { useState } from "react";

import { Col } from "react-bootstrap";
import Header from "./Header";
import CustomButton from "./Button";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ReactSelect from "../libraray/select";

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

const SignInAuth = () => {
  const currencies = countries?.map((c) => ({
    country: c.countryName,
    flag: `currency-flag-${c.localCurrency.toLowerCase()}`,
    short: c.localCurrency,
    long: c.countryName,
    countryCode: c.countryCode,
    countryCallingCode: c.countryCallingCode,
  }));
  const [country, setCountry] = useState(currencies?.[0] || {});
  const history = useHistory();
  const handleContinue = () => {
    history.push("/create");
  };

  return (
    <Col className="justify-content-center d-flex">
      <div className="main-register">
        <Header />
        <div className="signin-auth-container d-flex justify-content-center align-items-center">
          <div>
            <h4>Sign in to your account</h4>
            <div className="already-account">
              <p>New to Pelvo? </p>
              <a href="*">Create account?</a>
            </div>

            <form className="form-group">
              <div className="form-group country-box mt_25 mb_50">
                <label htmlFor="youSend">Country</label>
                <div className="input-group position-relative">
                  <ReactSelect
                    btnClass="select-button"
                    dropdownClassName="w-100"
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

export default SignInAuth;
