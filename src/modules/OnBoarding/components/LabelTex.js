import React from "react";

const labelText = (props) => {
  return (
    <div className="auth-label-container">
      {props.heading && <h2>{props.heading}</h2>}
      {props.text && <p>{props.text}</p>}
    </div>
  );
};

export default labelText;
