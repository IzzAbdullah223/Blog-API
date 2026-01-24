import { useState,useEffect } from "react"
import { Link,useNavigate } from "react-router-dom"

import CSS from  './posts.module.css'

export function Posts(){

    interface postData{
        id: number
        title: string

    }

     const navigate = useNavigate()
     const[data,setData] = useState<postData[] | null>(null)


     useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
     },[])
     
    async function getPosts(){
        const response = await fetch(`${import.meta.env.VITE_API_URL}/Posts?sortBy=Admin`,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
 
            }
        })
 
      setData(await response.json())
 
    }

 

    useEffect(()=>{
        getPosts()
    },[data])
     

    return(
        <div>
            <h1>Your posts:</h1>
            <div className={CSS.postsContainer}> 
            {data?.map((post)=>(

                <Link to={`/Posts/${post.id}`} className={CSS.postContainer} key={post.id}>
                    {post.title}
                </Link>
            ))}
            </div>
            <Link to={'/createPost'}>Create new post</Link>
        </div>
    )
}