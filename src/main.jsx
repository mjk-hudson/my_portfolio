import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import App from './routes/App.jsx'
import { createRoot } from 'react-dom/client'
import ProjectDetails from './routes/ProjectDetails.jsx'
import Card from './routes/card.jsx'
import ErrorPage from './ErrorPage.jsx'
import './index.css'
import Home from './routes/Home.jsx'
import HomeLayout from './routes/HomeLayout.jsx'
import About from './routes/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element:<HomeLayout />,
        children: [
          {
            index: true, 
            element:<Home />
          }
        ]
      },
      {
        path:"card",
        element: <Card />, 
      },
      {
        path: "about",
        element: <About />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
