import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onHandlerTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onHandlerTodoClick: null,
};

function TodoList(props) {
  const { todoList, onHandlerTodoClick } = props;
  const handlerTodoClick = (data) => {
    if (!onHandlerTodoClick) return;
    onHandlerTodoClick(data);
  };
  return (
    <div>
      <ul>
        {todoList.length > 0 ? (
          todoList.map((element) => {
            return (
              <li key={element.id} onClick={(_) => handlerTodoClick(element)}>
                {element.title}
              </li>
            );
          })
        ) : (
          <li>Not item</li>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
