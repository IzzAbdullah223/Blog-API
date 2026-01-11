import { prisma } from './libs/prisma.js';
export async function getPosts(sortBy) {
    console.log(sortBy);
    switch (sortBy) {
        case "All":
            return await prisma.post.findMany();
        case "Latest":
            return await prisma.post.findMany({
                orderBy: { publishedAt: "desc" }
            });
        case "Visual Studio Code":
            return await prisma.post.findMany({
                where: {
                    tag: {
                        some: {
                            name: sortBy
                        }
                    }
                }
            });
    }
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