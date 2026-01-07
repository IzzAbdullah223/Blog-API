import { Router } from "express";
import { LogInPost } from "../controllers/authController.js";




export const authRouter = Router()


authRouter.post('/Login',LogInPost)