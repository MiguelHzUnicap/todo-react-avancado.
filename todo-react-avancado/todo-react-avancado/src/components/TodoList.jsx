import React, { useMemo } from 'react'
import TodoItem from './TodoItem'
import { useTodos } from '../context/TodoContext'

export default function TodoList(){
  const { todos, toggleTodo, removeTodo, filter } = useTodos()

  const filtered = useMemo(()=>{
    if(filter === 'all') return todos
    if(filter === 'done') return todos.filter(t=>t.done)
    return todos.filter(t=>!t.done)
  },[todos, filter])

  if(filtered.length === 0){
    return <div className="empty"><small>Nenhuma tarefa</small></div>
  }

  return (
    <div className="list">
      {filtered.map(t=>(
        <TodoItem key={t.id} todo={t} onToggle={toggleTodo} onRemove={removeTodo} />
      ))}
    </div>
  )
}
