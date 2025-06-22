"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedBases() {
    await prisma.base.createMany({
        data: [
            { name: "Alpha Rune" },
            { name: "Beta Rune" },
            { name: "Gamma Rune" },
            { name: "Delta Rune" },
        ]
    });
    console.log("Bases seeded");
}
seedBases().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
