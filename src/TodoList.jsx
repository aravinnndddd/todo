import { TodoItem } from "./TodoItem"

export function TodoList({ Todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {Todos.length === 0 && "No Todos"}
      {Todos.map(Todo => {
        return (
          <TodoItem
            {...Todo}
            key={Todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}