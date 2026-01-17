
import { useState } from 'react';
import CSS from './modal.module.css'
import { ImCross,ImCheckmark } from "react-icons/im";

 interface ModalProps{
    toggleModal: ()=> void
 }
 

export function Modal({toggleModal}:ModalProps){

    const[name,setName]=useState('')
    const[comment,setComment]=useState('')


    const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
    }

    const handleCommentChange = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setComment(event.target.value)
    }
    
    async function submitComment(e:React.FormEvent){
        e.preventDefault()
        console.log(name)
        console.log(comment)
  
    }
 
   
   return(
    <>
        <div className={CSS.modal}>
            <div className={CSS.overlay}></div>
            <div className={CSS.modalContent}>
                <h1>Add Comment</h1>
                 
                    <form onSubmit={submitComment}>
                        <input type='text' required placeholder='Name (required)' value={name} onChange={handleNameChange}/> 
                        <textarea required placeholder='Comment (required)' value={comment} onChange={handleCommentChange}/>
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