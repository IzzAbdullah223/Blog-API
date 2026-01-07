import { prisma } from './libs/prisma.js';
export async function findPosts() {
    const posts = prisma.post.findMany();
    return posts;
}
export async function findUser(email) {
    return await prisma.user.findUnique({
        where: { email: email }
    });
}
//# sourceMappingURL=queries.js.map