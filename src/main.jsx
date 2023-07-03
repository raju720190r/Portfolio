import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About.jsx';
import Resume from './Pages/Home/Resume.jsx';
import Contact from './Pages/Contact.jsx';
import Portfolio from './Pages/Portfolio/Portfolio.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"portfolio",
        element:<Portfolio/>
      }
      ,{
        path: "resume",
        element: <Resume />
      }, {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      },

    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
