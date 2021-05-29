import React from "react";
import PropTypes from "prop-types";
import { FormWrapper } from "./styled-component";

const Form = (props) => {
  const { formId, fluid, children, onSubmit } = props;

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    const formInput = Object.values(e.target);
    const formValue = {};
    formInput.forEach((element) => {
      if (element.localName === "input") {
        formValue[element.name] = element.value;
      }
    });

    onSubmit(formValue);
  };

  return (
    <FormWrapper id={formId} fluid={fluid} onSubmit={handlerOnSubmit}>
      {children}
    </FormWrapper>
  );
};

Form.propTypes = {
  formId: PropTypes.string,
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  formId: null,
  children: null,
  fluid: false,
  onSubmit: () => {},
};

export default Form;
