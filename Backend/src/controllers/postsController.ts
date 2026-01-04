import {type Request, type Response} from 'express'
import * as db from '../db/queries.js'

export async function getPosts(req:Request,res:Response){
    const posts = await db.findPosts()
    console.log(typeof(posts))
}