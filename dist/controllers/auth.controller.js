"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const auth_service_1 = require("../services/auth.service");
const jwt_1 = require("../utils/jwt");
const actions_1 = require("../constants/actions");
const logger_1 = require("../utils/logger");
async function login(req, res) {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ message: 'Email and password are required' });
    const user = await (0, auth_service_1.validateUser)(email, password);
    if (!user)
        return res.status(401).json({ message: 'Invalid email or password' });
    const token = (0, jwt_1.signToken)({
        id: user.id,
        role: user.role,
        baseId: user.baseId
    });
    await (0, logger_1.log)(user.id, actions_1.ActionTypes.LOGIN, 'User Logged In');
    return res.json({
        token,
        user
    });
}
