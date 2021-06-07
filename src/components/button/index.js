import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./styled-component";
import * as utils from "./utils";

const Button = (props) => {
  const { type, variant, children, borderRadiusAll, onClick } = props;
  const bgColor = utils.getBackgroundColor(variant);
  return (
    <ButtonWrapper
      type={type}
      borderRadiusAll={borderRadiusAll}
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
  borderRadiusAll: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "success",
  type: "button",
  children: null,
  borderRadiusAll: false,
  onClick: () => {},
};

export default Button;
