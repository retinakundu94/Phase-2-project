import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ToDoItem from './ToDoItem';

function ToDoList() {
  

  return (
    <div>
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default ToDoList;


