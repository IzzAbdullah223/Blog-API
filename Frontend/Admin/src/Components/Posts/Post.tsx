import {useParams,useNavigate } from "react-router-dom"
 
export function Post(){

    const {PostId} = useParams()
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
    
    return(<div>
            <button onClick={deletePost}>Delete Post</button>
    </div>)
}