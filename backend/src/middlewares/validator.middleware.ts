import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import ApiError from './ErrorMiddleware/ApiError';


export default (req: Request, res: Response, next: NextFunction): void => {
    try {
        validationResult(req).throw();
        next();
    } catch (e: any) {
        next(ApiError.badRequest('Bad Request', e.errors));
    }
};
