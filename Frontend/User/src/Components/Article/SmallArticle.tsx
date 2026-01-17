import { useParams,NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import CSS from './art.module.css'
import { FaGlasses,FaArrowLeft,FaRegCommentAlt  } from "react-icons/fa";
import './prism.costume.css'
import { Modal } from "../Modal/Modal";

declare global {
  interface Window {
    Prism: any;
  }
}

export function SmallArticle(){

 
    interface tags{
        name:string
    }
    
    interface postData{
        id:number,
        title:string,
        text:string,
        publishedAt: string
        tag: tags[]
    }
    
    const[data,setData]=useState<postData | null>(null)
    const[modal,setModal]= useState(false)
    const{Id} = useParams()
    
    const toggleModal = () =>{
         setModal(!modal)
    }
async function getArticle(){
    const response = await fetch(`http://localhost:3000/Posts/${Id}`, {
        method:"GET",
        headers:{
            'Content-Type': 'application/json'
        }
    })

    setData(await response.json())
}
    
    useEffect(()=>{
        getArticle()
    },[Id])
    
    useEffect(() => {
        if (window.Prism && data) {
            window.Prism.highlightAll();
        }
    }, [data]);
    
    const formatDate = (dateString:string): string=>{
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US',{
            dateStyle:"full"
        })
    }
    
    return(
<div className={CSS.Container}> 
    <div className={CSS.ArticleContainer}>
            <div className={CSS.Top}>
                <div>{data?.publishedAt ? formatDate(data.publishedAt) : 'Loading...'}</div>
                <div>By Izz</div>
            </div>
            <div className={CSS.belowTop}> 
                <h1>{data?.title}</h1>
                <div className={CSS.tags}>
                    {data?.tag.map((tag)=>(
                        <div key={tag.name}>Mindset</div>
                    ))}
                </div>
                <div className={CSS.readTime}>
                    <FaGlasses color="grey" size={20} />
                    2 min
                </div>
            </div>
            {data && (
    <div className={CSS.articleContent} dangerouslySetInnerHTML={{ __html: data.text.trim() }} />)}
    <NavLink  to="/About"className={({ isActive }) => isActive ? CSS.active : ''}>
            <FaArrowLeft/>
            <div>go back</div>
    </NavLink>
    <h2 className={CSS.comments}>13 Comments</h2>
    <div className={CSS.commentContainer} onClick={toggleModal}>
        <h2>Add comment</h2>
        <FaRegCommentAlt size={25} />
    </div>
    </div>
    {modal && <Modal toggleModal={toggleModal} />}
</div> )
    
}