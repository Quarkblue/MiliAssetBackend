import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { getFilterData } from '../controllers/filterData.controller';

const router = Router();

router.get('/', authenticateToken, getFilterData);

export default router