import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { filterRouter, selectRouter, visitsRouter } from './routes';
import { NextFunction, Request, Response } from 'express';

const app = express();

app.use(cors());

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/query', filterRouter);
app.use('/select', selectRouter);
app.use('/visits', visitsRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ status: 'fail', message: `Can't find ${req.originalUrl}` });
});

export default app;
