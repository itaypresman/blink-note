import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import NoteRouter from './routes/note.routes';
import * as Config from './config';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import { mongoConnect } from './utils/mongo';


const app: Express = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/note', NoteRouter);
app.get('/', (req, res) => res.send('Hello World'));
app.use(ErrorMiddleware);


(async (): Promise<void> => {
    await mongoConnect();
    app.listen(Config.port, (): void => {
        console.log(`Application running on port: ${ Config.port }`);
    });
})();
