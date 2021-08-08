import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { filterRouter, selectRouter, visitsRouter } from './routes';

const app = express();

app.use(cors());

//* Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/query', filterRouter);
app.use('/select', selectRouter);
app.use('/visits', visitsRouter);

export default app;
