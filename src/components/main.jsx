import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from '.components/About'
import Home from '.components/Home'
import Contact from "./components/Contact"
import './index.css'
import { createBrowserRouter, RouterProvider } from
'react-router-dom'

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: 'portfolio',
            element: <Portfolio />
          },
          {
            path: 'portfolio/:id',
            element: <PortfolioItem />
          },
          {
            path: 'bio',
            element: <Bio />
          },
        ]
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider>
<App />
    </RouterProvider>
  </React.StrictMode>,
)import { formatPostcssSourceMap } from 'vite'

