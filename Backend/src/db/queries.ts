import {prisma} from './libs/prisma.js'
 

export async function getPosts(sortBy:string){
    switch(sortBy){
        case "All":
            return await prisma.post.findMany({
                where:{published:true},
                include:{tag:true,comment:true}
            })
            
        case "Latest":

            return await prisma.post.findMany({
                where:{published:true},
                orderBy:{publishedAt:"desc"},
                include:{tag:true,comment:true}
            })

        case "Admin":

            return await prisma.post.findMany()

        case sortBy:

            return await prisma.post.findMany({
                where:{
                    published:true,
                    tag:{
                        some:{
                            name: sortBy
                        }
                        
                    }
                },
                include:{tag:true,comment:true}
            })
    }
}

export async function createPost(title:string,text:string,readTime:string,tags:string[]){
    await prisma.post.create({
        data:{
            title:title,
            text:text,
            authorId:1,
            readTime:readTime,
            tag:{
                create: tags.map(tagName=>({name:tagName}))
            }
        }
    })
}

export async function getPost(id:number){
    return await prisma.post.findUnique({
        where:{id:id},
        include:{tag:true,comment:true}
    })
}


export async function deletePost(id:number){
     await prisma.post.delete({
        where:{id:id}
    }) 
}

export async function publishPost(id:number){
    await prisma.post.update({
        where:{id:id},
        data:{published:true}
    })
}

export async function unPublishPost(id:number){
    await prisma.post.update({
        where:{id:id},
        data:{published:false}
    })
}

export async function createComment(postId:number,name:string,comment:string){
    await prisma.comment.create({
        data:{postId:postId,name:name,text:comment}
    })
}

export async function getTags(){
   return await prisma.tags.findMany({
     select:{
        id:true,
        name:true
     },
     distinct:['name']
   })
}

 
