import axios from 'axios';
import { pool } from '../db';
import { formatCatDataForClient } from './formatHandlers/formatCatDataForClient';
import { ParsedCat, Cat, ExpressAsync } from '../types';

export const getVisits = async ({ req, res, next }: ExpressAsync) => {
  try {
    // get breeds (rows) from db sorted by visits
    const { rows: breeds } = await pool.query('SELECT * FROM breeds ORDER BY visits DESC LIMIT 10');

    const getCat = async (breed: string): Promise<Cat[]> => {
      const { data } = await axios.get(process.env.API_URL_SELECT as string, {
        headers: { 'x-api-key': process.env.API_KEY },
        params: {
          breed_id: breed,
          limit: 1,
        },
      });
      return data;
    };

    // query API for each breed ID & format this data to deliver to client
    const dataOfInterest = (await Promise.all(
      breeds.map(async (breed: any) => {
        const cat = await getCat(breed.breed);
        return formatCatDataForClient(cat, breed.visits);
      })
    )) as ParsedCat[];

    res.status(200).send({ status: 'Successfully retrieved visits', data: dataOfInterest });
  } catch (err) {
    next(err);
  }
};

/*
















*/
// For each breed, get all of the breed's data
// const dataOfInterest = await Promise.all(
//   breeds.map(async (breed: any) => {
//     const { data } = await axios.get(process.env.API_URL_SELECT, {
//       headers: { "x-api-key": process.env.API_KEY },
//       params: {
//         breed_id: breed.breed,
//         limit: 1,
//       },
//     });

//     console.log("data:", data);
//     // format necessary data for iteration; also inject # of visits
//     const formattedData = formatCatDataForClient(data, br.visits);

//     return formattedData;
//   })
// );
