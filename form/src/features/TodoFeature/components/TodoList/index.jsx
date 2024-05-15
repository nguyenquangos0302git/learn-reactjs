import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classnames from "classnames";

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
  const handlerClickTodo = (todo) => {
    if (!onHandlerTodoClick) return;
    onHandlerTodoClick(todo);
  };
  return (
    <div>
      <ul>
        {todoList.length > 0 ? (
          todoList.map((todo) => {
            return (
              <li
                key={todo.id}
                className={classnames({
                  "to-do": true,
                  completed: todo.status === "completed",
                  task: true,
                })}
                onClick={(_) => handlerClickTodo(todo)}
              >
                {todo.title}
              </li>
            );
          })
        ) : (
          <li>No item</li>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
