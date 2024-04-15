import React from 'react';
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import ToDoList from './ToDoList';


function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Todo List</h1>
      <ToDoForm />
      <ToDoList />
      <ToDoItem />
    </div>
  );
}

export default App;










// routing --> multiple pages

// server --> json-server

// RESTUL ROUTES

// GET /movies --> data for ALL movies

// GET /movies/1 --> data for the first movie (a.k.a. movie with id of 1)

// POST /movies --> create data for a movie

// PATCH /movies/1 --> update data for movie with id 1

// DELETE /movies/1 --> delete data for movie with id 1


// FRONTEND

// GET /home --> everything
