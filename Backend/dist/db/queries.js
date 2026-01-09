import { prisma } from './libs/prisma.js';
export async function findPosts() {
    const posts = await prisma.post.findMany();
    return posts;
}
export async function createPost(title, text) {
    await prisma.post.create({
        data: {
            title: title,
            text: text,
            authorId: 1
        }
    });
}
export async function getUsers() {
    const users = await prisma.user.findMany();
    return users;
}
//# sourceMappingURL=queries.js.map