import React, { useRef } from "react";
import PropTypes from "prop-types";
import Text from "../../../components/text";
import { TodoItemWrapper, TodoItemAction } from "./styled-component";
import Button from "../../../components/button";
import { FormEdit } from "./todo-form";

const TodoItem = (props) => {
  const { editMode, children, onClickDelete, onClickEdit, onClickUpdate } =
    props;
  const nodeEditInputRef = useRef();

  return (
    <TodoItemWrapper>
      {!editMode && <Text>{children}</Text>}
      {editMode && (
        <FormEdit
          ref={nodeEditInputRef}
          defaultValue={children}
          onSubmit={() => onClickUpdate(nodeEditInputRef.current.value)}
        />
      )}
      <TodoItemAction>
        {!editMode && (
          <>
            <Button variant="info" onClick={onClickEdit}>
              Edit
            </Button>
            <Button variant="danger" onClick={onClickDelete}>
              Delete
            </Button>
          </>
        )}
        {editMode && (
          <Button
            variant="successUpdate"
            onClick={() => onClickUpdate(nodeEditInputRef.current.value)}
          >
            Update
          </Button>
        )}
      </TodoItemAction>
    </TodoItemWrapper>
  );
};

TodoItem.propTypes = {
  editMode: PropTypes.bool,
  children: PropTypes.string,
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  editMode: false,
  children: null,
};

export default TodoItem;
