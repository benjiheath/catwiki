import { NextFunction, Request, Response } from "express";
const axios = require("axios");

console.log(process.env.API_KEY);

exports.filterBreeds = async (req: Request, res: Response, next: NextFunction) => {
  console.log(process.env.API_KEY);
  try {
    const { data } = await axios.get("https://api.thecatapi.com/v1/breeds/search?", {
      headers: { "x-api-key": "11fddd33-7c21-48ce-9e69-2cf63698a5f2" },
      params: {
        q: req.params.query,
      },
    });

    if (data.length === 0) {
      res.status(200).json({ status: "no results", message: "Request returned no results" });
      return;
    }

    res.status(200).json({ status: "ok", results: data.length, data });
  } catch (err) {
    console.error(err);
  }
};
