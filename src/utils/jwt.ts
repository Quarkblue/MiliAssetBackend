import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default'
const JWT_EXPIRY = '5h'

export function signToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
}

export function verifyToken(token: string): any {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}