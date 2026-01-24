import { useState,useRef, useEffect } from "react"
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from "react-router-dom";
 

export function CreatePost(){


  const navigate = useNavigate()

    const [title,setTitle]=useState("")
    const [readTime,setReadTime] = useState("")
    const [tags,setTags]= useState<string []>([])
    const [newTag,setTag] = useState("")
    const editorRef = useRef<any | null>(null);


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    },[])

    function handleTitleChange(event:React.ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
    }

    function handleTagInput(event:React.ChangeEvent<HTMLInputElement>){
        setTag(event.target.value)
    }

    function handleReadTime(event:React.ChangeEvent<HTMLInputElement>){
        setReadTime(event.target.value)
    }

    function addTag(){

        if(newTag.trim()!==""){
            setTags(t=>[...t,newTag])
            setTag("")
        }
 
    }

    function deleteTag(index:number){
        const updatedTags = tags.filter((_,i)=>i !== index)
        setTags(updatedTags)
    }
 

    async function handleSubmit(event:React.FormEvent){
        event.preventDefault()
        const content = editorRef.current.getContent()
        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:3000/Posts',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify({
                title:title,
                text: content,
                tags:tags,
                readTime:readTime
            })
        })

        if(response.ok){
          navigate('/Posts')
        }

        else if(response.status=== 403){
            localStorage.removeItem('token');
            navigate('/')
        }
        else{
          console.log("Something went wrong")
        }
        


    }


    return(


        <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <input type="text" value={title}  onChange={handleTitleChange} required></input>
            <br></br><br></br>
        <Editor
            apiKey='cqe7anygnlsrzao5tq6yr7bbkewgdyeshpu7j0clpyujjrb7'
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p>Start writing your post...</p>"
            init={{
                 height: 500,
                 menubar: false,
                 plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                            'preview', 'anchor', 'searchreplace', 'visualblocks', 'code',
                            'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount', 'codesample'
                                                                                                                ],
                toolbar: 'undo redo | blocks | ' +
                         'bold italic forecolor backcolor | alignleft aligncenter ' +
                         'alignright alignjustify | bullist numlist outdent indent | ' +
                         'codesample | removeformat | help',
                content_style: 'body { font-family: Arial, sans-serif; font-size: 14px; }'
            }}
          />
          <br></br><br></br>
          <input type="text" placeholder="Enter a tag" value={newTag} onChange={handleTagInput}></input>
          <button onClick={addTag} type="button">Add tag</button>
          <ol> 
          {tags.map((tag,index)=>(
            <li key={index}>
                <span>{tag}</span>
                <button onClick={()=>deleteTag(index)}>Delete</button>
            </li>
          ))}
          </ol>
          <br></br> <br></br>
          <label>Read Time: in minutes </label>
          <input type="Text" value={readTime} onChange={handleReadTime} required/>
          <br></br> <br></br>
          <button type="submit">Submit post</button> 
        </form>
       
    )
}


