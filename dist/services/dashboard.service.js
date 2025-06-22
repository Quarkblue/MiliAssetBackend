"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardData = getDashboardData;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getDashboardData(params) {
    const { user, baseId, equipmentType, startDate, endDate } = params;
    const resolvedBaseId = user.role === "ADMIN" ? parseInt(baseId || "") || undefined : user.baseId;
    if (!resolvedBaseId)
        throw new Error("BaseId is required");
    const start = new Date(startDate);
    const end = new Date(endDate);
    const eqFilter = equipmentType
        ? { equipmentType: equipmentType }
        : {};
    const commonWhere = {
        baseId: resolvedBaseId,
        asset: eqFilter,
    };
    const [purchases, transferIn, transferOut, assignments, expenditures] = await Promise.all([
        prisma.purchase.aggregate({
            _sum: { quantity: true },
            where: {
                ...commonWhere,
                date: {
                    gte: start,
                    lte: end,
                },
            },
        }),
        prisma.transfer.aggregate({
            _sum: { quantity: true },
            where: {
                toBaseId: resolvedBaseId,
                asset: eqFilter,
                date: {
                    gte: start,
                    lte: end,
                },
            },
        }),
        prisma.transfer.aggregate({
            _sum: { quantity: true },
            where: {
                fromBaseId: resolvedBaseId,
                asset: eqFilter,
                date: {
                    gte: start,
                    lte: end,
                },
            },
        }),
        prisma.assignment.aggregate({
            _sum: {
                quantity: true,
            },
            where: { ...commonWhere, date: { gte: start, lte: end } },
        }),
        prisma.expenditure.aggregate({
            _sum: { quantity: true },
            where: { ...commonWhere, date: { gte: start, lte: end } },
        }),
    ]);
    const [purchasesBefore, transferInBefore, transferOutBefore, assignmentsBefore, expendituresBefore,] = await Promise.all([
        prisma.purchase.aggregate({
            _sum: {
                quantity: true,
            },
            where: {
                ...commonWhere,
                date: {
                    lt: start,
                },
            },
        }),
        prisma.transfer.aggregate({
            _sum: { quantity: true },
            where: {
                toBaseId: resolvedBaseId,
                asset: eqFilter,
                date: {
                    lt: start,
                },
            },
        }),
        prisma.transfer.aggregate({
            _sum: { quantity: true },
            where: {
                fromBaseId: resolvedBaseId,
                asset: eqFilter,
                date: {
                    lt: start,
                },
            },
        }),
        prisma.assignment.aggregate({
            _sum: {
                quantity: true,
            },
            where: {
                ...commonWhere,
                date: {
                    lt: start,
                },
            },
        }),
        prisma.expenditure.aggregate({
            _sum: { quantity: true },
            where: {
                ...commonWhere,
                date: {
                    lt: start,
                },
            },
        }),
    ]);
    const openingBalance = (purchasesBefore._sum.quantity ?? 0) +
        (transferInBefore._sum.quantity ?? 0) -
        (transferOutBefore._sum.quantity ?? 0) -
        (assignmentsBefore._sum.quantity ?? 0) -
        (expendituresBefore._sum.quantity ?? 0);
    const netIn = (purchases._sum.quantity ?? 0) + (transferIn._sum.quantity ?? 0) - (transferOut._sum.quantity ?? 0);
    const assigned = assignments._sum.quantity ?? 0;
    const expended = expenditures._sum.quantity ?? 0;
    const closingBalance = openingBalance + netIn - assigned - expended;
    return {
        openingBalance,
        closingBalance,
        netMovement: {
            purchases: purchases._sum.quantity ?? 0,
            transferIn: transferIn._sum.quantity ?? 0,
            transferOut: transferOut._sum.quantity ?? 0
        },
        assigned,
        expended
    };
}
