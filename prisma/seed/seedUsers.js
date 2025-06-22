"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function seedUsers() {
    const defaultPassword = 'Password@123';
    const passwordHash = await bcrypt_1.default.hash(defaultPassword, 10);
    const defaultBases = [
        'Alpha Rune',
        'Beta Rune',
        'Gamma Rune',
        'Delta Rune'
    ];
    const bases = await prisma.base.findMany({
        where: {
            name: { in: defaultBases }
        }
    });
    if (bases.length !== defaultBases.length) {
        console.error("default bases not found, seed bases first");
        return;
    }
    await prisma.user.createMany({
        data: [
            {
                email: 'admin@kristalball.com',
                password: passwordHash,
                role: client_1.Role.ADMIN,
                baseId: bases[0].id
            },
            {
                email: 'alphaCommander@military.com',
                password: passwordHash,
                role: client_1.Role.COMMANDER,
                baseId: bases[0].id
            },
            {
                email: 'betaCommander@military.com',
                password: passwordHash,
                role: client_1.Role.COMMANDER,
                baseId: bases[1].id
            },
            {
                email: 'gammaCommander@military.com',
                password: passwordHash,
                role: client_1.Role.COMMANDER,
                baseId: bases[2].id
            },
            {
                email: 'deltaCommander@military.com',
                password: passwordHash,
                role: client_1.Role.COMMANDER,
                baseId: bases[3].id
            },
            {
                email: 'alphaLogistics@military.com',
                password: passwordHash,
                role: client_1.Role.LOGISTICS,
                baseId: bases[0].id
            },
            {
                email: 'betaLogistics@military.com',
                password: passwordHash,
                role: client_1.Role.LOGISTICS,
                baseId: bases[1].id
            },
            {
                email: 'gammaLogistics@military.com',
                password: passwordHash,
                role: client_1.Role.LOGISTICS,
                baseId: bases[2].id
            },
            {
                email: 'deltaLogistics@military.com',
                password: passwordHash,
                role: client_1.Role.LOGISTICS,
                baseId: bases[3].id
            },
        ]
    });
    console.log("Users seeded");
}
seedUsers().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
