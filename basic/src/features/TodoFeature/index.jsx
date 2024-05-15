import React, { useState } from 'react';
import TodoList from './components/TodoList/index';

function TodoFeature() {
  const generateListTask = [
    {
      id: 1,
      name: 'eat',
      status: 'new',
      
    },
    {
      id: 2,
      name: 'cook',
      status: 'completed',
      
    },
    {

      id: 3,
      name: 'code',
      status: 'new',
      
    }
  ]
  
  const [listTask, setListTask] = useState(generateListTask);
  const [filteredTask, setFilteredTask] = useState('all');

  const changeStatusTask = (task, idx) => {
    // clone array
    const newTodoList = [...listTask];

    // toggle state
    const taskChange = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    }

    newTodoList[idx] = taskChange;

    // update state
    setListTask(newTodoList);
  }

  const handlerAll = _ => {
    setFilteredTask('all');
  }

  const handlerNew = _ => {
    setFilteredTask('new');
  }

  const handlerCompleted = _ => {
    setFilteredTask('completed');
  }

  const renderedList = listTask.filter(list => filteredTask === 'all' || filteredTask === list.status);

  return (
    <div>
      <TodoList listTask={renderedList} changeStatusTask={changeStatusTask}></TodoList>
      <button onClick={handlerAll}>Show All</button>
      <button onClick={handlerNew}>Show New</button>
      <button onClick={handlerCompleted}>Show Completed</button>
    </div>
  )
};

export default TodoFeature;