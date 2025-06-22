"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPurchase = createPurchase;
exports.getPurchases = getPurchases;
const client_1 = require("@prisma/client");
const roles_1 = require("../constants/roles");
const actions_1 = require("../constants/actions");
const logger_1 = require("../utils/logger");
const prisma = new client_1.PrismaClient();
async function createPurchase(req, res) {
    const { assetId, baseId, quantity, date } = req.body;
    const user = req.user;
    if (!user)
        return res.status(401).json({ message: "Unauthorized" });
    if (!assetId || !quantity)
        return res.status(400).json({ message: "assetId and quantity are required to make a purchase" });
    let resolvedBaseId;
    if (user.role === roles_1.Role.ADMIN) {
        if (!baseId)
            return res.status(400).json({ message: "baseId is missing" });
        resolvedBaseId = baseId;
    }
    else {
        if (baseId) {
            if (user.baseId !== baseId)
                return res.status(403).json({ message: "You are not authorized for making purchases in this base." });
        }
        resolvedBaseId = user.baseId;
    }
    const asset = await prisma.asset.findUnique({
        where: {
            id: assetId
        }
    });
    if (!asset)
        return res.status(404).json({ message: "asset not found" });
    if (user.role === roles_1.Role.LOGISTICS) {
        const allowedTypes = [
            client_1.EquipmentType.MEDICAL,
            client_1.EquipmentType.COMMUNICATION,
            client_1.EquipmentType.OTHER,
        ];
        if (!allowedTypes.includes(asset.equipmentType)) {
            return res.status(403).json({
                message: 'Logistics officer can only purchase MEDICAL, COMMUNICATION or OTHER equipment.'
            });
        }
    }
    const purchase = await prisma.purchase.create({
        data: {
            assetId,
            baseId,
            quantity,
            date: date ? new Date(date).toISOString() : undefined
        }
    });
    await (0, logger_1.log)(user.id, actions_1.ActionTypes.PURCHASE, JSON.stringify(purchase));
    return res.status(201).json({
        message: "Purchase created successfully",
        purchase
    });
}
async function getPurchases(req, res) {
    const { startDate, endDate, baseId, equipmentType } = req.query;
    const user = req.user;
    if (!user)
        return res.status(401).json({ message: "Unauthorized" });
    let resolvedBaseId = undefined;
    if (user.role === roles_1.Role.ADMIN) {
        resolvedBaseId = parseInt(baseId);
    }
    else {
        if (baseId) {
            if (user.baseId !== parseInt(baseId))
                return res.status(403).json({ message: "You are not authorized to view purchases for this base." });
            resolvedBaseId = parseInt(baseId);
        }
        resolvedBaseId = user.baseId;
    }
    const filters = {
        baseId: resolvedBaseId
    };
    if (startDate && endDate) {
        filters.date = {};
        if (startDate)
            filters.date.gte = new Date(startDate);
        if (endDate)
            filters.date.lte = new Date(endDate);
    }
    if (equipmentType) {
        filters.asset = {
            equipmentType: equipmentType
        };
    }
    const purchases = await prisma.purchase.findMany({
        where: filters,
        include: {
            asset: true,
            base: true
        },
        orderBy: {
            date: 'desc'
        }
    });
    return res.json({
        purchases
    });
}
