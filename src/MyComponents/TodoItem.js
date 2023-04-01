import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <p><b>Title: </b> {todo.title}</p>
      <p><b>Description: </b> {todo.desc}</p>
      <button type="button" className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <p></p>
    </div>
  )
}

export default TodoItem
