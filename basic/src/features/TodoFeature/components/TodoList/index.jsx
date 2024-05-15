import React from 'react';
import PropsType from 'prop-types';
import classnames from 'classnames';
import './style.scss'

TodoList.propsType = {
  listTask: PropsType.array,
  changeStatusTask: PropsType.func,
};

TodoList.defaultProps = {
  listTask: [],
  changeStatusTask: null
};

function TodoList (props) {
  const { listTask, changeStatusTask } = props;

  const handlerClick = (task, idx) => {
    if (!changeStatusTask) return;
    changeStatusTask(task, idx);
  }

  return (
    <ul className='todo-list'>
      {listTask.map((task, idx) => {
        return (
          <li key={task.id} className={classnames({
            'todo-item': true,
            completed: task.status === 'completed'
          })}
          onClick={ _ => handlerClick(task, idx)}>{task.name}</li>
        )
      })}
    </ul>
  )
}

export default TodoList;