import { Request, Response, NextFunction } from 'express';
import ApiError from './ApiError';


const errorMiddleware = (err: Error | ApiError, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);

    if (err instanceof ApiError) {
        return res
            .status(err.status)
            .json({ error: true, msg: err.message, data: err.data });
    }

    res.status(500).json({ error: true, msg: 'Internal server error' });
};

export default errorMiddleware;
