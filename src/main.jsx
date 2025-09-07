import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Github from './Components/Github/Github.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Linkdin from './Components/Linkdin/Linkdin.jsx'

const router=createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    path:"",
    element:<Home/>
  },{
    path:"about",
    element:<About/>
  },{
    path:"contact",
    element:<Contact/>
  },{
    path:"Github",
    element:<Github/>
  },{
    path:"Linkdin",
    element:<Linkdin/>
  },{
     path:"user",
    element:<User/>}]
  }])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
