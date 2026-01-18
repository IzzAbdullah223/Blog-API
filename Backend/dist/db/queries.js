import { prisma } from './libs/prisma.js';
export async function getPosts(sortBy) {
    switch (sortBy) {
        case "All":
            return await prisma.post.findMany({
                where: { published: true },
                include: { tag: true, comment: true }
            });
        case "Latest":
            return await prisma.post.findMany({
                where: { published: true },
                orderBy: { publishedAt: "desc" },
                include: { tag: true, comment: true }
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
                },
                include: { tag: true, comment: true }
            });
    }
}
export async function createPost(title, text, readTime, tags) {
    await prisma.post.create({
        data: {
            title: title,
            text: text,
            authorId: 1,
            readTime: readTime,
            tag: {
                create: tags.map(tagName => ({ name: tagName }))
            }
        }
    });
}
export async function getPost(id) {
    return await prisma.post.findUnique({
        where: { id: id },
        include: { tag: true, comment: true }
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
export async function createComment(postId, name, comment) {
    await prisma.comment.create({
        data: { postId: postId, name: name, text: comment }
    });
}
//# sourceMappingURL=queries.js.map