import React from 'react'
import './TodoContainer.scss'

const TodoContainer = ({children}) => {
  return (
    <div className='TodoContainer'>
      <div className='app-title'>일정관리</div>
      <div className='contents'>{children}</div>
    </div>
  )
}

export default TodoContainer
