"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashBoardMetrics = getDashBoardMetrics;
const client_1 = require("@prisma/client");
const dashboard_service_1 = require("../services/dashboard.service");
const prisma = new client_1.PrismaClient();
async function getDashBoardMetrics(req, res) {
    const { baseId, equipmentType, startDate, endDate } = req.query;
    if (!req.user)
        return res.status(401).json({ message: "Unauthorized" });
    const user = req.user;
    if (user.role === "ADMIN" && !baseId) {
        return res.status(400).json({
            message: "BaseId is missing",
        });
    }
    if (!startDate || !endDate) {
        return res.status(400).json({
            message: "date range is required",
        });
    }
    try {
        const data = await (0, dashboard_service_1.getDashboardData)({
            user,
            baseId: baseId,
            equipmentType: equipmentType,
            startDate: startDate,
            endDate: endDate,
        });
        return res.json({
            data,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error fetching data for dashboard",
        });
    }
}
