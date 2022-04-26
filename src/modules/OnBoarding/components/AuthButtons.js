import React from "react";

const AuthButton = (props) => {
  if (props.size === "small") {
    return (
      <button className="auth-btn auth-small-btn" onClick={props.handleClick}>
        {props.text}
      </button>
    );
  } else if (props.size === "medium") {
    return (
      <button className="auth-btn auth-medium-btn" onClick={props.handleClick}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button className="auth-btn" onClick={props.handleClick}>
        {props.text}
      </button>
    );
  }
};

export default AuthButton;
