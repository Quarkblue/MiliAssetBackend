import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { fetchFilterData } from "../services/filterData.service";

export async function getFilterData(req: AuthRequest, res: Response) {
  try {
    const { filters } = req.query;

    if(!filters || typeof filters !== 'string') return res.status(400).json({message: "filters should be a comma separated string"})

    const user = req.user;
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    const filtersArray = filters.split(",")

    const data = await fetchFilterData(filtersArray, user);
    return res.json({
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
