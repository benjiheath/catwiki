import { NextFunction, Request, Response } from "express";
const axios = require("axios");
const pool = require("../db");
const { formatForSelect } = require("./formatHandlers/formatForSelect");
import { ParsedCat, Cat } from "../types";

exports.getVisits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get breeds (rows) from db sorted by visits
    const { rows: breeds } = await pool.query("SELECT * FROM breeds ORDER BY visits DESC LIMIT 10");

    const getCat = async (breed: string): Promise<Cat> => {
      const { data } = await axios.get(process.env.API_URL_SELECT, {
        headers: { "x-api-key": process.env.API_KEY },
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
        return formatForSelect(cat, breed.visits);
      })
    )) as unknown as ParsedCat[];

    res.status(200).json({ status: "Successfully retrieved visits", data: dataOfInterest });
  } catch (err) {
    res.status(200).json({ status: err, errmsg: err.msg });
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
//     const formattedData = formatForSelect(data, br.visits);

//     return formattedData;
//   })
// );
