import { NextFunction, Request, Response } from "express";
const axios = require("axios");
const { formatForSelect } = require("./formatHandlers/formatForSelect");

exports.selectBreed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = await axios.get("https://api.thecatapi.com/v1/images/search?", {
      headers: { "x-api-key": "11fddd33-7c21-48ce-9e69-2cf63698a5f2" },
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
