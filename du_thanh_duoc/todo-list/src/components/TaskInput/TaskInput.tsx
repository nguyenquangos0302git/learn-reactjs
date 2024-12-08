import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './taskInput.module.scss'
import { Todo } from '../../@types/todo.type'
import { TodoTypes } from '../../PropTypes/todo.proptype'

interface TaskInput {
  onAddTodos: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishTodo: () => void
}

TaskInput.propTypes = {
  onAddTodos: PropTypes.func.isRequired,
  currentTodo: PropTypes.oneOfType([TodoTypes, PropTypes.oneOf([null])]),
  editTodo: PropTypes.func.isRequired,
  finishTodo: PropTypes.func.isRequired
}

export default function TaskInput(props: TaskInput) {
  const { onAddTodos, currentTodo, editTodo, finishTodo } = props

  const [name, setName] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishTodo()
    } else {
      onAddTodos(name)
    }
    setName('')
  }

  const handleAddTodos = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (currentTodo) {
      editTodo(event.target.value)
    } else {
      setName(event.target.value)
    }
  }

  return (
    <div>
      <h1 className={styles.ttle}>Todo list typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='test'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={handleAddTodos}
        />
        <button type='submit'>{currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  )
}
