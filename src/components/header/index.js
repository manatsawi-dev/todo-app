import React from "react";
import PropTypes from "prop-types";
import { H1, H2, H3 } from "./styled-component";

const Header = (props) => {
  const { variant, children } = props;
  if (variant === "h3") {
    return <H3>{children}</H3>;
  }
  if (variant === "h2") {
    return <H2>{children}</H2>;
  }
  return <H1>{children}</H1>;
};

Header.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3"]),
  children: PropTypes.string.isRequired,
};

export default Header;
