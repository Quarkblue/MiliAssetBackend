import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/auth.middleware";
import { Role } from "../constants/roles";
import {getLogs} from "../controllers/logs.controller";

const router = Router();

router.get('/',
    authenticateToken,
    authorizeRoles(Role.ADMIN),
    getLogs
)
export default router;