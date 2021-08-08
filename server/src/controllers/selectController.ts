import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import { formatCatDataForClient } from './formatHandlers/formatCatDataForClient';

export const selectBreed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = await axios.get(process.env.API_URL_SELECT as string, {
      headers: { 'x-api-key': process.env.API_KEY },
      params: {
        breed_id: req.params.select,
        limit: 9,
      },
    });

    // format necessary data for iteration;
    const dataOfInterest = formatCatDataForClient(data);

    res.status(200).json({ ...dataOfInterest });
  } catch (err) {
    console.log(err);
  }
};
