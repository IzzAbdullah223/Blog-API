import { Router } from "express";
import { getPosts } from "../controllers/postsController.js";
import { verifyToken } from "../controllers/authController.js";



export const postRoute = Router()

postRoute.get('/Posts',verifyToken,getPosts)
  





