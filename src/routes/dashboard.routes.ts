import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { getDashBoardMetrics } from '../controllers/dashboard.controller';

const router = Router();

router.get('/', authenticateToken, getDashBoardMetrics);

export default router;

