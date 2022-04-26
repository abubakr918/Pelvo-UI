import React from "react";
import AuthBtn from "../components/AuthButtons";
import Stepper from "../components/Stepper";
import UserDetails from "./userDetails";
import CompanyDetails from "./companyDetails";
import Title from "../../../assets/acccounts/Title.svg";
import { StepperChange } from "../../../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import AccountUsage from "./accountUsage";
import AuthTitle from "../components/Title";
import Beneficiary from "./beneficiary";
import BeneficiaryForm from "./bnForm";

const heading = [
  "User details",
  "Company details",
  "Account usage",
  "Beneficials owners",
  "Beneficials owners",
];
const AuthForm = () => {
  const dispatch = useDispatch();
  const stepVal = useSelector((state) => state.auth).stepValue;
  console.log({ stepVal });

  const handleContinue = () => {
    if (stepVal < 4) {
      dispatch(StepperChange(stepVal + 1));
    }
  };

  const handleBack = () => {
    if (stepVal > 0) {
      dispatch(StepperChange(stepVal - 1));
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="auth-onboard-form px-4 py-4">
        <div>
          <AuthTitle title={heading[stepVal]} />
        </div>

        <div>
          <Stepper step={stepVal} />
        </div>
        {stepVal === 0 && <UserDetails />}
        {stepVal === 1 && <CompanyDetails />}
        {stepVal === 2 && <AccountUsage />}
        {stepVal === 3 && <Beneficiary />}
        {stepVal === 4 && <BeneficiaryForm />}

        <div className="d-flex mt-auto justify-content-between flex-column align-items-center flex-md-row pt-4">
          <button className="auth-back-btn mb-3 mb-md-0" onClick={handleBack}>
            Back
          </button>
          <AuthBtn size="small" text="Continue" handleClick={handleContinue} />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
