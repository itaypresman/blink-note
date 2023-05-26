import { Request } from 'express';

export const getDevice = (userAgent: string): string => {
    return (/android/i.test(userAgent))
        ? 'android'
        : (/iPad|iPhone|iPod/.test(userAgent))
            ? 'ios'
            : 'desktop';
};

export const getIp = (req: Request): string | undefined => req.headers['x-forwarded-for'] || req.connection.remoteAddress;
