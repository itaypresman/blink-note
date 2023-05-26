import { Request, Response, NextFunction } from 'express';
import ApiError from './ApiError';
import LogService from '../../services/log.service';


const logService: LogService = new LogService();
const errorMiddleware = async (err: Error | ApiError, req: Request, res: Response, next: NextFunction): Promise<any> => {
    console.error(err.message);


    if (err instanceof ApiError) {
        await logService.addLog(err.message, 'error', err.data);

        return res
            .status(err.status)
            .json({ error: true, msg: err.message, data: err.data });
    }

    await logService.addLog(err.message);
    res.status(500).json({ error: true, msg: 'Internal server error' });
};

export default errorMiddleware;
