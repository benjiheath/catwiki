import { NextFunction, Request, Response } from 'express';
import pick from 'lodash/pick';
import axios from 'axios';
import { Breed } from '../types';

interface NameAndId {
  name: string;
  id: string;
}

export const filterBreeds = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { data } = await axios.get(process.env.API_URL_BREED as string, {
      headers: { 'x-api-key': process.env.API_KEY },
      params: {
        q: req.params.query,
      },
    });
    if (data.length === 0) {
      res.status(200).send({ status: 'no results', message: 'Request returned no results' });
      return;
    }

    // isolate name & id only
    const formattedData = data.map((cat: Required<NameAndId>) => pick(cat, 'name', 'id'));

    res.status(200).send({ status: 'ok', results: data.length, data: formattedData });
  } catch (err) {
    next(err);
  }
};
