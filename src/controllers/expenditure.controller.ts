import { Response } from "express";
import { PrismaClient, EquipmentType, Prisma } from "@prisma/client";
import { AuthRequest } from "../middleware/auth.middleware";
import { Role } from "../constants/roles";
import { ActionTypes } from "../constants/actions";
import { log } from "../utils/logger";

const prisma = new PrismaClient();

export async function createExpenditure(req: AuthRequest, res: Response) {
  const { assetId, personnelId, quantity, date } = req.body;

  const user = req.user;

  if (!user) return res.status(401).json({ error: "Unauthorized" });

  if (!assetId || !personnelId || !quantity)
    return res.status(400).json({ error: "Missing required fields" });

  if (quantity <= 0)
    return res
      .status(400)
      .json({ error: "quantity must be greater than zero" });

  const asset = await prisma.asset.findUnique({
    where: { id: assetId },
  });

  if (!asset) return res.status(404).json({ error: "Asset not found" });

  const personnel = await prisma.personnel.findUnique({
    where: {
      id: personnelId,
    },
  });

  if (!personnel) return res.status(404).json({ error: "Personnel not found" });

  const assigned = await prisma.assignment.aggregate({
    _sum: {
      quantity: true,
    },
    where: {
      assetId,
      personnelId,
    },
  });

  const expended = await prisma.expenditure.aggregate({
    _sum: {
      quantity: true,
    },
    where: {
      assetId,
      personnelId,
    },
  });

  const available =
    (assigned._sum.quantity || 0) - (expended._sum.quantity || 0);

  if (quantity > available)
    return res.status(400).json({
      message: `Insufficient quantity, available: ${available}`,
    });

  const expenditure = await prisma.expenditure.create({
    data: {
      assetId,
      personnelId,
      quantity,
      date: date ? new Date(date) : new Date(),
      baseId: personnel.baseId,
    },
  });

  await log(user.id, ActionTypes.EXPEND, JSON.stringify(expenditure));

  return res.status(201).json({
    message: "Expenditure created successfully",
    expenditure,
  });
}

export async function getExpenditures(req: AuthRequest, res: Response) {
  const { assetId, personnelId, baseId, startDate, endDate } = req.query;

  const user = req.user;

  if (!user) return res.status(401).json({ error: "Unauthorized" });

  const filters: Prisma.ExpenditureWhereInput = {
    assetId: assetId ? parseInt(assetId as string) : undefined,
    personnelId: personnelId ? parseInt(personnelId as string) : undefined,
    date: {
      gte: startDate ? new Date(startDate as string) : undefined,
      lte: endDate ? new Date(endDate as string) : undefined,
    },
  };

  if (user.role === Role.ADMIN) {
    filters.baseId = baseId ? Number(baseId) : undefined;
  } else {
    filters.baseId = user.baseId;
  }

  const expenditures = await prisma.expenditure.findMany({
    where: filters,
    include: {
      asset: true,
      personnel: true,
      base: true,
    },
    orderBy: {
      date: "desc",
    },
  });

  return res.status(200).json({
    expenditures,
  });
}
