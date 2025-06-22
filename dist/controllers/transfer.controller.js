"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransfer = createTransfer;
exports.getTransfers = getTransfers;
const client_1 = require("@prisma/client");
const roles_1 = require("../constants/roles");
const actions_1 = require("../constants/actions");
const logger_1 = require("../utils/logger");
const prisma = new client_1.PrismaClient();
async function createTransfer(req, res) {
    const { assetId, fromBaseId, toBaseId, quantity, date } = req.body;
    const user = req.user;
    if (!user)
        return res.status(401).json({ message: "Unauthorized" });
    if (!assetId || !fromBaseId || !toBaseId || !quantity)
        return res.status(400).json({ message: "Missing required fields." });
    if (user.role !== roles_1.Role.ADMIN && user.baseId !== fromBaseId)
        return res.status(403).json({
            message: `You can only transfer from your base: ${user.baseId}`,
        });
    const asset = await prisma.asset.findUnique({
        where: {
            id: assetId,
        },
    });
    if (!asset)
        return res.status(404).json({ message: "Asset not found" });
    if (user.role === roles_1.Role.LOGISTICS) {
        const allowedTypes = [
            client_1.EquipmentType.MEDICAL,
            client_1.EquipmentType.COMMUNICATION,
            client_1.EquipmentType.OTHER,
        ];
        if (!allowedTypes.includes(asset.equipmentType))
            return res.status(403).json({
                message: "Logistics officer can only transfer MEDICAL, COMMUNICATION or OTHER equipment.",
            });
    }
    const transfer = await prisma.transfer.create({
        data: {
            assetId,
            fromBaseId,
            toBaseId,
            quantity,
            date: date ? new Date(date).toISOString() : undefined,
        }
    });
    await (0, logger_1.log)(user.id, actions_1.ActionTypes.TRANSFER, JSON.stringify(transfer));
    return res.status(201).json({
        message: "Transfer created successfully",
        transfer
    });
}
async function getTransfers(req, res) {
    const { fromBaseId, toBaseId, assetId, equipmentType, startDate, endDate } = req.query;
    const user = req.user;
    if (!user)
        return res.status(401).json({ message: "Unauthorized" });
    const filters = {};
    if (user.role !== roles_1.Role.ADMIN) {
        filters.OR = [
            { fromBaseId: user.baseId },
            { toBaseId: user.baseId }
        ];
    }
    if (fromBaseId)
        filters.fromBaseId = parseInt(fromBaseId);
    if (toBaseId)
        filters.toBaseId = parseInt(toBaseId);
    if (assetId)
        filters.assetId = parseInt(assetId);
    if (equipmentType)
        filters.asset = { equipmentType: equipmentType };
    if (startDate || endDate) {
        filters.date = {};
        if (startDate)
            filters.date.gte = new Date(startDate);
        if (endDate)
            filters.date.lte = new Date(endDate);
    }
    const transfers = await prisma.transfer.findMany({
        where: filters,
        include: {
            asset: true,
            fromBase: true,
            toBase: true,
        },
        orderBy: {
            date: 'desc'
        }
    });
    return res.json({
        transfers
    });
}
