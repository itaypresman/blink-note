import mongoose, { Schema, Document } from 'mongoose';


export interface ILog extends Document {
    type: string;
    message: string;
    data: object[];
}

const NoteSchema: Schema = new Schema({
    type: { type: String, required: true, default: 'error' },
    message: { type: String, required: true },
    data: { type: Array, required: true, default: [] },
}, { timestamps: true});

const Log = mongoose.model<ILog>('Log', NoteSchema);


export default Log;
