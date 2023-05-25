import { config } from 'dotenv';


config();
const env: NodeJS.ProcessEnv = process.env;


export const port: number = +env.PORT || 3000;
export const mongoUri: string = env.MONGO_URI;
