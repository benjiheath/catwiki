import { NextFunction, Request, Response } from "express";
const axios = require("axios");

exports.filterBreeds = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = await axios.get("https://api.thecatapi.com/v1/breeds/search?", {
      headers: { "x-api-key": process.env.API_KEY },
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
