import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./styled-component";

const Input = (props) => {
  const { name, value, onChange } = props;
  return <InputWrapper name={name} value={value} onChange={onChange} />;
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: "",
  onChange: () => {},
};

export default Input;
