import { Request, Response } from "express";
import { validateUser } from "../services/auth.service";
import { signToken } from "../utils/jwt";
import { ActionTypes } from "../constants/actions";
import { log } from "../utils/logger";

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

    const user = await validateUser(email, password);

    if(!user) return res.status(401).json({ message: 'Invalid email or password' });

    const token = signToken({
        id: user.id,
        role: user.role,
        baseId: user.baseId
    })

    await log(user.id, ActionTypes.LOGIN, 'User Logged In');

    return res.json({
        token,
        user
    })
}