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

export const ButtonBase = styled.button`
  padding: 0.75rem 1rem;
  font-weight: bold;
  min-width: 100px;
  cursor: pointer;
  margin: 0.5rem;
  border-radius: 6px;
  border: none;
`;

export const ButtonPrimary = styled(ButtonBase)`
  background-color: ${(props) => props.theme.primary};
  color: white;
`;

export const ButtonSuccess = styled(ButtonBase)`
  background-color: ${(props) => props.theme.success};
  color: white;
`;

export const ButtonDanger = styled(ButtonBase)`
  background-color: ${(props) => props.theme.danger};
  color: white;
`;

export const ButtonInfo = styled(ButtonBase)`
  background-color: ${(props) => props.theme.info};
  color: white;
`;

export const ButtonWarning = styled(ButtonBase)`
  background-color: ${(props) => props.theme.warning};
  color: white;
`;
