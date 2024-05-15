import React, { useState } from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todo = [
  { id: 1, title: "I love Easy Frontend! 😍 " },
  { id: 2, title: "We love Easy Frontend! 🥰 " },
  { id: 3, title: "They love Easy Frontend! 🚀 " },
];

function TodoFeature(props) {
  const [todoList, setTodoList] = useState(() => {
    return todo;
  });
  const handerTodoClick = (dataSend) => {
    const index = todoList.findIndex((task) => task.id === dataSend.id);
    const cloneTodo = [...todoList];
    cloneTodo.splice(index, 1);
    setTodoList(cloneTodo);
  };
  const handlerSubmitForm = (value) => {
    const newIndex = todo.length + 1;
    const cloneTodo = [...todoList];
    const newTodo = {
      ...value,
      id: newIndex,
    };
    cloneTodo.push(newTodo);
    setTodoList(cloneTodo);
  };
  return (
    <div>
      <TodoForm onHandlerFormSubmit={handlerSubmitForm}></TodoForm>
      <TodoList todoList={todoList} onHandlerTodoClick={handerTodoClick} />
    </div>
  );
}

export default TodoFeature;
