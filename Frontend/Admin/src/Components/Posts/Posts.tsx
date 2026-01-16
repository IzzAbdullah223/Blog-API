import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

import CSS from  './posts.module.css'

export function Posts(){

    interface postData{
        id: number
        title: string

    }

     
     const[data,setData] = useState<postData[] | null>(null)
     
    async function getPosts(){
        const response = await fetch('http://localhost:3000/Posts?sortBy=Admin',{
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