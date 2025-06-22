import { Router } from 'express';
import { authenticateToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/auth.middleware";
import { Role } from "../constants/roles";
import { createExpenditure, getExpenditures } from '../controllers/expenditure.controller';

const router = Router();

router.post('/',
    authenticateToken,
    authorizeRoles(Role.ADMIN, Role.COMMANDER),
    createExpenditure
);

router.get('/',
    authenticateToken,
    authorizeRoles(Role.ADMIN, Role.COMMANDER, Role.LOGISTICS),
    getExpenditures
)

export default router;