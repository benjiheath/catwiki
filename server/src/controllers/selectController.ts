import { NextFunction, Request, Response } from "express";
const axios = require("axios");
const { formatForSelect } = require("./formatHandlers/formatForSelect");

exports.selectBreed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = await axios.get(process.env.API_URL_SELECT, {
      headers: { "x-api-key": process.env.API_KEY },
      params: {
        breed_id: req.params.select,
        limit: 9,
      },
    });

    // format necessary data for iteration;
    const dataOfInterest = formatForSelect(data);

    res.status(200).json({ ...dataOfInterest });
  } catch (err) {
    console.log(err);
  }
};
