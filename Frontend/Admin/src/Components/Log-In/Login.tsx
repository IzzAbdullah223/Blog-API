import logCSS from './login.module.css'
import { useState,useRef } from 'react';
import { LoadIcon } from '../Icons/LoadIcon';


export function Login(){

    const [loading,setLoading]= useState(false)

    const [name,setName] = useState("")

    const [password,setPassword] = useState("")

    function handleNameChange(event:React.ChangeEvent<HTMLInputElement>){
       setName(event.target.value)
    }

    function handlePasswordChange(event:React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    async function submitForm(event:React.FormEvent){

        event.preventDefault()  
        console.log(name)
        console.log(password)
    
        setLoading(true)
        const response = await fetch('http://localhost:3000/Login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: name,
                password: password
            })
        })
         

        setTimeout(()=>{

              setLoading(false)
        },2000)

 
        
 
        

    }
    

    return(
        
        <div className={logCSS.pageContainer}>
            <h1>./code/blog/admin</h1>
             
            <form onSubmit={submitForm} className={logCSS.logForm}> 
                <h1>Please login to continue!</h1>
                <input type='text' placeholder='Username' value={name} onChange={handleNameChange} className={logCSS.logInp}  required></input>
                <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} className={logCSS.logInp}  required></input>
            <button type='submit' className={logCSS.logBTN}>Login</button>
            </form>
            {loading?(
                <div className={logCSS.loadingContainer}>
                <LoadIcon size={75}></LoadIcon>
                </div>
                
            ):(
                <div className={logCSS.errorContainer}> 
                <p>Invalid credentials</p>
                </div>
            )}
        </div>
        
    )
}