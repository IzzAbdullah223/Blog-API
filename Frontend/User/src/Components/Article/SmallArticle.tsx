import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import CSS from './art.module.css'
import { FaGlasses } from "react-icons/fa";
import './prism.costume.css' 

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
    const{Id} = useParams()
    
async function getArticle(){
    console.log(Id)
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
    
    return(<div className={CSS.ArticleContainer}>
            <div className={CSS.Top}>
                <div>{data?.publishedAt ? formatDate(data.publishedAt) : 'Loading...'}</div>
                <div>By Izz</div>
            </div>
            <h1>{data?.title}</h1>
            <div className={CSS.tags}>
                {data?.tag.map((tag)=>(
                    <div key={tag.name}>{tag.name}</div>
                ))}
            </div>
            <div className={CSS.readTime}>
                <FaGlasses color="grey" size={25} />
                4 min
            </div>
            {data && (
    <div className={CSS.articleContent} dangerouslySetInnerHTML={{ __html: data.text }} />)}
    </div>)
    
}