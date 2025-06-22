import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seedBases() {
    await prisma.base.createMany({
        data: [
            { name: "Alpha Rune" },
            { name: "Beta Rune" },
            { name: "Gamma Rune" },
            { name: "Delta Rune" },
        ]
    })
    console.log("Bases seeded")
}

seedBases().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
});