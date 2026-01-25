import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Post } from './Components/Posts/Post'
import { SmallArticle } from './Components/Article/Article'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Navigate to='/All' replace/>
      },
      {
        path:":sortBy",
        element:<Post/>
      },
      {
      path: "Search/:sortBy",
      element: <Post />
      },
      {
        path:"Article/:Id",
        element:<SmallArticle/>
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
