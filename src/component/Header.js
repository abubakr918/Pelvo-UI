import React from "react";
import CustomButton from "./Button";

const Header = (props) => {
  const loginClick = () => {};
  return (
    <div className={`header-container d-flex justify-content-between align-items-center ${props.setting}`}>
      <p>About</p>
      <p>Services</p>
      <p>Pricing</p>

      <div className="login-button">
        <CustomButton type="login" handleClick={loginClick}>
          Login
        </CustomButton>
      </div>
    </div>
  );
};

export default Header;
