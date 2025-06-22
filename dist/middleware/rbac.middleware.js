"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = authorizeRoles;
function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
        const user = req.user;
        if (!user)
            return res.status(403).json({ message: 'Access Denied' });
        if (!allowedRoles.includes(user.role))
            return res.status(403).json({ message: 'Insufficient Permissions' });
        next();
    };
}
