import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

function ToDoForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const {setTodos, todos} = useOutletContext()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newTodo = { title, completed: false };

    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTodo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setTodos([...todos, data])
      if (onAdd) onAdd(data);
      setTitle('');
      navigate('/')
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
}

export default ToDoForm;
