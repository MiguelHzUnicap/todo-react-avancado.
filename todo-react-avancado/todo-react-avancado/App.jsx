import React from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoPage from './pages/TodoPage'
import './index.css'

export default function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <TodoPage />
      </div>
    </TodoProvider>
  )
}
