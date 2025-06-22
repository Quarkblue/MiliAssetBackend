import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/auth.middleware";
import { createPurchase, getPurchases } from '../controllers/purchases.controller';
import { Role } from "../constants/roles";


const router = Router();

router.post('/', 
    authenticateToken,
    authorizeRoles(Role.ADMIN, Role.COMMANDER, Role.LOGISTICS),
    createPurchase
);

router.get('/', authenticateToken, getPurchases);

export default router;