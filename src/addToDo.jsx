import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [Todo, setTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (Todo === "") return

    onSubmit(Todo)

    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={Todo}
          onChange={e => setTodo(e.target.value)}
          type="text"
          placeholder="New item"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}