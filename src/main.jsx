import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
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
  ]

}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
