import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// COMPONENTS
import App from './components/App';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm'; 
import ToDoItem from './components/ToDoItem';

// CSS
import './index.css';

// ROUTES
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: '/', //true,
        element: <ToDoList />
      },
      {
        path: "add-todo",
        element: <ToDoForm />  
      },
      {
        path: "todo/:id",
        element: <ToDoItem />
      }
    ]
  }
];

// ROUTER
const router = createBrowserRouter(routes);

// RENDER
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
