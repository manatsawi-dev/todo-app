import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./styled-component";

const Input = React.forwardRef((props, ref) => {
  const { name, value, placeholder, borderRadiusAll, onChange } = props;
  return (
    <InputWrapper
      ref={ref}
      autoComplete="off"
      borderRadiusAll={borderRadiusAll}
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
  borderRadiusAll: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: "",
  placeholder: "",
  borderRadiusAll: false,
  onChange: () => {},
};

export default Input;
