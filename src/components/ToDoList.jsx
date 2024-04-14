import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom'
import ToDoItem from './components/ToDoItem';

function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default ToDoList;

