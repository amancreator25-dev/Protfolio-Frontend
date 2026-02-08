import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import { store } from './authSlice/store.js'

import Layout from './Layout.jsx'
import Github from './Components/Github/Github.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import Register from './Components/Register/Register.jsx'
import Login from './Components/Login/Login.jsx'
import UserLayout from './UserLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "Github", element: <Github /> },
      { path: "Blogs", element: <Blogs /> },
      { path: "user", element: <User /> }
    ]
  },
  {
    path: "/User",
    element: <UserLayout />,
    children: [
      { path: "Register", element: <Register /> },
      { path: "Login", element: <Login /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
