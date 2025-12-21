import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import App from './routes/App.jsx'
import HeaderBar from './routes/HeaderBar.jsx'
import { createRoot } from 'react-dom/client'
import FirstProjectComponent from './routes/FirstProjectComponent.jsx'
import Card from './routes/card.jsx'
import ErrorPage from './ErrorPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, 
        element:<div><h1>Hello and Welcome to My Portfolio.</h1><p>Use the header to navigate.</p></div>},
      {path: "HeaderBar", element: <HeaderBar />},
      {path:"card",
        element: <Card />, 
        children:
        [
          {path: "FirstProjectComponent", element: <FirstProjectComponent />}
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
