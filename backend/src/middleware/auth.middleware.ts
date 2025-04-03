import { Request, Response, NextFunction } from 'express';
import {getUser} from "../service/users.service";

declare global {
    namespace Express {
        interface Request {
             userId?: string
        }
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const user = await getUser(token);
        req.userId = user._id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
}