import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

function ListPage(props) {
  const [todoList, setTodoList] = useState(() => {
    return [
      { id: 1, title: "Eat", status: "new" },
      { id: 2, title: "Sleep", status: "completed" },
      { id: 3, title: "Go", status: "new" },
    ];
  });
  const handlerTodoClick = (todo) => {
    const index = todoList.findIndex((id) => id.id === todo.id);
    if (index < 0) return;
    const cloneTodo = [...todoList];
    cloneTodo[index] = {
      ...todo,
      status: todo.status === "new" ? "completed" : "new",
    };
    setTodoList(cloneTodo);
  };
  const handlerSubmitForm = (value) => {
    const cloneTodo = [...todoList];
    cloneTodo.push({
      ...value,
      id: cloneTodo.length + 1,
      status: "new",
    });
    setTodoList(cloneTodo);
  };
  return (
    <div>
      <h3>Todo Form</h3>
      <TodoForm onSubmitForm={handlerSubmitForm}></TodoForm>
      <h3>Todo List</h3>
      <TodoList
        todoList={todoList}
        onHandlerTodoClick={handlerTodoClick}
      ></TodoList>
    </div>
  );
}

export default ListPage;
