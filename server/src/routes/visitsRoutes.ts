import express from "express";
const router = express.Router();
const { updateVisits } = require("../controllers/updateVisitsController");
const { getVisits } = require("../controllers/getVisitsController");

router.post("/:breed", updateVisits);
router.get("/", getVisits);

module.exports = router;
