import React from "react";
import { Col } from "react-bootstrap";


const LeftContainer = (props) => {
  return (
    <Col className='d-none d-md-none d-lg-block'>
      <div className="left-side"
        style={{
          backgroundImage: "url(" + props.image + ")",
        }}
      >
      </div>
    </Col>
  );
};

export default LeftContainer;
