import React from 'react'

const Column = () => {
  const TodoList =["코딩하기","밤먹기","커피마시기"];

  return (
    <>
{todoList.map((todo, idx)=>()
  <td key={idx}>{todo}</td>
)}
    </>
  )
}

export default Column
