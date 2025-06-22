import { PrismaClient, Role } from "@prisma/client";
import { EquipmentType } from "@prisma/client";

type AuthUser = {
  id: number;
  role: Role;
  baseId: number;
};

const prisma = new PrismaClient();

export async function fetchFilterData(filters: string[], user: AuthUser) {
  const result: Record<string, any> = {};

  await Promise.all(
    filters.map(async (filter) => {
      switch (filter) {
        case "bases":
          if (user.role === Role.ADMIN) {
            result.bases = await prisma.base.findMany({
              select: {
                id: true,
                name: true,
              },
            });
          } else {
            const base = await prisma.base.findUnique({
              where: {
                id: user.baseId,
              },
              select: {
                id: true,
                name: true,
              },
            });
            result.bases = base ? [base] : [];
          }
          break;

        case "equipmentTypes":
          if (user.role === Role.LOGISTICS) {
            result.equipmentTypes = [
              EquipmentType.MEDICAL,
              EquipmentType.COMMUNICATION,
              EquipmentType.OTHER,
            ];
          } else {
            result.equipmentTypes = Object.values(EquipmentType);
          }
          break;

        case "assets":
          result.assets = await prisma.asset.findMany({
            where:
              user.role === Role.ADMIN
                ? {}
                : {
                    purchases: {
                      some: {
                        baseId: user.baseId,
                      },
                    },
                  },
            select: {
              id: true,
              name: true,
              equipmentType: true,
            },
          });
          break;

        case "personnel":
          result.personnel = await prisma.personnel.findMany({
            where:
              user.role === Role.ADMIN
                ? {}
                : {
                    baseId: user.baseId,
                  },
            select: {
              id: true,
              name: true,
              baseId: true,
            },
          });
          break;
      }
    })
  );

  return result;

}
