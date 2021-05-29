import React from "react";
import PropTypes from "prop-types";
import { TextWrapper, TextInlineWrapper } from "./styled-component";

const Text = (props) => {
  const { children } = props;
  if (typeof children === "string") {
    return <TextWrapper>{children}</TextWrapper>;
  }
  return <TextInlineWrapper>{children}</TextInlineWrapper>;
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Text;
