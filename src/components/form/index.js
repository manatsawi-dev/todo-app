import React from "react";
import PropTypes from "prop-types";
import { FormWrapper } from "./styled-component";

const Form = (props) => {
  const { formId, children, onSubmit } = props;
  return (
    <FormWrapper id={formId} onSubmit={onSubmit}>
      {children}
    </FormWrapper>
  );
};

Form.propTypes = {
  formId: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  formId: null,
  children: null,
  onSubmit: () => {},
};

export default Form;
