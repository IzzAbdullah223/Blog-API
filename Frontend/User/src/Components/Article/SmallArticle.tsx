import { useParams,NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import CSS from './art.module.css'
import { FaGlasses,FaArrowLeft,FaRegCommentAlt  } from "react-icons/fa";
import './prism.costume.css'
import { Modal } from "../Modal/Modal";
import { formatDate,formatDate2 } from "../../utils/dateFormatter";
import { Loading } from "../Loading/Loading";

export function SmallArticle(){
 
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
    
    const[data,setData]=useState<postData | null>(null)
    const[modal,setModal]= useState(false)
    const[refreshTrigger, setRefreshTrigger] = useState(0)
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
    },[Id,refreshTrigger])
    
    useEffect(() => {
        if (window.Prism && data) {
            window.Prism.highlightAll();
        }
    }, [data,modal]);
    
    return( 
        <div className={CSS.Container}> 
            {!data ? (
                <Loading/>
            ) : (
                <div className={CSS.ArticleContainer}>
                    <div className={CSS.Top}>
                        <div>{formatDate(data.publishedAt)}</div>
                        <div>By Izz</div>
                    </div>
                    <div className={CSS.belowTop}> 
                        <h1>{data.title}</h1>
                        <div className={CSS.tags}>
                            {data.tag.map((tag)=>(
                                <div key={tag.name}>{tag.name}</div>
                            ))}
                        </div>
                        <div className={CSS.readTime}>
                            <FaGlasses color="grey" size={20} />
                            {data.readTime} min
                        </div>
                    </div>
                    <div className={CSS.articleContent} dangerouslySetInnerHTML={{ __html: data.text.trim() }} />
                    <NavLink to="/All" className={({ isActive }) => isActive ? CSS.active : ''}>
                        <FaArrowLeft/>
                        <div>go back</div>
                    </NavLink>
                    <h2 className={CSS.numberOfComments}>{data.comment.length} Comments</h2>
                    <div className={CSS.commentPost} onClick={toggleModal}>
                        <h2>Add comment</h2>
                        <FaRegCommentAlt size={25} />
                    </div>
                    <div className={CSS.commentsContainer}>
                        {data.comment.map((comment)=>(
                            <div className={CSS.commentContainer} key={comment.id}>
                                <div className={CSS.commentHead}>from: <strong>{comment.name}</strong> on {formatDate2(comment.commentedAt)}</div>
                                <div className={CSS.comment}> {comment.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {modal && <Modal toggleModal={toggleModal} onCommentAdded={() => setRefreshTrigger(prev => prev + 1)} />}
        </div>
    )
}