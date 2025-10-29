import React from 'react'

const TodoItem = React.memo(function TodoItem({ todo, onToggle, onRemove }){
  return (
    <div className={'todo-item' + (todo.done ? ' done' : '')}>
      <input type="checkbox" checked={todo.done} onChange={()=>onToggle(todo.id)} />
      <div className="todo-title">{todo.title}</div>
      <div className="controls">
        <button className="btn secondary" onClick={()=>onRemove(todo.id)}>Remover</button>
      </div>
    </div>
  )
})

export default TodoItem
