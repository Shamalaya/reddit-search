import React from "react";
import { Container } from "react-bootstrap";
const Loading = () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default Loading;
