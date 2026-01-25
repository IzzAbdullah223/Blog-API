import bcrypt from 'bcryptjs';
import { prisma } from './libs/prisma.js';
async function createUser() {
    const email = 'x3zoabdullah@gmail.com';
    const password = 'ezzden445';
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            email: email,
            password: hashedPassword
        }
    });
    console.log('user created', user);
}
createUser();
//# sourceMappingURL=createProductionUser.js.map