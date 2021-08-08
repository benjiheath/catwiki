import { NextFunction, Request, Response } from 'express';
import axios from 'axios';

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
      res.status(200).json({ status: 'no results', message: 'Request returned no results' });
      return;
    }

    res.status(200).json({ status: 'ok', results: data.length, data });
  } catch (err) {
    console.error(err);
  }
};
