import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import GitHub from './components/GitHub/GitHub'
import About from './components/About/About'
import Login from './components/Login/Login'
import Contact from './components/Contectus/Contect'
import User from './components/User/User'
import Route from './route.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Route />,
    children : [
      {path: "",
        element : <Home/>
      }, 
      {
        path:"about",
        element : <About />
      },
      {
        path:"contact",
        element: < Contact />
      },
      {
        path: "login",
        element: < Login />
      }, 
      {
        path : "user/:userid",
        element : < User />
      }, 
      {
        path : "github",
        element: < GitHub />
      }
    ]
  }
])

//new way to create router
// const router = createBrowserRouter(
//   createRoutesFromElements( 
//     < Route path='/' element = { < Layout />}>
//       <Route path='about' element = {< About />}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}/>
  </StrictMode>,
)
