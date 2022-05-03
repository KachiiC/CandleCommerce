import { Router } from 'express';
import {
  createOrderController,
  deleteOrderController,
  findAllOrdersController,
  findUserOrdersController,
  shipOrderController,
  updateOrderController
} from '../controllers/order.controller';
import { getUserIdIfExists, checkForAdminRole } from '../middleware/user.check';
import checkOrderStatus from '../middleware/order.check';

const router = Router();

router.get('/orders', checkForAdminRole, findAllOrdersController);
router.get('/user-orders', findUserOrdersController);
router.post('/orders', getUserIdIfExists, createOrderController);
router.put('/orders/update', checkOrderStatus, updateOrderController);
router.put('/orders/ship', checkForAdminRole, shipOrderController);
router.delete('/orders', checkOrderStatus, deleteOrderController);

export default router;
