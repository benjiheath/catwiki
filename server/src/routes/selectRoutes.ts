import express from 'express';
import { selectBreed } from '../controllers/selectController';
const router = express.Router();

router.get('/:select', selectBreed);

export { router as selectRouter };
