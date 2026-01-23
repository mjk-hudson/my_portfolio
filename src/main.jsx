import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import App from './routes/App.jsx'
import HeaderBar from './routes/HeaderBar.jsx'
import { createRoot } from 'react-dom/client'
import FirstProjectComponent from './routes/FirstProjectComponent.jsx'
import Card from './routes/card.jsx'
import ErrorPage from './ErrorPage.jsx'
import './index.css'
import Home from './routes/Home.jsx'
import HomeLayout from './routes/HomeLayout.jsx'

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
        children:[
          {
            path:"FirstProjectComponent",
            element: <FirstProjectComponent />,
          },
        ],
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
