import {type Response, type Request} from 'express'


export function LogInPost(req:Request,res:Response){
        console.log(req.body)
}