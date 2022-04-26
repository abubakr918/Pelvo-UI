import React, { useState } from "react";
import AuthBtn from "./components/AuthButtons";
import LabelText from "./components/LabelTex";
import ReactSelect from "../../libraray/select";
import AuthSelect from "./components/AuthSelect";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

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

const companyTypes = [
  { value: "private", label: "Private limited company" },
  { value: "public", label: "Public limited company" },
];

const AuthLogin = () => {
  const history = useHistory();
  const currencies = countries?.map((c) => ({
    country: c.countryName,
    flag: `currency-flag-${c.localCurrency.toLowerCase()}`,
    short: c.localCurrency,
    long: c.countryName,
    countryCode: c.countryCode,
    countryCallingCode: c.countryCallingCode,
  }));
  const [country, setCountry] = useState(currencies?.[0] || {});
  const handleContinue = () => {
    history.push("/auth/form");
  };

  const handleSelect = (value) => {
    console.log(value);
  };
  return (
    <div>
      <div className="d-flex justify-content-end pt-2">
        <AuthBtn size="small" text="Log in to your account" />
      </div>
      <div className="py-4">
        <LabelText
          heading="Registered company country"
          text="We only onboard regulated clients that are located within one of the permitted jurisdictions listed below."
        />
      </div>

      <div className="form-group country-box pt-2">
        <div className="input-group position-relative">
          <ReactSelect
            btnClass="auth-select-button"
            dropdownClassName="w-100"
            target={(p) => (
              <div {...p} className="input-group-append country-input-group">
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
      </div>
      <div className="auth-selected">
        <AuthSelect
          name="type"
          onChange={handleSelect}
          companyTypes={companyTypes}
        />
      </div>
      <div className="py-2">
        <LabelText
          heading="Business legal form"
          text="Please specify the legal status of your organisation."
        />
      </div>
      <div className="py-4">
        <LabelText heading="Company registration number" />
      </div>
      <div className="auth-private py-4">
        <h4>Private limited company</h4>
      </div>
      <div className="d-flex justify-content-between flex-column align-items-center flex-md-row pt-4">
        <button className="auth-back-btn mb-3 mb-md-0">Back</button>
        <AuthBtn size="medium" text="Continue" handleClick={handleContinue} />
      </div>
    </div>
  );
};

export default AuthLogin;
