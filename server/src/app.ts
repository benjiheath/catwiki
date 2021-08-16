import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { filterRouter, selectRouter, visitsRouter } from './routes';
import { NextFunction, Request, Response } from 'express';
import { ErrorException } from './types';

const app = express();

app.use(cors());

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/query', filterRouter);
app.use('/select', selectRouter);
app.use('/visits', visitsRouter);

// 404 handler for all unhandled routes
app.all('*', (req: Request, res: Response, next: NextFunction): void => {
  const err = new Error(`Can't find ${req.originalUrl}`) as ErrorException;
  err.status = 'fail';
  err.statusCode = 404;
  next(err);
});

// global error handler
app.use((err: ErrorException, req: Request, res: Response, next: NextFunction): void => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res
    .status(err.statusCode)
    .send({ status: err.status, code: err.statusCode, message: err.message });
});

export default app;
