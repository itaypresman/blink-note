import LogSchema, { ILog } from '../utils/mongo/Log';
import { Model } from 'mongoose';


export default class LogService {
    private readonly Log: Model<ILog>;

    constructor() {
        this.Log = LogSchema;
    }

    addLog(message: string, type: string|undefined = 'error', data: object[] = []): Promise<ILog> {
        const log: ILog = new this.Log({ message, type, data });

        return log.save();
    }
};
