import express from 'express';
const router = express.Router();
const { filterBreeds } = require('../controllers/searchController');

router.get('/:query', filterBreeds);

module.exports = router;
