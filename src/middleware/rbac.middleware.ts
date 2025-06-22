import { Request, Response, NextFunction } from 'express';
import { Role } from '../constants/roles'
import { AuthRequest } from './auth.middleware';

export function authorizeRoles(...allowedRoles: Role[]){
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        const user = req.user;

        if(!user) return res.status(403).json({ message: 'Access Denied' })

        if(!allowedRoles.includes(user.role as Role)) return res.status(403).json({ message: 'Insufficient Permissions' })

        next();
    }
}

