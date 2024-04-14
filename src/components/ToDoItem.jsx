import React from 'react';
import { Link } from 'react-router-dom';

function ToDoItem({ todo }) {
    return (
      <div>
        <h3>{todo.title}</h3>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      </div>
    );
  }
  
  export default ToDoItem;
  