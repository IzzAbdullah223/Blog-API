import { prisma } from "./libs/prisma.js";
await prisma.post.update({
    where: { id: 1 },
    data: { publishedAt: new Date("2026-01-18T00:00:00Z") }
});
await prisma.post.update({
    where: { id: 2 },
    data: { publishedAt: new Date("2026-01-19T00:00:00Z") }
});
await prisma.post.update({
    where: { id: 4 },
    data: { publishedAt: new Date("2026-01-20T00:00:00Z") }
});
await prisma.post.update({
    where: { id: 6 },
    data: { publishedAt: new Date("2026-01-22T00:00:00Z") }
});
await prisma.post.update({
    where: { id: 7 },
    data: { publishedAt: new Date("2026-01-23T00:00:00Z") }
});
await prisma.post.update({
    where: { id: 8 },
    data: { publishedAt: new Date("2026-01-23T00:00:00Z") }
});
await prisma.post.update({
    where: { id: 9 },
    data: { publishedAt: new Date("2026-01-25T00:00:00Z") }
});
await prisma.post.update({
    where: { id: 10 },
    data: { publishedAt: new Date("2026-01-25T00:00:00Z") }
});
await prisma.post.update({
    where: { id: 11 },
    data: { publishedAt: new Date("2026-01-26T00:00:00Z") }
});
await prisma.post.update({
    where: { id: 12 },
    data: { publishedAt: new Date("2026-01-27T00:00:00Z") }
});
await prisma.post.update({
    where: { id: 13 },
    data: { publishedAt: new Date("2026-01-27T00:00:00Z") }
});
//# sourceMappingURL=updateDate.js.map