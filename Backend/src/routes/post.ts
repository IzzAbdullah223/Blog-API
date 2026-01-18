import { Router } from "express";
import { getPosts,createPost,deletePost,getPost,updatePublish,commentPost } from "../controllers/postsController.js";
import { verifyToken } from "../controllers/authController.js";



export const postRoute = Router()

postRoute.get('/Posts',getPosts) //verifyToken add this later on 
postRoute.get('/Posts/:PostId',getPost)  
postRoute.post('/Posts',createPost) //verify token add this later on
postRoute.post('/Posts/:PostId',commentPost)
postRoute.delete('/Posts/:PostId',deletePost)
postRoute.put('/Posts/:PostId',updatePublish)

  





