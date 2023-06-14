import LogService from '../services/log.service';
import * as Helper from '../utils/Helper';
import { NextFunction, Request } from 'express';


const logService: LogService = new LogService();

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { headers, params, query, originalUrl, method } = req;
    const ip: string | undefined = Helper.getIp(req);
    const userAgent: string = headers.userAgent;
    const device: string = Helper.getDevice(headers.userAgent);

    console.log('-------------------------');
    console.log(`${method}: ${originalUrl}`);
    console.log('PARAMS:', params);
    console.log('QUERY:', query);
    console.log('-------------------------');

    // await logService.addLog(`${method}: ${originalUrl}`, 'info', [{ params, query, ip, userAgent, device }]);

    next();
};
