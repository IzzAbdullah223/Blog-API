import { Router } from "express";
import { getPosts } from "../controllers/postsController.js";



export const postRoute = Router()

postRoute.get('/Posts',getPosts)
postRoute.post('/Posts') // Protected route  creating new posts AUTHOR
postRoute.get('/Posts/:postId')
postRoute.delete('/Posts/:postId') //Protected route deleting posts AUTHOR
postRoute.put('/Posts:/postId')   //Protected route editing posts AUTHOR 
postRoute.get('/Posts:/postId/comments')
postRoute.post('Posts:/postId/comments') //protected route users comment USER 
postRoute.delete('Posts:/postId/comments') //protected route users delete their comment USER 





