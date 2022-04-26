import React from "react";
import Step1 from "../../../assets/acccounts/step-1.svg";
import Step2 from "../../../assets/acccounts/step-2.svg";
import Step3 from "../../../assets/acccounts/step-3.svg";
import Step4 from "../../../assets/acccounts/step-4.svg";

const Stepper = ({ step }) => {
  const steps = [Step1, Step2, Step3, Step4, Step4];
  return (
    <div className="auth-stepper-img">
      <img src={steps[step]} alt="step" />
    </div>
  );
};

export default Stepper;
