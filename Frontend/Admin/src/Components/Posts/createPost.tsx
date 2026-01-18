import { useState,useRef } from "react"
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from "react-router-dom";
 

export function CreatePost(){


  const navigate = useNavigate()

    const [title,setTitle]=useState("")
    const editorRef = useRef<any | null>(null);

    function handleTitleChange(event:React.ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
    }
 

    async function handleSubmit(event:React.FormEvent){
        event.preventDefault()
        const content = editorRef.current.getContent()
        const response = await fetch('http://localhost:3000/Posts',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                title:title,
                text: content
            })
        })

        if(response.ok){
          navigate('/Posts')
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
          <button type="submit">Submit post</button> 
        </form>
       
    )
}


