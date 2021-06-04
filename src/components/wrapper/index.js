import React from "react";
import PropTypes from "prop-types";
import { DivWrapper } from "./styled-component";

const Wrapper = (props) => {
  const { children } = props;
  return <DivWrapper>{children}</DivWrapper>;
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Wrapper;
