import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  ${(props) => props.fluid && `width: 100%`};
`;
