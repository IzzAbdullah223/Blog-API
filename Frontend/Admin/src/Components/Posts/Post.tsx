import {useParams,useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

interface postData{
    published:boolean
}
 
export function Post(){

    const {PostId} = useParams()
    const [data,setData]= useState<postData | null>(null)
    const navgiate = useNavigate()
     
  
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navgiate('/')
        }
    })

    async function deletePost(){
        
        const reponse = await fetch(`http://localhost:3000/Posts/${PostId}`,{
            method:"DELETE",
            headers:{
                'Content-Type':"application/json"
            }
        })

        if(reponse.status===403){
            navgiate('/')
        }
        else if(reponse.status==201){
            navgiate('/Posts')
        }

    }
    

    async function getPost(){
        const response = await fetch(`http://localhost:3000/Posts/${PostId}`,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        setData(await response.json())

        if(response.status===403){
            navgiate('/')
        }

        else if(response.status===200){
            navgiate('/Posts')
        }
        
    }

        async function updatePublish(){
            const response = await fetch(`http://localhost:3000/Posts/${PostId}`,{
                method:"PUT",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    publishValue:data?.published
                })
            })

            if(response.status==403){
                navgiate('/')
            }

            else if(response.status===201){
                navgiate('/Posts')
            }
          
        }

    useEffect(()=>{
        getPost()
    },[data])
    
    return(<div>
            <button onClick={deletePost}>Delete Post</button>

            <button onClick={updatePublish}>{data?.published? "Unpublish" : "Publish"}</button>

    </div>)
}