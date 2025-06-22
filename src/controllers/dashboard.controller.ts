import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AuthRequest } from "../middleware/auth.middleware";
import { getDashboardData } from "../services/dashboard.service";

const prisma = new PrismaClient();

export async function getDashBoardMetrics(req: AuthRequest, res: Response) {
  const { baseId, equipmentType, startDate, endDate } = req.query;

  if (!req.user) return res.status(401).json({ message: "Unauthorized" });

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
    const data = await getDashboardData({
      user,
      baseId: baseId as string,
      equipmentType: equipmentType as string,
      startDate: startDate as string,
      endDate: endDate as string,
    });

    return res.json({
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error fetching data for dashboard",
    });
  }
}
