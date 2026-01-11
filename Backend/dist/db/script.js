import { prisma } from './libs/prisma.js';
await prisma.tags.update({
    where: { id: 1 },
    data: { name: "Visual Studio Code" }
});
await prisma.tags.update({
    where: { id: 2 },
    data: { name: "Tools" }
});
await prisma.tags.delete({
    where: { id: 3 }
});
//# sourceMappingURL=script.js.map