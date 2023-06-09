import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';
import validator from '../middlewares/validator.middleware';
import { body, param } from 'express-validator';


const router: Router = Router();

router.post(
    '/create',
    body('text').isString(),
    body('validFor').optional().custom((val: string) => /^\d+[hdwm]$/.test(val)),
    validator,
    NoteController.createNote
);

router.get(
    '/exists/:id',
    param('id').isString(),
    validator,
    NoteController.isExisted
);

router.get(
    '/get/:id',
    param('id').isString(),
    validator,
    NoteController.getNote
);


export default router;
