import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./todo-item";
import Header from "../../../components/header";
import { TodoListWrapper } from "./styled-component";

const TodoList = (props) => {
  const { data, editList, onClickDelete, onClickEdit, onClickUpdate } = props;

  if (!Array.isArray(data) || !data.length) {
    return <Header variant="h3">You don't plan for today</Header>;
  }

  return (
    <TodoListWrapper>
      {data.map((element) => (
        <TodoItem
          key={element.id}
          editMode={editList[element.id]}
          onClickDelete={() => onClickDelete(element.id)}
          onClickEdit={() => onClickEdit(element.id)}
          onClickUpdate={(newValue) => onClickUpdate(element.id, newValue)}
        >
          {element.value}
        </TodoItem>
      ))}
    </TodoListWrapper>
  );
};

TodoList.propTypes = {
  data: PropTypes.array,
  editList: PropTypes.object,
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  data: null,
  editList: {},
};

export default TodoList;
