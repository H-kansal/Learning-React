import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,Route,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import {Layout} from './Layout.jsx'
import { Home } from './component/Home.jsx'
import { About } from './component/About.jsx'
import { Github } from './component/Github.jsx'
import { Contact } from './component/Contact.jsx'
import { User } from './component/User.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='Github' element={<Github/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='user' element={<User/>} />
    </Route>
  )

  // using without createRoutesFromElements
  // [{
  //   path:"/",element:<Layout/>,
  //   children:[
  //     {path:"home",element:<Home/>}
  //   ]
  // },
// ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
