const router = require('express').Router();
const {
  findAllOrders,
  findUserOrders,
  createOrder,
  update
} = require('../controllers/order_controller');
const { getUserIdIfExists } = require('../middleware/user_check');

router.get('/ordersUser/:id', findUserOrders);

router.get('/orders', findAllOrders);
router.post('/orders', getUserIdIfExists, createOrder);
router.put('/orders', update);

module.exports = router;
