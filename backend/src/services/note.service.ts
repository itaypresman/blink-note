import NoteSchema, { INote } from '../utils/mongo/Note';
import { Model } from 'mongoose';


export default class NoteService {
    private Note: Model<INote>;

    constructor() {
        this.Note = NoteSchema;
    }
};
