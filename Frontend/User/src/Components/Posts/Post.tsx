import './prism.costume.css'
import postCSS from './post.module.css'
import { useEffect, useState } from 'react';
import { FaRegCommentAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MagnifyIcon } from '../Icons/Magnify';
import { useParams } from 'react-router-dom';



interface postData{
    id:number,
    title:string,
    text:string,
    publishedAt: string
}

declare global {
  interface Window {
    Prism: any;
  }
}

 

export function Post(){

    const{sortBy} = useParams()

    const [data,setData]=useState<postData[] | null>(null)
    async function getPosts(){

        
        console.log(sortBy)
        const response = await fetch(`http://localhost:3000/Posts?sortBy=${sortBy}`, {
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }

        })
        console.log(response)
        const json = await response.json() as postData[]

        console.log(json)

        setData(json)
       
    }



    const stripAllHtml = (html:string):string=>{
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent || temp.innerText || ''
    }

    const formatDate = (dateString:string): string=>{
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US',{
            dateStyle:"full"
        })
    }

    useEffect(()=>{
        getPosts()
    },[sortBy])


    useEffect(() => {
    if (window.Prism && data) {
        window.Prism.highlightAll();
    }
}, [data]);
   
return (
  
    !data ? (
      // First return - when no data
      <div className={postCSS.LoadingContainer}>
        <div className={postCSS.MagnifyContainer}> 
            <MagnifyIcon size={90}></MagnifyIcon>
        </div>  
      </div>
      
    ) : (
      // Second return - when data exists
      <div className={postCSS.Posts}>

        {data.map((post)=>(
            <div className={postCSS.postContainer} key={post.id}>
                <div className={postCSS.date}>{formatDate(post.publishedAt)}</div>
                <h1 className={postCSS.title}>{post.title}</h1>
                <p className={postCSS.content}>{stripAllHtml(post.text)}</p>
                <div className={postCSS.bottom}> 
                    <div className={postCSS.comment}>
                        <div>30</div>
                        <FaRegCommentAlt></FaRegCommentAlt>
                    </div>

                    <div className={postCSS.read}>
                        <div>Read more</div>
                        <div><FaArrowRight></FaArrowRight></div>
                    </div>
                </div>
            </div>
        ))}

        {/*<div className={postCSS.postContainer}>

                <div className={postCSS.date}>Monday, 06. March 2023</div>
                <h1  className={postCSS.title}>Time-Saving Shortcuts and Features in Visual Studio Code: Emmet</h1>
                <p className={postCSS.content}>The Emmet tool in Visual Studio Code is a great feature that helps you speed up writing HTML.
                In Visual Studio Code, Emmet works by recognizing the abbreviations or shortcuts that you type
                and expands them into complete HTML or CSS code.
                </p>

                <div className={postCSS.bottom}> 
                    <div className={postCSS.comment}>
                        <div>30</div>
                        <FaRegCommentAlt></FaRegCommentAlt>
                    </div>

                <div className={postCSS.read}>
                    <div>Read more</div>
                    <div><FaArrowRight></FaArrowRight></div>
                </div>
            </div>
            
        </div>    */}


      </div>
    )
  
)
}

      //  {data && <div dangerouslySetInnerHTML={{ __html: data[0].text }} />}

    