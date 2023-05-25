import express, { Router } from 'express';
import * as NoteController from '../controllers/note.controller';


const router: Router = Router();

router.post('/create', NoteController.createNote);
router.post('/get', NoteController.getNote);


export default router;
