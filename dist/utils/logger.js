"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function log(userId, action, details) {
    try {
        await prisma.log.create({
            data: {
                userId,
                action,
                details: typeof details === 'string' ? details : JSON.stringify(details),
            },
        });
    }
    catch (error) {
        console.error('Error logging action:', error);
    }
}
