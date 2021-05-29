import styled from "styled-components";

export const InputWrapper = styled.input`
  width: 280px;
  padding: 0.75rem 1rem;
  outline: none;
  border-radius: 4px 0 0 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  @media (min-width: 767px) {
    width: 500px;
  }
`;
