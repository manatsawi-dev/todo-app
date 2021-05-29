import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.bgColor};
  color: white;
  font-weight: bold;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  min-width: 80px;
  cursor: pointer;
  ${(props) =>
    props.variant === "info" &&
    `
    border-radius: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  `};
  ${(props) =>
    props.variant === "successUpdate" &&
    `
    border-radius: 4px;
  `};
`;
