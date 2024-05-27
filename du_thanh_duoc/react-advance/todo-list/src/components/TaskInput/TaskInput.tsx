import { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './taskInput.module.scss'
import { Todo } from '../../@types/todo.type'
import { TodoTypes } from '../../PropTypes/todo.proptype'
import connect, { ExtraInfoType } from '../../HOC/connect'
import { debug, log } from '../../constants'
import Title from '../Title'

interface TaskInputProps extends ExtraInfoType {
  onAddTodos: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishTodo: () => void
}

TaskInput.propTypes = {
  onAddTodos: PropTypes.func.isRequired,
  currentTodo: PropTypes.oneOfType([TodoTypes, PropTypes.oneOf([null])]),
  editTodo: PropTypes.func.isRequired,
  finishTodo: PropTypes.func.isRequired,
  debug: PropTypes.bool.isRequired,
  log: PropTypes.func.isRequired
}

function TaskInput(props: TaskInputProps) {
  const { onAddTodos, currentTodo, editTodo, finishTodo, debug, log } = props

  const address = useMemo(() => {
    return {
      street: '10'
    }
  }, [])

  const [name, setName] = useState<string>('')
  log(debug)

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

  const handleClickTitle = useCallback((value: any) => {
    console.log(value)
  }, [])

  // const handleClickTitle = useMemo(() => {
  //   return (value: any) => console.log(value)
  // }, [])

  return (
    <div>
      <Title address={address} handleClickTitle={handleClickTitle} />
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

// export default connect({ debug: debug, log: log })(TaskInput)
export default connect({ debug: debug, log: log })(TaskInput)
