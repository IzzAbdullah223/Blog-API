import {type Request, type Response} from 'express'
import * as db from '../db/queries.js'
 



interface createPostBody{
     title:string
     text:string
}
 

export async function getPosts(req:Request,res:Response){
      const sortBy = req.query.sortBy as string
     try{
     const posts = await db.getPosts(sortBy)
     
          return res.status(200).json(posts)
     }
     catch(error){
         return res.status(500).json({
               Message:"Failed to fetch posts"
          })
     }
 
}

export async function getPost(req:Request,res:Response){ // for viewing a single post 
     const postID = Number(req.params.PostId)
     try{
          const post = await db.getPost(postID)
          return res.status(200).json(post)
     }
     catch(err){
          return res.status(500).json({
               Message: "Failed to fetch post"
          })
     }
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

export async function deletePost(req:Request,res:Response){
     const PostId = Number(req.params.PostId)   
     try{
          await db.deletePost(PostId)
          res.status(201).json({
               message:"Post deleted sucessfuly"
          })
     }catch(err){
          console.log(err)
          res.status(500).json({
               message:"Failed to delete post "
          })
     }
 
}

export async function updatePublish(req:Request,res:Response){
          const PostId = Number(req.params.PostId)
          const publishValue = req.body.publishValue as boolean

           

          try{
               if(publishValue){
                    await db.unPublishPost(PostId)
                    res.status(200).json({
                         message:"Post unpublished"
                    })
               }
               else{
                    await db.publishPost(PostId)
                    res.status(200).json({
                         message:"Post published"
                    })
               }
               
          }catch(err){
               res.status(500).json({
                    Message:"Failed to update post"
               })
          }

}

interface ArticleBody{
     name:string
     comment:string
}

export async function commentPost(req:Request<{PostId:string},{},ArticleBody>,res:Response){
     const postId = Number(req.params.PostId)
     const {name,comment} = req.body
     try{
          await db.createComment(postId,name,comment)
          res.status(201).json({
               comment: "Comment added"
          })
     }catch(err){
          res.status(500).json({
               message: "Failed to post comment "
          })
     }
}



 