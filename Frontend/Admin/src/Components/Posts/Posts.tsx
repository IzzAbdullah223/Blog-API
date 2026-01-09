import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

export function Posts(){

    const [Error,setError] = useState(false)
    
    async function getPosts(){
        const response = await fetch('http://localhost:3000/Posts',{
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
    const data = await response.json()
      if(response.status!=200){
        setError(true)
      }
      
      console.log(200 )
     console.log(data)
    }

    useEffect(()=>{
        getPosts()
    },[])
     

    return(
        <div>
            <h1>Your posts:</h1>
            <Link to={'/createPost'}>Create new post</Link>
        </div>
    )
}