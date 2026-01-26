
import postCSS from './post.module.css'
import { useEffect, useState } from 'react';
import { FaRegCommentAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/dateFormatter';
import { Loading } from '../Loading/Loading';



    interface tags{
        name:string
    }

    interface comments{
        id:number
        name:string
        text:string
        commentedAt:string
    }
    
    interface postData{
        id:number,
        title:string,
        text:string,
        publishedAt: string,
        readTime:string
        tag: tags[]
        comment:comments[]
    }

export function Post(){

    const{sortBy} = useParams()

    const [data,setData]=useState<postData[] | null>(null)
    async function getPosts(){
        setData(null)

        const response = await fetch(`${import.meta.env.VITE_API_URL}/Posts?sortBy=${sortBy}`, {
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }

        })
 
        const json = await response.json() as postData[]
        setTimeout(()=>{
             setData(json)
        },2000)
        
       
    }

    const stripAllHtml = (html:string):string=>{
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent || temp.innerText || ''
    }

    useEffect(()=>{
        getPosts()
    },[sortBy])
   
return (
  <div className={postCSS.PostLoadWrapper}>
    {!data ? (
 
      <Loading/>
    ) : (
  
      <div className={postCSS.Posts}>
        {data.map((post)=>(
          <Link key={post.id} to={`/Article/${post.id}`} className={postCSS.postContainer}> 
            <div className={postCSS.date}>{formatDate(post.publishedAt)}</div>
            <h1 className={postCSS.title}>{post.title}</h1>
            <p className={postCSS.content}>{stripAllHtml(post.text)}</p>
            <div className={postCSS.bottom}> 
              <div className={postCSS.comment}>
                <div>{post.comment.length}</div>
                <FaRegCommentAlt></FaRegCommentAlt>
              </div>
              <div className={postCSS.read}>
                <div>Read more</div>
                <div><FaArrowRight></FaArrowRight></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
)
}

 

    