
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CSS from './modal.module.css'
import { ImCross,ImCheckmark } from "react-icons/im";

interface ModalProps{
    toggleModal: ()=> void
    onCommentAdded: () => void
}

export function Modal({toggleModal, onCommentAdded}:ModalProps){

    const[name,setName]=useState('')
    const[comment,setComment]=useState('')
    const {Id} = useParams()


    const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
    }

    const handleCommentChange = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setComment(event.target.value)
    }
    
    async function submitComment(e:React.FormEvent){
        e.preventDefault()
        if(!name.trim() || !comment.trim()){
            alert('Input or comments cannot be empty')
            return
        }
         toggleModal()
            const response = await fetch(`${import.meta.env.VITE_API_URL}/${Id}`,{
            method:"POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                name:name,
                comment:comment,
                postId:Id
            })    
        })
    

        if(response.ok){
            onCommentAdded()
            toggleModal()
        }
 
  
    }
 
   
   return(
    <>
        <div className={CSS.modal}>
            <div className={CSS.overlay}></div>
            <div className={CSS.modalContent}>
                <h1>Add Comment</h1>
                 
                    <form onSubmit={submitComment}>
                        <input className={CSS.modalInput} type='text' required placeholder='Name (required)' value={name} onChange={handleNameChange}/> 
                        <textarea className={CSS.modaltext} required placeholder='Comment (required)' value={comment} onChange={handleCommentChange}/>
                            <button type='submit'> Submit <ImCheckmark/></button>
                    </form>
                    <button className={CSS.closeModal} onClick={toggleModal}>
                <ImCross size={12}/>
            </button>
            </div>
 
        </div>
    </>

   )
}