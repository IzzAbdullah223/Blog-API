import { prisma } from './libs/prisma.js';
export async function getPosts(sortBy) {
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
export async function getPost(id) {
    console.log(id);
    return await prisma.post.findUnique({
        where: { id: id },
        include: { tag: true }
    });
}
export async function deletePost(id) {
    await prisma.post.delete({
        where: { id: id }
    });
}
//# sourceMappingURL=queries.js.map