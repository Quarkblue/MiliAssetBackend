import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/auth.middleware";
import { Role } from "../constants/roles";
import { createTransfer, getTransfers } from "../controllers/transfer.controller";

const router = Router();

router.post('/',
    authenticateToken,
    authorizeRoles(Role.ADMIN, Role.COMMANDER, Role.LOGISTICS),
    createTransfer
)

router.get('/',
    authenticateToken,
    getTransfers
)

export default router;