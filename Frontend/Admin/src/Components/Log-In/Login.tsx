import logCSS from './login.module.css'
import { useState } from 'react';


export function Login(){


    const [loading,setLoading]= useState(false)



    async function submitForm(e:React.FormEvent){
        e.preventDefault()
        setLoading(true)
        const response = await fetch('http://localhost:3000/Login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: "x3zoabdullah@gmail.com",
                password: 'This is wrong LMAO!'
            })
        });
        setLoading(false)

    }
    

    return(
        
        <div className={logCSS.pageContainer}>
            <h1>./code/blog/admin</h1>
             
            <form onSubmit={submitForm}> 
                <h1>Please login to continue!</h1>
                <input type='text' placeholder='Username' name='username' required></input>
                <input type='text' placeholder='Password' name='password' required></input>
            <button type='submit'>Login</button>
            </form>


            {loading?(
                <div>Loading is now true.... </div>
            ):(
                <div>Loading is now false....</div>
            )}


        </div>
    )
}