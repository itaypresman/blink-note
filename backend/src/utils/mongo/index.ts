import mongoose from 'mongoose';
import { mongoUri } from '../../config';

export const mongoConnect = async (): Promise<void> => {
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};
