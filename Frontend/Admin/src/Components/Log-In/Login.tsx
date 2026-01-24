import logCSS from './login.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadIcon } from '../Icons/LoadIcon';

 

export function Login(){

    const [loading,setLoading]= useState(false)
    const [error,setError] = useState("")

    const [name,setName] = useState("")

    const [password,setPassword] = useState("")

    const Navigate = useNavigate()

    function handleNameChange(event:React.ChangeEvent<HTMLInputElement>){
       setName(event.target.value)
    }

    function handlePasswordChange(event:React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    async function submitForm(event:React.FormEvent){


        event.preventDefault()  
        if(name.trim()){
        }
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
        },1000)
  
        if(response.status===401){
            setError("Invalid Credentials")
        }
        else{
            const data = await response.json()
            localStorage.setItem('token',data.token)
            Navigate('/Posts')
        }
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
                <p>{error}</p>
                </div>
            )}
        </div>
        
    )
}