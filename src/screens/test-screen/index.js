import React from "react";
import Wrapper from "../../components/wrapper";
import Button from "../../components/button/button";

const TestScreen = () => {
  return (
    <Wrapper>
      <Button variant="primary">Primary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
    </Wrapper>
  );
};

TestScreen.propTypes = {};

export default TestScreen;
