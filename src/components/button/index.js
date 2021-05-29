import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./styled-component";
import * as utils from "./utils";

const Button = (props) => {
  const { type, variant, children, onClick } = props;
  const bgColor = utils.getBackgroundColor(variant);
  return (
    <ButtonWrapper
      type={type}
      bgColor={bgColor}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["success", "successUpdate", "danger", "info"]),
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  children: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "success",
  type: "button",
  children: null,
  onClick: () => {},
};

export default Button;
