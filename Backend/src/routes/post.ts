import { Router } from "express";
import { getPosts,createPost,deletePost,getPost,updatePublish,commentPost,getTags,getRandom} from "../controllers/postsController.js";
import { verifyToken } from "../controllers/authController.js";



export const postRoute = Router()

postRoute.get('/Posts',getPosts, ) 

postRoute.get('/Posts/Tags',getTags)

postRoute.get('/Posts/Random',getRandom)

postRoute.get('/Posts/:PostId',getPost)

postRoute.post('/Posts',verifyToken,createPost) 

postRoute.post('/Posts/:PostId',commentPost)

postRoute.delete('/Posts/:PostId',verifyToken,deletePost)

postRoute.put('/Posts/:PostId',verifyToken,updatePublish )
 

  





