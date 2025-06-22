"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssignment = createAssignment;
exports.getAssignments = getAssignments;
const client_1 = require("@prisma/client");
const roles_1 = require("../constants/roles");
const actions_1 = require("../constants/actions");
const logger_1 = require("../utils/logger");
const prisma = new client_1.PrismaClient();
async function createAssignment(req, res) {
    const { assetId, personnelId, quantity, date } = req.body;
    const user = req.user;
    if (!user)
        return res.status(401).json({ message: "Unauthorized" });
    if (!assetId || !personnelId || !quantity)
        return res.status(400).json({ message: "assetId, personnelId and quantity are required to make an assignment" });
    const asset = await prisma.asset.findUnique({
        where: {
            id: assetId
        }
    });
    if (!asset)
        return res.status(404).json({ message: "Asset not found" });
    const personnel = await prisma.personnel.findUnique({
        where: {
            id: personnelId
        }
    });
    if (!personnel)
        return res.status(404).json({ message: "Personnel not found" });
    if (user.role !== roles_1.Role.ADMIN && user.baseId !== personnel.baseId)
        return res.status(403).json({ message: "You cannot assign to this personnel" });
    const assignment = await prisma.assignment.create({
        data: {
            assetId,
            personnelId,
            baseId: personnel.baseId,
            quantity,
            date: date ? new Date(date).toISOString() : undefined
        }
    });
    await (0, logger_1.log)(user.id, actions_1.ActionTypes.ASSIGN, JSON.stringify(assignment));
    return res.status(201).json({
        message: "Assignment created successfully",
        assignment
    });
}
async function getAssignments(req, res) {
    const { personnelId, equipmentType, baseId, startDate, endDate } = req.query;
    const user = req.user;
    if (!user)
        return res.status(401).json({ message: "Unauthorized" });
    const filters = {
        personnelId: personnelId ? Number(personnelId) : undefined,
        date: {
            gte: startDate ? new Date(startDate).toISOString() : undefined,
            lte: endDate ? new Date(endDate).toISOString() : undefined
        },
        asset: {
            equipmentType: equipmentType ? equipmentType : undefined,
        }
    };
    if (user.role === roles_1.Role.ADMIN) {
        filters.baseId = baseId ? Number(baseId) : undefined;
    }
    else {
        filters.baseId = user.baseId;
    }
    const assignments = await prisma.assignment.findMany({
        where: filters,
        include: {
            asset: true,
            personnel: true,
        },
        orderBy: {
            date: 'desc'
        }
    });
    return res.status(200).json({
        assignments
    });
}
