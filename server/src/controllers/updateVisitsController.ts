import { NextFunction, Request, Response } from 'express';
import { pool } from '../db';

export const updateVisits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.breed;

    // Does breed already exist?
    const breed = await pool.query('SELECT * FROM breeds WHERE breed = $1', [id]);
    const breedAlreadyExists = breed.rowCount > 0;

    // if YES, add visit || if NO, add breed & visit
    breedAlreadyExists
      ? await pool.query('UPDATE breeds SET visits = visits + 1 WHERE breed = $1', [id])
      : await pool.query('INSERT INTO breeds (breed, visits) VALUES ($1, $2)', [id, 1]);

    res.status(200).json({ status: `Successfully submitted visit for: '${id}'` });
  } catch (err) {
    next(err);
  }
};
