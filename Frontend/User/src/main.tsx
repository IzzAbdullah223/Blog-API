import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Article from './Article.tsx'

const router = createBrowserRouter([
  {path:"/",element:<Navigate to={'/All'}></Navigate>},
  {path:"/:sortBy",element:<App></App>},
  {path:"/Article/:Id",element:<Article></Article>}
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
