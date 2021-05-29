import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./styled-component";

const Input = React.forwardRef((props, ref) => {
  const { name, value, placeholder, onChange } = props;
  return (
    <InputWrapper
      ref={ref}
      autoComplete="off"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
});

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: "",
  placeholder: "",
  onChange: () => {},
};

export default Input;
