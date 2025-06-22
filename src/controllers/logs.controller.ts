import { Response } from "express";
import { PrismaClient, EquipmentType, Prisma } from "@prisma/client";
import { AuthRequest } from "../middleware/auth.middleware";
import { Role } from "../constants/roles";
import { ActionTypes } from "../constants/actions";
import { log } from "../utils/logger";

const prisma = new PrismaClient();

export async function getLogs(req: AuthRequest, res: Response) {
  const user = req.user;

  if (!user) return res.status(401).json({ message: "Unauthorized" });

  if (user.role !== Role.ADMIN) {
    return res.status(403).json({
        message: `Access denied. Only admins can view logs.`,
      });
  }

  const logs = await prisma.log.findMany();

  if (!logs) return res.status(404).json({ message: "Logs not found" });

  return res.status(201).json({
    message: "Logs retrieved successfully",
    logs
  })

}