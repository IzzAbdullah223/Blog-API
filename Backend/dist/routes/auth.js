import { Router } from "express";
import passport from "passport";
import { LogInPost } from "../controllers/authController.js";
export const authRouter = Router();
authRouter.post('/Login', passport.authenticate("local", { session: false }), LogInPost);
//# sourceMappingURL=auth.js.map