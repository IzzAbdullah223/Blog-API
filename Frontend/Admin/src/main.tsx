import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import { Login } from './Components/Log-In/Login.tsx'
import { NotFound } from './Components/NotFoundPage/NotFound.tsx'
import { Posts } from './Components/Posts/Posts.tsx'
import { CreatePost } from './Components/Posts/createPost.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:"/",element:<Login/>},
  {path:"*",element:<NotFound/>},
  {path:"/Posts",element:<Posts></Posts>},
  {path:"/createPost",element:<CreatePost></CreatePost>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
