import {prisma} from './libs/prisma.js'
 

export async function getPosts(sortBy:string){
    switch(sortBy){
        case "All":
            return await prisma.post.findMany()
            
        case "Latest":

            return await prisma.post.findMany({
                orderBy:{publishedAt:"desc"}
            })

        case "Visual Studio Code":

            return await prisma.post.findMany({
                where:{
                    tag:{
                        some:{
                            name: sortBy
                        }
                    }
                }
            })
    }
}

export async function createPost(title:string,text:string){
    await prisma.post.create({
        data:{
            title:title,
            text:text,
            authorId:1
        }
    })
}

export async function getPost(id:number){
    return await prisma.post.findUnique({
        where:{id:id},
        include:{tag:true}
    })
}

export async function deletePost(id:number){
     await prisma.post.delete({
        where:{id:id}
    }) 
}

 
