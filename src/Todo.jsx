import * as React from 'react';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import Form from './Form';
import TaskItems from './TaskItems.jsx';
import './todo.css';
export default function Todo({}) {
  const todos =[
    {id: uuid(),text:"Drink Water",complete:true,time:"11:11:11 AM"},
    ];

    const [todo,settodo]=useState(todos);
    const handleDelete = (idToDelete) => {
      settodo(todo.filter(todo => todo.id !== idToDelete));
  };
  const handleAddTask = (taskName) => {
    const newTask = {
        id: uuid(),
        text: taskName,
        time:new Date().toLocaleTimeString(),
        complete: false,
    };
   
    settodo(prevTodos => [...prevTodos, newTask]);
  
};
    
  return (
    <div>
       <h1 className="title">Todo app </h1>
       <Form handleAddTask={handleAddTask}></Form>
       {todo.map((e)=><li key={e.id}><TaskItems id={e.id} text={e.text} completed={e.complete} time={e.time} onDelete={handleDelete}></TaskItems></li>)}
    </div>
  );
}