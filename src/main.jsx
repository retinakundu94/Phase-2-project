import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// COMPONENTS
import App from './components/App';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm'; 
import ToDoItem from './components/ToDoItem';
import MotivationalMessage from './components/MotivationalMessage'; // Import the new component


// CSS
import './index.css';


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ToDoList />
      },
      {
        path: "add-todo",
        element: <ToDoForm />  
      },
      {
        path: "todo/:id",
        element: <ToDoItem />
      },
      {
        path: "motivation",  // New route for the motivational message
        element: <MotivationalMessage />
      }
    ]
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
