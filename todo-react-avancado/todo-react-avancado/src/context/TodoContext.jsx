import React, { createContext, useContext, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContext = createContext()

export function useTodos(){
  return useContext(TodoContext)
}

export function TodoProvider({ children }){
  const [stored, setStored] = useLocalStorage('todos', [])
  const [todos, setTodos] = useState(stored)
  const [filter, setFilter] = useState('all')

  // mantém localStorage sincronizado
  useEffect(()=>{
    setStored(todos)
  },[todos, setStored])

  const addTodo = (todo) => {
    setTodos(prev => [...prev, { id: Date.now(), title: todo.title, done: false }])
  }

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const value = {
    todos, addTodo, toggleTodo, removeTodo, filter, setFilter, setTodos
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
