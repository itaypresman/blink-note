import LogService from '../services/log.service';
import * as Helper from '../utils/Helper';
import { NextFunction, Request } from 'express';


const logService: LogService = new LogService();

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { headers, body, params, query, originalUrl, method } = req;
    const ip: string | undefined = Helper.getIp(req);
    const userAgent: string = headers.userAgent;
    const device: string = Helper.getDevice(headers.userAgent);

    console.log('-------------------------');
    console.log(`${method}: ${originalUrl}`);
    console.log('BODY:', body);
    console.log('PARAMS:', params);
    console.log('QUERY:', query);
    console.log('-------------------------');

    await logService.addLog(`${method}: ${originalUrl}`, 'info', [{ body, params, query, ip, userAgent, device }]);

    next();
};
