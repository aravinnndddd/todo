import { useEffect, useState } from "react"
import { NewTodoForm } from "./addToDo"
import "./styles.css"
import { TodoList } from "./TodoList"

export default function App() {
  const [Todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(Todos))
  }, [Todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(Todo => {
        if (Todo.id === id) {
          return { ...Todo, completed }
        }

        return Todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(Todo => Todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList Todos={Todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}