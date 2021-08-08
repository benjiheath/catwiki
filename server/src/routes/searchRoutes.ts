import express from 'express';
import { filterBreeds } from '../controllers/searchController';
const router = express.Router();

router.get('/:query', filterBreeds);

export { router as filterRouter };
