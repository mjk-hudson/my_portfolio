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
        element:<div>
          <h1 className="font-public-sans">Hello and Thanks for viewing My Portfolio.</h1>
        <div className="mt-6">
          <p>I’m Majik Hudson, a Hells' Kitchen, N.Y.C. based Product Designer. I leverage Human Centered Design, Design Thinking and A.I. to produce desirable, viable, feasible products that not only fulfill user needs, but create engaging and enjoyable experiences for customers, users and stakeholders.

        I'm currently available for hire.</p>
        </div>
        <div className="mt-4 text-blue-500">
          <p>Use the navigation bar to navigate.</p>
          </div>
        </div>},
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
