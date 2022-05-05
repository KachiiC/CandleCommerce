import { Router } from 'express';
import {
  addColourController,
  deleteColourController
} from '../controllers/colour.controller';

const router = Router();

router.post('/colour', addColourController);
router.delete('/colour/:colName', deleteColourController);

export default router;
