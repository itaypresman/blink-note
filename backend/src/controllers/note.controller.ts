import { Request, Response, NextFunction } from 'express';
import NoteService from '../services/note.service';


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

export const getNote = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
        next(e);
    }
};
