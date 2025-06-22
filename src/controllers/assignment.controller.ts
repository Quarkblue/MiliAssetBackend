import { Response } from "express";
import { PrismaClient, EquipmentType, Prisma } from "@prisma/client";
import { AuthRequest } from "../middleware/auth.middleware";
import { Role } from "../constants/roles";
import { ActionTypes } from "../constants/actions";
import { log } from "../utils/logger";

const prisma = new PrismaClient();

export async function createAssignment(req: AuthRequest, res: Response) {
    const { assetId, personnelId, quantity, date } = req.body;

    const user = req.user;

    if(!user) return res.status(401).json({ message: "Unauthorized" })

    if(!assetId || !personnelId || !quantity ) return res.status(400).json({ message: "assetId, personnelId and quantity are required to make an assignment" });

    const asset = await prisma.asset.findUnique({
        where: {
            id: assetId
        }
    })

    if(!asset) return res.status(404).json({ message: "Asset not found" });

    const personnel = await prisma.personnel.findUnique({
        where: {
            id: personnelId
        }
    })

    if(!personnel) return res.status(404).json({ message: "Personnel not found" });

    if(user.role !== Role.ADMIN && user.baseId !== personnel.baseId) return res.status(403).json({ message: "You cannot assign to this personnel" })

    const assignment = await prisma.assignment.create({
        data: {
            assetId,
            personnelId,
            baseId: personnel.baseId,
            quantity,
            date: date ? new Date(date).toISOString() : undefined
        }
    })

    await log(user.id, ActionTypes.ASSIGN, JSON.stringify(assignment))

    return res.status(201).json({
        message: "Assignment created successfully",
        assignment
    });
}


export async function getAssignments(req: AuthRequest, res: Response) {
    const { personnelId, equipmentType, baseId, startDate, endDate } = req.query;

    const user = req.user;

    if(!user) return res.status(401).json({ message: "Unauthorized" });

    const filters: Prisma.AssignmentWhereInput = {
        personnelId: personnelId ? Number(personnelId) : undefined,
        date: {
            gte: startDate ? new Date(startDate as string).toISOString() : undefined,
            lte: endDate ? new Date(endDate as string).toISOString() : undefined
        },
        asset: {
            equipmentType: equipmentType ? (equipmentType as EquipmentType) : undefined,
        }
    }

    if(user.role === Role.ADMIN){
        filters.baseId = baseId ? Number(baseId) : undefined;
    }else {
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
    })

    return res.status(200).json({
        assignments
    });

}
