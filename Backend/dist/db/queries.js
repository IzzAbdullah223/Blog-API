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
        default: {
            return prisma.post.findMany({
                where: {
                    published: true,
                    OR: [
                        {
                            title: {
                                contains: sortBy,
                                mode: "insensitive"
                            }
                        },
                        {
                            tag: {
                                some: {
                                    name: {
                                        contains: sortBy,
                                        mode: "insensitive"
                                    }
                                }
                            }
                        }
                    ]
                },
                include: { tag: true, comment: true }
            });
        }
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
                connectOrCreate: tags.map(tagName => ({
                    where: { name: tagName },
                    create: { name: tagName }
                }))
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
export async function getRandomPost() {
    const count = await prisma.post.count({
        where: { published: true }
    });
    const randomIndex = Math.floor(Math.random() * count);
    const post = await prisma.post.findFirst({
        where: { published: true },
        skip: randomIndex,
        include: { tag: true, comment: true }
    });
    return post;
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
export async function getTags() {
    return await prisma.tag.findMany({
        select: {
            name: true,
            id: true
        }
    });
}
//# sourceMappingURL=queries.js.map