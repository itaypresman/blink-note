import { Request, Response, NextFunction } from 'express';
import NoteService from '../services/note.service';


const noteService: NoteService = new NoteService();
export const createNote = async (req: Request, res: Response, next: NextFunction) => {
    try {

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
