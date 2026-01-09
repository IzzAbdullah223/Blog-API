import { Router } from "express";
import { getPosts, createPost } from "../controllers/postsController.js";
import { verifyToken } from "../controllers/authController.js";
export const postRoute = Router();
postRoute.get('/Posts', getPosts); //verifyToken add this later on 
postRoute.post('/Posts', createPost); //verify token add this later on 
//# sourceMappingURL=post.js.map