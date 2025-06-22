"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFilterData = fetchFilterData;
const client_1 = require("@prisma/client");
const client_2 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function fetchFilterData(filters, user) {
    const result = {};
    await Promise.all(filters.map(async (filter) => {
        switch (filter) {
            case "bases":
                if (user.role === client_1.Role.ADMIN) {
                    result.bases = await prisma.base.findMany({
                        select: {
                            id: true,
                            name: true,
                        },
                    });
                }
                else {
                    const base = await prisma.base.findUnique({
                        where: {
                            id: user.baseId,
                        },
                        select: {
                            id: true,
                            name: true,
                        },
                    });
                    result.bases = base ? [base] : [];
                }
                break;
            case "equipmentTypes":
                if (user.role === client_1.Role.LOGISTICS) {
                    result.equipmentTypes = [
                        client_2.EquipmentType.MEDICAL,
                        client_2.EquipmentType.COMMUNICATION,
                        client_2.EquipmentType.OTHER,
                    ];
                }
                else {
                    result.equipmentTypes = Object.values(client_2.EquipmentType);
                }
                break;
            case "assets":
                result.assets = await prisma.asset.findMany({
                    where: user.role === client_1.Role.ADMIN
                        ? {}
                        : {
                            purchases: {
                                some: {
                                    baseId: user.baseId,
                                },
                            },
                        },
                    select: {
                        id: true,
                        name: true,
                        equipmentType: true,
                    },
                });
                break;
            case "personnel":
                result.personnel = await prisma.personnel.findMany({
                    where: user.role === client_1.Role.ADMIN
                        ? {}
                        : {
                            baseId: user.baseId,
                        },
                    select: {
                        id: true,
                        name: true,
                        baseId: true,
                    },
                });
                break;
        }
    }));
    return result;
}
