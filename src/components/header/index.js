import React from "react";
import PropTypes from "prop-types";
import { H1, H2, H3, H4, H5, H6 } from "./styled-component";

const Header = (props) => {
  // Javascript Object Destructuring
  const { variant, children } = props;

  if (variant === "h2") {
    return <H2>{children}</H2>;
  }
  if (variant === "h3") {
    return <H3>{children}</H3>;
  }
  if (variant === "h4") {
    return <H4>{children}</H4>;
  }
  if (variant === "h5") {
    return <H5>{children}</H5>;
  }
  if (variant === "h6") {
    return <H6>{children}</H6>;
  }

  return <H1>{children}</H1>;
};

Header.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.string.isRequired,
};

export default Header;
