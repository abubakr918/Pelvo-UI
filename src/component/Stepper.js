import React from "react";
import Icon from "../assets/steps.png";
import Stepps1 from "../assets/steppesIcons.png";

const Stepper = () => {
  return (
    <div className="d-none d-md-none d-lg-flex stepper-container justify-content-center align-items-center">
      <div>
        <div className=" px-3 pt-2 steps-name d-flex justify-content-between align-items-center">
          <h6>Mobile & Email</h6>
          <h6>Personal infos</h6>
          <h6>Company infos</h6>
          <h6>Beneficiaries owners</h6>
        </div>
        <div className="px-5 pt-2 steps-icons d-flex justify-content-center align-items-center">
          <img src={Stepps1} alt="icons" />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
