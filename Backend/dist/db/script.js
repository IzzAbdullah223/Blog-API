import { prisma } from './libs/prisma.js';
await prisma.tags.create({
    data: { name: "Visual Studio Code", postId: 14 }
});
await prisma.tags.create({
    data: { name: "Tools", postId: 14 }
});
//# sourceMappingURL=script.js.map