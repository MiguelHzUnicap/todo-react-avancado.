import React, { useState } from 'react'
import { useTodos } from '../context/TodoContext'

export default function TodoForm(){
  const { addTodo } = useTodos()
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title.trim()) return
    addTodo({ title: title.trim() })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="form-row">
      <input
        className="input"
        placeholder="Nova tarefa..."
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
      <button className="btn" type="submit">Adicionar</button>
    </form>
  )
}
