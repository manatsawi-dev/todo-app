import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  padding: 3rem 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

export const FormAddWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  flex-wrap: nowrap;
`;

export const TodoItemWrapper = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  width: 100%;
  background-color: ${(props) => props.color};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export const TodoItemAction = styled.div``;

export const TodoListWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TodoEditInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  outline: none;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 1rem;
`;
