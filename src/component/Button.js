import React from "react";

const CustomButton = (props) => {
  const myClass = `button-${props.type} custom-btn`;
  return (
    <button className={myClass} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default CustomButton;
