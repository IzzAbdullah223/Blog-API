import {useParams,useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

interface postData{
    published:boolean
}
 
export function Post(){

    const {PostId} = useParams()
    const [data,setData]= useState<postData | null>(null)
    const navgiate = useNavigate()
     
  

    async function deletePost(){
        
        const reponse = await fetch(`http://localhost:3000/Posts/${PostId}`,{
            method:"DELETE",
            headers:{
                'Content-Type':"application/json"
            }
        })

        if(reponse.status==200){
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
        
    }

        async function updatePublish(){
            const response = await fetch(`http://localhost:3000/Posts/${PostId}`,{
                method:"PUT",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    publishValue:data?.published
                })
            })

            console.log(response)
            navgiate('/Posts')
        }

    useEffect(()=>{
        getPost()
    },[data])
    
    return(<div>
            <button onClick={deletePost}>Delete Post</button>

            <button onClick={updatePublish}>{data?.published? "Unpublish" : "Publish"}</button>

    </div>)
}