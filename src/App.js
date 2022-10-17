import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import './App.css';
import TodoItem from "./components/TodoItem";
function App() {
  const initialState = JSON.parse(localStorage.getItem("todos"));
  // const [todos,setTodos] =useState([]);
  const [todos,setTodos] =useState(initialState);
  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  const addTodo =(text)=>{
    let id =1 ;
    if(todos.length>0){
      id =todos[0].id+1;
    }
    let todo ={id:id,text :text,completed :false};
    let newTodos =[todo,...todos];
    console.log(newTodos);
    setTodos(newTodos);
  };
  const removeTodo = (id)=>{
    let updatedTodos =[...todos].filter((todo)=>todo.id !==id);
    setTodos(updatedTodos);
  }
  const completedTodo =(id)=>{
    let updatedTodos =todos.map((todo)=>{
      if(todo.id=== id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos);
  }
  return (
    <div className="todo-app">
      <h3>TODO-LIST </h3>
      
       <TodoForm addTodo={addTodo}/>
       <hr className="seperator"></hr>
       {todos.map((todo)=>{
        return(
          <TodoItem
          removeTodo ={removeTodo}
          completedTodo ={completedTodo}
           todo={todo} 
          key={todo.id}
          />
        )
       })}
    </div>
  );
}

export default App;
