import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// COMPONENTS
import App from './components/App';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'; // Corrected component name
import TodoItem from './components/TodoItem';
import NavBar from './components/NavBar';

// CSS
import './index.css';

// ROUTES
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoList />
      },
      {
        path: "add-todo",
        element: <TodoForm />  // Corrected component name used here
      },
      {
        path: "todo/:id",
        element: <TodoItem />
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
