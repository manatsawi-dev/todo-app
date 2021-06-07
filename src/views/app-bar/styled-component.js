import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  z-index: 1024;
  display: flex;
  width: 100%;
  height: 56px;
  background-color: teal;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
`;
