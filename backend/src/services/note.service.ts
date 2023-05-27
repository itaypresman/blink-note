import { v4 as uuidv4 } from 'uuid';
import NoteSchema, { INote } from '../utils/mongo/Note';
import { Model } from 'mongoose';


export default class NoteService {
    private readonly Note: Model<INote>;

    constructor() {
        this.Note = NoteSchema;
    }

    createNote(text: string, validFor: string | undefined = '1d'): Promise<INote> {
        const validTo: Date = this.getEndDateByPeriod(validFor);
        const id: string = uuidv4();
        const note: INote = new this.Note({ id, text, validTo });

        return note.save();
    }

    private getEndDateByPeriod(period: string): Date {
        const num: number = +period.slice(0, -1);
        const type: string = period[period.length - 1];
        const end: Date = new Date();

        switch (type) {
            case 'm':
                end.setMinutes(end.getMinutes() + num);
                break;
            case 'h':
                end.setHours(end.getHours() + num);
                break;
            case 'd':
                end.setDate(end.getDate() + num);
                break;
            case 'w':
                end.setDate(end.getDate() + (num * 7));
                break;
            case 'M':
                end.setMonth(end.getMonth() + num);
                break;
        }

        return end;
    }

    getNote(id: string): Promise<INote | null> {
        return this.Note.findOne({ id }, { _id: 0, __v: 0 });
    }

    deleteNote(id: string): Promise<any> {
        return this.Note.deleteOne({ id });
    }

    async isExist(id: string): Promise<boolean> {
        const now: Date = new Date();

        return !!(await this.Note.exists({ id, validTo: { $gte: now } }));
    }
};
