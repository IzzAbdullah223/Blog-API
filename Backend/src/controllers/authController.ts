import {type Response, type Request, type NextFunction} from 'express'
import jwt,{type JwtPayload, type Secret} from 'jsonwebtoken'

declare global{
        namespace Express{
                interface Request{
                        token?: string | undefined,
                }
        }
}

interface TokenPayload {
    user: {
        id: number
        email: string
    }
}

export async function LogInPost(req:Request,res:Response){
        const user=req.user
        jwt.sign({user:user},process.env.SECRET_KEY as Secret,{expiresIn: '7d'},(err: Error | null, token: string | undefined)=>{
          res.json({
                token
          })
        })
}

export function verifyToken(req: Request, res: Response, next: NextFunction){
    const bearerHeader = req.headers['authorization']
    
    if(typeof(bearerHeader) !== 'undefined'){
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        
        if(!bearerToken){
            return res.status(403).json({error: "Invalid token format"})
        }
        
        jwt.verify(bearerToken, process.env.SECRET_KEY as Secret, (err: Error | null, authData: string | JwtPayload | undefined) => {
            if(err){
                return res.status(403).json({error: "Invalid or expired token"})
            }
            
            const payload = authData as TokenPayload
            req.token = bearerToken    
            req.user = payload.user
            next()
        })
    }
    else{
        res.status(403).json({error: "No token provided"})
    }
}