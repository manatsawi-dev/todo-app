import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./styled-component";

const Button = (props) => {
  const { variant, children, onClick } = props;
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["success", "danger", "info"]),
  children: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "success",
  children: null,
  onClick: () => {},
};

export default Button;
