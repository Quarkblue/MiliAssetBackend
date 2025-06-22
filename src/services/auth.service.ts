import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

export async function validateUser(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: { email}
    })

    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) return null;

    const { password: _, ...safeUser } = user;
    return safeUser;
}