import mongoose, { Schema, Document } from 'mongoose';


interface ILog extends Document {
    id: string;
    text: string;
    validTo: Date;
}

const NoteSchema: Schema = new Schema({
    type: { type: String, required: true, default: 'error' },
    message: { type: String, required: true },
    data: { type: Array, required: true, default: [] },
}, { timestamps: true});

const Log = mongoose.model<ILog>('Log', NoteSchema);


export default Log;
