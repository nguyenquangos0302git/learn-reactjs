import { Todo } from '../../@types/todo.type'
import PropTypes from 'prop-types'

import styles from './taskList.module.scss'
import { TodoTypes } from '../../PropTypes/todo.proptype'
import connect from '../../HOC/connect'
import { debug, log } from '../../constants'

interface TaskListProps {
  todos: Todo[]
  doneTaskList?: boolean
  onCheckTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(TodoTypes).isRequired,
  doneTaskList: PropTypes.bool,
  onCheckTodo: PropTypes.func.isRequired,
  startEditTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  debug: PropTypes.bool.isRequired,
  log: PropTypes.func.isRequired
}

function TaskList(props: TaskListProps & typeof extraInfoType) {
  const { doneTaskList, todos, onCheckTodo, startEditTodo, deleteTodo, debug, log } = props

  const handleCheckTodo = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckTodo(id, event.target.checked)
  }

  const handleStartEditTodo = (id: string) => () => {
    startEditTodo(id)
  }

  const handleDeleteTodo = (id: string) => () => {
    deleteTodo(id)
  }

  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Done' : 'Not Done'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => {
          return (
            <div className={styles.task} key={todo.id}>
              <input
                type='checkbox'
                className={styles.taskCheckBox}
                checked={todo.done}
                onChange={handleCheckTodo(todo.id)}
              />
              <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
              <div className={styles.taskAction}>
                <button className={styles.taskBtn} onClick={handleStartEditTodo(todo.id)}>
                  🖊️
                </button>
                <button className={styles.taskBtn} onClick={handleDeleteTodo(todo.id)}>
                  🗑️
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const extraInfoType = { debug: debug, log: log }

export default connect(extraInfoType)(TaskList)
