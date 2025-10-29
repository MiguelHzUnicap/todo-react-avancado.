import React from 'react'
import { useTodos } from '../context/TodoContext'

export default function Filters(){
  const { filter, setFilter } = useTodos()
  return (
    <div className="filter-row">
      <button className={'filter-btn' + (filter==='all' ? ' active' : '')} onClick={()=>setFilter('all')}>Todas</button>
      <button className={'filter-btn' + (filter==='pending' ? ' active' : '')} onClick={()=>setFilter('pending')}>Pendentes</button>
      <button className={'filter-btn' + (filter==='done' ? ' active' : '')} onClick={()=>setFilter('done')}>Concluídas</button>
    </div>
  )
}
