import {prisma} from './libs/prisma.js'
 

export async function findPosts(){
    const posts = prisma.post.findMany()
    return posts
}