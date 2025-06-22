import { Router } from 'express';
import { authenticateToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/auth.middleware";
import { Role } from "../constants/roles";
import { createAssignment, getAssignments } from '../controllers/assignment.controller';

const router = Router();

router.post('/',
    authenticateToken,
    authorizeRoles(Role.ADMIN, Role.COMMANDER),
    createAssignment
)

router.get('/',
    authenticateToken,
    authorizeRoles(Role.ADMIN, Role.COMMANDER),
    getAssignments
);

export default router;