import { Response } from "express";
import { PrismaClient, EquipmentType, Prisma } from "@prisma/client";
import { AuthRequest } from "../middleware/auth.middleware";
import { Role } from "../constants/roles";
import { ActionTypes } from "../constants/actions";
import { log } from "../utils/logger";

const prisma = new PrismaClient();

export async function createTransfer(req: AuthRequest, res: Response) {
  const { assetId, fromBaseId, toBaseId, quantity, date } = req.body;

  const user = req.user;

  if (!user) return res.status(401).json({ message: "Unauthorized" });

  if (!assetId || !fromBaseId || !toBaseId || !quantity)
    return res.status(400).json({ message: "Missing required fields." });

  if (user.role !== Role.ADMIN && user.baseId !== fromBaseId)
    return res.status(403).json({
      message: `You can only transfer from your base: ${user.baseId}`,
    });

  const asset = await prisma.asset.findUnique({
    where: {
      id: assetId,
    },
  });

  if (!asset) return res.status(404).json({ message: "Asset not found" });

  if (user.role === Role.LOGISTICS) {
    const allowedTypes: EquipmentType[] = [
      EquipmentType.MEDICAL,
      EquipmentType.COMMUNICATION,
      EquipmentType.OTHER,
    ];
    if (!allowedTypes.includes(asset.equipmentType))
      return res.status(403).json({
        message:
          "Logistics officer can only transfer MEDICAL, COMMUNICATION or OTHER equipment.",
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
  })
  
  await log(user.id, ActionTypes.TRANSFER, JSON.stringify(transfer))

  return res.status(201).json({
    message: "Transfer created successfully",
    transfer
  })

}


export async function getTransfers(req: AuthRequest, res: Response){
    const { fromBaseId, toBaseId, assetId, equipmentType, startDate, endDate } = req.query;

    const user = req.user;

    if(!user) return res.status(401).json({ message: "Unauthorized" })

    const filters: Prisma.TransferWhereInput = {};

    if(user.role !== Role.ADMIN){
        filters.OR = [
            { fromBaseId: user.baseId },
            { toBaseId: user.baseId }
        ]
    }

    if(fromBaseId) filters.fromBaseId = parseInt(fromBaseId as string);
    if(toBaseId) filters.toBaseId = parseInt(toBaseId as string);
    if(assetId) filters.assetId = parseInt(assetId as string);
    if(equipmentType) filters.asset = { equipmentType: equipmentType as EquipmentType };

    if(startDate || endDate) {
        filters.date = {};
        if(startDate) filters.date.gte = new Date(startDate as string);
        if(endDate) filters.date.lte = new Date(endDate as string);
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
    })

    return res.json({
        transfers
    })

}