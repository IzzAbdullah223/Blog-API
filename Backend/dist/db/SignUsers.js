import bcrypt from 'bcryptjs';
import { prisma } from './libs/prisma.js';
const email = "x3zoabdullah@gmail.com";
const password = 'ezzden445';
const hashedPassword = await bcrypt.hash(password, 10);
await prisma.user.create({
    data: {
        email: email,
        password: hashedPassword
    }
});
//# sourceMappingURL=SignUsers.js.map