import { Router } from "express";
import { getPosts,createPost,deletePost,getPost,updatePublish,commentPost,getTags } from "../controllers/postsController.js";
import { verifyToken } from "../controllers/authController.js";



export const postRoute = Router()

postRoute.get('/Posts',getPosts,verifyToken) //verifyToken add this later on 
postRoute.get('/Posts/Tags',getTags)
postRoute.get('/Posts/:PostId',getPost)  
postRoute.post('/Posts',createPost,verifyToken) //verify token add this later on
postRoute.post('/Posts/:PostId',commentPost)
postRoute.delete('/Posts/:PostId',deletePost,verifyToken)
postRoute.put('/Posts/:PostId',updatePublish,verifyToken)
 

  





