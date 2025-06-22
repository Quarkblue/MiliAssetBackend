import {Request, Response, NextFunction} from 'express';
import { verifyToken } from '../utils/jwt';
import { Role } from '@prisma/client';

export interface AuthRequest extends Request {
    user?: {
        id: number;
        role: Role;
        baseId: number;
    }
}

export function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ message: 'Authorization token missing' })

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if(!decoded) return res.status(401).json({message: 'expired token'})

    req.user = decoded;
    next();
}

export function authorizeRoles(...roles: Role[]) {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if(!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({message: 'You are not authorized enough'})
        }
        next();
    }
}