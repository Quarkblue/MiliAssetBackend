import { PrismaClient, Role } from "@prisma/client";
import { ActionTypes } from "constants/actions";

const prisma = new PrismaClient();

export async function log(userId: number, action: ActionTypes, details: any) {
    try {
        await prisma.log.create({
            data: {
                userId,
                action,
                details: typeof details === 'string' ? details:  JSON.stringify(details),
            },
        })
    } catch (error) {
        console.error('Error logging action:', error)
    }
}