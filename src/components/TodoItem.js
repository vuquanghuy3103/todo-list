import React from 'react'
import {RiCloseCircleLine} from "react-icons/ri";
import {BiCheckCircle} from "react-icons/bi";
export default function TodoItem(props) {
  const {todo,removeTodo,completedTodo} =props
  return (
    <div className={todo.completed? "todo-row complete":"todo-row"}>
      {todo.text}
      <div className='iconsContainer'>
      <BiCheckCircle onClick={()=>completedTodo(todo.id)}/>
      <RiCloseCircleLine className='icon'style={{marginRight :5}} onClick={()=>removeTodo(todo.id)}/>
      </div>
     
    </div>
  )
}
