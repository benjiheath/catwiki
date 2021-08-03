import express from "express";
const router = express.Router();
const { selectBreed } = require("../controllers/selectController");

router.get("/:select", selectBreed);

module.exports = router;
