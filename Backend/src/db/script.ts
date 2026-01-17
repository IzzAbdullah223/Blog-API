import {prisma} from './libs/prisma.js'



await prisma.tags.create({
   data:{name: "Mindset",postId:13}
})