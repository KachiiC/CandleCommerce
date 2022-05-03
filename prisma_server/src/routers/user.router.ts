import { userCheck, userUpdate } from '../controllers/user.controller'
import { Router } from 'express'

const router = Router();

router.post('/signin', userCheck);
router.put('/profile', userUpdate);

export default router;
