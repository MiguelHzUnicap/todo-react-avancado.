import React from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import Filters from '../components/Filters'
import { useTodos } from '../context/TodoContext'

export default function TodoPage(){
  const { todos } = useTodos()
  return (
    <div className="card">
      <div className="header">
        <div>
          <div className="title">Todo React Avançado</div>
          <div className="sub">Hooks, Context, custom hooks e memoization</div>
        </div>
        <div><small>{todos.length} tarefas</small></div>
      </div>

      <TodoForm />
      <Filters />
      <TodoList />
    </div>
  )
}
