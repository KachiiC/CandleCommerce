import { Router } from 'express'
import { 
    addColourController, 
    deleteColourController 
} from '../controllers/colour.controller';

const router = Router();

router.post('/colour/:id', addColourController);
router.delete('/colour/:id', deleteColourController);

export default router;
