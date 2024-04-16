import React from 'react';
import ToDoItem from './ToDoItem';
import { useOutletContext } from 'react-router-dom';

function ToDoList() {
  // if (!todos) {
  //   return <div>Loading...</div>; // Handle the case where todos is still undefined
  // }

  const {todos} = useOutletContext()

  return (
    <div>
      {todos?.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default ToDoList;






