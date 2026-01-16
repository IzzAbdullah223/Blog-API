import { prisma } from './libs/prisma.js';
export async function getPosts(sortBy) {
    switch (sortBy) {
        case "All":
            return await prisma.post.findMany({
                where: { published: true }
            });
        case "Latest":
            return await prisma.post.findMany({
                where: { published: true },
                orderBy: { publishedAt: "desc" }
            });
        case "Admin":
            return await prisma.post.findMany();
        case "Visual Studio Code":
            return await prisma.post.findMany({
                where: {
                    published: true,
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
export async function publishPost(id) {
    await prisma.post.update({
        where: { id: id },
        data: { published: true }
    });
}
export async function unPublishPost(id) {
    await prisma.post.update({
        where: { id: id },
        data: { published: false }
    });
}
//# sourceMappingURL=queries.js.map