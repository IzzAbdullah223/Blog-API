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
            <label>Text: </label>
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
content_style: `
   body { 
    font-family:Ubuntu,Helvetica,Arial,sans-serif; 
    font-size:1.2rem;
    background-color: #383838;
    color: #c5c8c6;
    font-weight: 500;
    line-height: 1.75;
  }

  a {
   color: #458587;
   font-weight: bold;
   text-decoration:none;
  }
  
  a:hover{
  color: #6aeaee98;
  }

    ::selection {
    background-color: #689d69;
    color: #c8bb97;
  }
  
  ::-moz-selection {
    background-color: #689d69;
    color: #c8bb97;
  }
  
  code[class*="language-"], 
  pre[class*="language-"] {
    background: #27212e;
    color: #fff;
    font-weight: bold;
    font-size: 1em;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    tab-size: 2;
    text-shadow: none !important;
  }
  
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: .5em;
  }

  .token.tag { color: #74dfc4 !important; }
  .token.punctuation { color: #7b6995 !important; }
  .token.attr-name { color: #eb64b9 !important; }
  .token.property { color: #40b4c4 !important; }
  .token.attr-value { color: #b4dce7!important; }
 .token.namespace { color: #40b4c4!important; }
`
                                }}
/>
          <button type="submit">Submit post</button> 
        </form>
       
    )
}


