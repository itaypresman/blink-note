import { Request, Response, NextFunction } from 'express';
import NoteService from '../services/note.service';
import { INote } from '../utils/mongo/Note';
import ApiError from '../middlewares/ErrorMiddleware/ApiError';


const noteService: NoteService = new NoteService();

interface createNoteBody {
    text: string,
    validFor: string | undefined,
}

export const createNote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { text, validFor }: createNoteBody = req.body;
        await noteService.createNote(text, validFor);

        res.json({ error: false });
    } catch (e) {
        next(e);
    }
};

export const getNote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id: string = req.params.id;
        const now: Date = new Date();
        const note: INote | null = await noteService.getNote(id);

        if (!note || (now > note.validTo)) {
            return next(ApiError.notFound());
        }

        await noteService.deleteNote(id);
        res.json({ error: false, data: note });
    } catch (e) {
        next(e);
    }
};

export const isExisted = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id: string = req.params.id;
        const note: boolean = await noteService.isExist(id);

        res.json({ error: false, data: { isExisted: !!note } });
    } catch (e) {
        next(e);
    }
};
