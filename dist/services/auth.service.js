"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = validateUser;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function validateUser(email, password) {
    const user = await prisma.user.findUnique({
        where: { email }
    });
    if (!user)
        return null;
    const isValid = await bcrypt_1.default.compare(password, user.password);
    if (!isValid)
        return null;
    const { password: _, ...safeUser } = user;
    return safeUser;
}
