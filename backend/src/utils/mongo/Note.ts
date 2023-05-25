import mongoose, { Schema, Document } from 'mongoose';


export interface INote extends Document {
    id: string;
    text: string;
    validTo: Date;
}

const NoteSchema: Schema = new Schema({
    id: { type: String, required: true },
    text: { type: String, required: true },
    validTo: { type: Date, required: true },
}, { timestamps: true});

const Note = mongoose.model<INote>('Note', NoteSchema);


export default Note;
