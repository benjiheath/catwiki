import express from 'express';
import { updateVisits } from '../controllers/updateVisitsController';
import { getVisits } from '../controllers/getVisitsController';
const router = express.Router();

router.post('/:breed', updateVisits);
router.get('/', getVisits);

export { router as visitsRouter };
