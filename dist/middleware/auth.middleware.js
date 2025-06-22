"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = authenticateToken;
exports.authorizeRoles = authorizeRoles;
const jwt_1 = require("../utils/jwt");
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return res.status(401).json({ message: 'Authorization token missing' });
    const token = authHeader.split(' ')[1];
    const decoded = (0, jwt_1.verifyToken)(token);
    if (!decoded)
        return res.status(401).json({ message: 'expired token' });
    req.user = decoded;
    next();
}
function authorizeRoles(...roles) {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'You are not authorized enough' });
        }
        next();
    };
}
