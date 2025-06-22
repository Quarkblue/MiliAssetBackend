import { Response } from "express";
import { PrismaClient, EquipmentType, Prisma } from "@prisma/client";
import { AuthRequest } from "../middleware/auth.middleware";
import { Role } from "../constants/roles";
import { ActionTypes } from "../constants/actions";
import { log } from "../utils/logger";

const prisma = new PrismaClient();

export async function createPurchase(req: AuthRequest, res: Response) {
    const { assetId, baseId, quantity, date } = req.body;

    const user = req.user;

    if(!user) return res.status(401).json({ message: "Unauthorized" })

    if(!assetId || !quantity) return res.status(400).json({ message: "assetId and quantity are required to make a purchase" })

    let resolvedBaseId: number;
    if(user.role === Role.ADMIN){
        if(!baseId) return res.status(400).json({ message: "baseId is missing" })
        resolvedBaseId = baseId;
    }else {
        if(baseId){
            if (user.baseId !== baseId) return res.status(403).json({message: "You are not authorized for making purchases in this base."})
        }
        resolvedBaseId = user.baseId;
    }

    const asset = await  prisma.asset.findUnique({
        where: {
            id: assetId
        }
    })

    if(!asset) return res.status(404).json({ message: "asset not found" })
    
    if(user.role === Role.LOGISTICS) {
        const allowedTypes: EquipmentType[] = [
            EquipmentType.MEDICAL,
            EquipmentType.COMMUNICATION,
            EquipmentType.OTHER,
        ]

        if(!allowedTypes.includes(asset.equipmentType)){
            return res.status(403).json({
                message: 'Logistics officer can only purchase MEDICAL, COMMUNICATION or OTHER equipment.'
            })
        }
    }

    const purchase = await prisma.purchase.create({
        data: {
            assetId,
            baseId,
            quantity,
            date: date ? new Date(date).toISOString() : undefined
        }
    })

    await log(user.id, ActionTypes.PURCHASE, JSON.stringify(purchase))

    return res.status(201).json({
        message: "Purchase created successfully",
        purchase
    })

}

export async function getPurchases(req: AuthRequest, res: Response){
    const { startDate, endDate, baseId, equipmentType } = req.query;
    const user = req.user;

    if(!user) return res.status(401).json({ message: "Unauthorized" })

    let resolvedBaseId: number | undefined = undefined;

    if(user.role === Role.ADMIN){
        resolvedBaseId = parseInt(baseId as string);
    }else {
        if(baseId){
            if (user.baseId !== parseInt(baseId as string)) return res.status(403).json({ message: "You are not authorized to view purchases for this base." });
            resolvedBaseId = parseInt(baseId as string);
        }
        resolvedBaseId = user.baseId;
    }

    const filters: Prisma.PurchaseWhereInput = {
        baseId: resolvedBaseId
    }

    if(startDate && endDate) {
        filters.date = {}
        if(startDate) filters.date.gte = new Date(startDate as string);
        if(endDate) filters.date.lte = new Date(endDate as string);
    }

    if(equipmentType) {
        filters.asset = {
            equipmentType: equipmentType as EquipmentType
        }
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
    })

    return res.json({
        purchases
    })
}
