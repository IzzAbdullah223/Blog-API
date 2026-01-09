import {type Request, type Response} from 'express'
import * as db from '../db/queries.js'
import { title } from 'node:process'
 

export async function getPosts(req:Request,res:Response){

     try{
     const posts = await db.getUsers()
     
          return res.status(200).json(posts)
     }
     catch(error){
         return res.status(500).json({
               Message:"Failed to fetch posts"
          })
     }
 
}

interface createPostBody{
     title:string
     text:string
}

export async function createPost(req:Request<{},{},createPostBody>,res:Response){
     
     try{
     await db.createPost(req.body.title,req.body.text)
     res.status(201).json({
          message:"Post created."
     })
     }
     catch(err){
          res.status(500).json({message:"Failed to create ost."})
     }
}



 