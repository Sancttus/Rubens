import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

import Alzheimer from './pages/Alzheimer.jsx';
import Error from './pages/Error.jsx';


import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
{

  path:"/",
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Login/>
    }, 
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
     {
      path:'/alzheimer',
      element:<Alzheimer/>
    },
    {
      path:'/error',
      element:<Error/>
    },
  
  ]

}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
