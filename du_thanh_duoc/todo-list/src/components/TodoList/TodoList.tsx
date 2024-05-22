import { useEffect, useState } from 'react'
import { Todo } from '../../@types/todo.type'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  useEffect(() => {
    const localStorageTodos = localStorage.getItem('todos')
    const todosParse: Todo[] = JSON.parse(localStorageTodos || '[]')
    setTodos(todosParse)
  }, [])

  const todosNotDone = todos.filter((todo) => !todo.done)
  const todosDone = todos.filter((todo) => todo.done)

  const handleAddTodos = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])

    const localStorageTodos = localStorage.getItem('todos')
    const todosParse: Todo[] = JSON.parse(localStorageTodos || '[]')
    const newTodos = [...todosParse, todo]
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const handleCheckTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          todo.done = done
        }
        return todo
      })
    })
  }

  const startEditTodo = (id: string) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
      setCurrentTodo(todo)
    }
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) {
        return { ...prev, name }
      }
      return null
    })
  }

  const finishTodo = () => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === currentTodo?.id) {
          return currentTodo
        }
        return todo
      })
    })
    setCurrentTodo(null)
    const localStorageTodos = localStorage.getItem('todos')
    const todosParse: Todo[] = JSON.parse(localStorageTodos || '[]')
    const newTodos = todosParse.map((todo) => {
      if (todo.id === currentTodo?.id) {
        return currentTodo
      }
      return todo
    })
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => {
      const findedIndexTodo = prev.findIndex((todo) => todo.id === id)
      if (findedIndexTodo > -1) {
        const result = [...prev]
        result.splice(findedIndexTodo, 1)
        return result
      }
      return prev
    })
    setCurrentTodo(null)
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput onAddTodos={handleAddTodos} currentTodo={currentTodo} editTodo={editTodo} finishTodo={finishTodo} />
        <TaskList
          todos={todosNotDone}
          onCheckTodo={handleCheckTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          todos={todosDone}
          doneTaskList={true}
          onCheckTodo={handleCheckTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
