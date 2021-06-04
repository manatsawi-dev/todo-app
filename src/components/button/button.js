import React from "react";
import PropTypes from "prop-types";
import {
  ButtonPrimary,
  ButtonSuccess,
  ButtonDanger,
  ButtonInfo,
  ButtonWarning,
} from "./styled-component";

const Button = (props) => {
  const { type, variant, children, onClick } = props;
  if (variant === "success") {
    return (
      <ButtonSuccess type={type} onClick={onClick}>
        {children}
      </ButtonSuccess>
    );
  }
  if (variant === "danger") {
    return (
      <ButtonDanger type={type} onClick={onClick}>
        {children}
      </ButtonDanger>
    );
  }
  if (variant === "info") {
    return (
      <ButtonInfo type={type} onClick={onClick}>
        {children}
      </ButtonInfo>
    );
  }
  if (variant === "warning") {
    return (
      <ButtonWarning type={type} onClick={onClick}>
        {children}
      </ButtonWarning>
    );
  }
  return (
    <ButtonPrimary type={type} onClick={onClick}>
      {children}
    </ButtonPrimary>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "success", "danger", "info", "warning"]),
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  children: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  type: "button",
  children: null,
  onClick: () => {},
};

export default Button;
